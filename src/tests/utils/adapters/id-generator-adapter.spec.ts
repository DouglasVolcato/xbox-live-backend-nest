import { IdGeneratorAdapter } from '../../../utils/adapters/id-generator-adapter';

interface SutTypes {
  idGeneratorAdapter: IdGeneratorAdapter;
}

function makeSut(): SutTypes {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  return { idGeneratorAdapter };
}

describe('IdGeneratorAdapter', () => {
  test('GenerateId should return a string', () => {
    const { idGeneratorAdapter } = makeSut();
    const id = idGeneratorAdapter.generateId();
    expect(typeof id).toBe('string');
  });
});
