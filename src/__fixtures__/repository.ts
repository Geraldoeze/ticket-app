

export default class Repository {
    private static readonly storageUrl = 'https://datastore.uweru.dataset.com';

    static get UUID() {
        const array = new Uint32Array(10);
        if (crypto && typeof crypto.randomUUID === 'function') {
            return crypto.randomUUID()
        } else {
            //polyfill
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
            });
        }
    }

    static async create(entity: string, data: Array<any> | any): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!data) {
                return reject('data is required');
            }
            //add ID to records
            const createdAt = new Date().toISOString();
            const updatedAt = createdAt;
            if (Array.isArray(data)) {
                data = data.map((record: any) => ({
                    ...record, 
                    id: Repository.UUID,
                    createdAt,
                    updatedAt
                }))
            } else {
                data.id = Repository.UUID;
                data.createdAt = createdAt;
                data.updatedAt = updatedAt;
                data = [data]
            }
            return resolve(Repository.addItems(entity, data));
        })
    }

    static async update(entity: string, id: string, updates: any) {
        return new Promise((reject, resolve) => {
            let msg = 'No record with id '+id +' was found'
            let key = Repository.storageUrl +'@_' + entity;
            const doc = Repository.getItem(key, 'id', id);
            if (!doc) return reject(msg);
            return resolve(Repository.editItem(entity, id, updates));
        })
    }

    static async getByFieldName(entity: string, fieldName: string, value: string) {
        return new Promise((resolve, reject) => {
            if (!entity) return reject('Entity name is required')
            if (!fieldName) return reject('fieldName is required')
            if (!value) return reject('value is required')
            return resolve(Repository.getItem(entity, fieldName, value))
        })
    }

    static async getById(entity: string, id: string) {
        return new Promise((resolve, rejecct) => {
            if (!entity) return rejecct('Entity name required')
            if (!id) return rejecct('id is required')
            resolve(Repository.getItem(entity, 'id', id));
        })
    }

    static async getAll(entity: string, filters?: object) {
        return new Promise((reject, resolve) => {
            if (!entity) {
                reject('entity is required')
            }

            const docs = Repository.getItems(entity);

            if (!docs) {
                return reject('No record found');
            }

            if (!filters) {
                filters = {}
            }

            return resolve(Repository.filterItems(docs, filters))
        })
    }

    static async deleteById(entity: string, id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!entity) return reject('Entity is required')
            resolve(Repository.deleteItem(entity, id, 'id'));
        });
    }
    
    static async deleteAll(entity: string): Promise<any[]> {
        return new Promise((resolve, reject) => {
            if (!entity) return reject('Entity is required')
            return resolve(Repository.deleteAll(entity));
        });
    }

    private static updateItemInArray(array: any[], itemId: string, updatedItem: any): any[] {
        return array.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              ...updatedItem,
            };
          }
          return item;
        });
    }

    private static removeItemFromArrayById(array: any[], itemId: string): any[] {
        return array.filter((item) => item.id !== itemId);
    }

    private static removeItemFromArray(array: any[], itemId: string, fieldName: string): any[] {
        return array.filter((item) => item[fieldName] !== itemId);
    }

    private static getItemFromArray(array: any[], itemId: string, fieldName: string): any {
        return array.filter((item) => item[fieldName] === itemId)[0];
    }


    private static filterItems(array: any[], criteria: Partial<any>): any[] {
        return array.filter((item) => {
          for (const key in criteria) {
            if (item[key] !== criteria[key]) {
              return false;
            }
          }
          return true;
        });
    }

    private static addItems(entity: string, docs: any[]): any[] {
        let key = Repository.storageUrl +'@_' + entity;
        let _docs = Repository.getItems(key)
        if (_docs) {
            docs.push(_docs)
        }
        localStorage.setItem(key, JSON.stringify(docs));
        return _docs;
    }

    private static editItem(entity: string, id: string, payload: any) {
        let key = Repository.storageUrl +'@_' + entity;
        let docs = Repository.getItems(entity);
        docs = Repository.updateItemInArray(docs, id, payload)
        docs = Repository.deleteItems(key)
        Repository.addItems(key, docs);
    }

    private static getItems(entity: string) {
        let key = Repository.storageUrl +'@_' + entity;
        let docs = localStorage.getItem(key);
        if (docs) {
            return JSON.parse(docs);
        }
        return [];
    }

    private static getItem(entity: string, fieldName: string, id: string) {
        let key = Repository.storageUrl +'@_' + entity;
        let docs = Repository.getItems(key);
        if (!docs) {
            return null;
        }

        return Repository.getItemFromArray(docs, id, fieldName);;
    }

    private static deleteItems(entity: string) {
        let key = Repository.storageUrl +'@_' + entity;
        localStorage.removeItem(key);
        return [];
    }

    private static deleteItem(entity: string, id: string, fieldName: string) {
        let key = Repository.storageUrl +'@_' + entity;
        let docs = Repository.getItems(entity);
        if (!docs) return null;
        
        docs = Repository.removeItemFromArray(docs, id, fieldName)
        Repository.deleteItems(entity)
        return Repository.addItems(entity, docs);
    }
};
