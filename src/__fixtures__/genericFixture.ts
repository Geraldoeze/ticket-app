
type genericFixture = {
  createFn?: (item: any) => Promise<any>;
  FindFn?: (opts: any) => Promise<any>;
  FindOneFn?: (id: string) => Promise<any>;
  editFn?: (id: string, payload: any) => Promise<any>;
  deleteFn?: (id: any) => Promise<any>;
  data?: any;
  idField?: string;
}

const genericFixture = ({ 
  createFn, 
  FindFn,
  FindOneFn,
  editFn,
  deleteFn,
  data, 
  idField = 'id' 
}: genericFixture) => ({
  buildAll() {
    return JSON.parse(JSON.stringify(data));
  },

  build(id: string, overrides: object) {
    const item = this.buildAll().find(
      (item: any) => item[idField] === id,
    );

    if (!item) {
      throw new Error(`No found fixture with id: ${id}.`);
    }

    return {
      ...item,
      ...overrides,
    };
  },

  async createAll() {
    const items = [];

    for (let item of this.buildAll()) {
      items.push(await this.create(item.id));
    }

    return items;
  },

  async create(id: string, overrides?: object): Promise<any> {
    const item = this.build(id, overrides || {});

    if (!createFn) {
      return item;
    }

    return await createFn(item);
  },

  async find(opt: any): Promise<any> {
    if (!FindFn) {
      return [];
    }

    return await FindFn(opt);
  }
});

export default genericFixture;
