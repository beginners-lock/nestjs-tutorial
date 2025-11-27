import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ROLES } from '../dto/create-user.dto';

export class ParseRolePipe implements PipeTransform {
  transform(value: any) {
    try {
      if (typeof value !== 'string') throw new Error();

      if (
        ROLES.includes(value) ||
        ROLES.map((role) => role.toLowerCase()).includes(value)
      ) {
        return value.toUpperCase();
      } else {
        throw new Error();
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new BadRequestException(
        'Validation failed (Invalid role provided)',
      );
    }
  }
}
