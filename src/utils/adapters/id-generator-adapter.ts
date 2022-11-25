import { IdGeneratorInterface } from 'src/utils/abstract/id-generator-interface';
import { v4 as uuid } from 'uuid';

export class IdGeneratorAdapter implements IdGeneratorInterface {
  generateId(): string {
    return uuid();
  }
}
