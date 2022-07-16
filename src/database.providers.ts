import { DataSource } from 'typeorm';
console.log(__dirname);

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'postgres',
        entities: ['./dist/**/courses/entities/*.js'],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
