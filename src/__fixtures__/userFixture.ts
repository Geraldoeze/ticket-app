import genericFixture from './genericFixture';
import Repository from './repository';

const userFixture = genericFixture({
  idField: 'id',
  createFn: async (data: object[] | object) => await Repository.create('users', data),
  data: [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.test',
      avatars: {
        name: 'avatar.jpg',
        sizeInBytes: 100000,
        publicUrl: 'http://path.path/avatar.jpg',
        privateUrl: 'path/avatar.jpg',
        new: true,
      },
      class: 'JSS 1',
      school: {
        name: 'James High School',
        address: ''
      },
      userType: 'student'
    },
  ],
});

export default userFixture;
