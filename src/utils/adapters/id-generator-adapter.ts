import { IdGenerator } from 'src/domain/utils/idGenerator';
import { v4 as uuid } from 'uuid';

export class IdGeneratorAdapter implements IdGenerator {
  generateId(): string {
    return uuid.toString();
  }
}
