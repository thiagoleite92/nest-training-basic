import { Course } from './entities/course.entitiy';
import { DataSource } from 'typeorm';

export const coursesProviders = [
  {
    provide: 'courses_repository',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Course),
    inject: ['DATA_SOURCE'],
  },
];
