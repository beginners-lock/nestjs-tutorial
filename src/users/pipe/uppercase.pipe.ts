import { BadRequestException, PipeTransform } from '@nestjs/common';

export class ParseUppercasePipe implements PipeTransform {
  transform(value: any) {
    try {
      if (typeof value !== 'string') throw new Error();
      return value.toUpperCase();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new BadRequestException('Validation failed');
    }
  }
}
