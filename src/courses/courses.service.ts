import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entitiy';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'fundamentos do framekwork do nestjs',
      description: 'fundamentos do framekwork do nestjs',
      tags: ['node,js', 'typescript', 'nestjs', 'typeorm'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((course) => course.id === Number(id));

    if (!course) {
      throw new HttpException(`Course ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const position = this.courses.findIndex((c) => c.id === Number(id));

    this.courses[position] = updateCourseDto;
  }

  remove(id: string) {
    const position = this.courses.findIndex((c) => c.id === Number(id));

    if (position >= 0) {
      this.courses.splice(position, 1);
    }
  }
}
