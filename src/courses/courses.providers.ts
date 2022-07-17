import { Course } from './entities/course.entitiy';
import { DataSource } from 'typeorm';
import { Tag } from './entities/tag.entity';

export const coursesProviders = [
  {
    provide: 'courses_repository',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Course),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'tags_repository',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Tag),
    inject: ['DATA_SOURCE'],
  },
];
