import { IdGeneratorAdapter } from '../../../utils/adapters/id-generator-adapter';

function error(): any {
  return new Promise((resolve, reject) => reject(new Error()));
}

interface SutTypes {
  idGeneratorAdapter: IdGeneratorAdapter;
}

function makeSut(): SutTypes {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  return { idGeneratorAdapter };
}

describe('IdGeneratorAdapter', () => {
  test('GenerateId should return a string.', () => {
    const { idGeneratorAdapter } = makeSut();
    const id = idGeneratorAdapter.generateId();
    expect(typeof id).toBe('string');
  });

  test('Should throw if GenerateId throws.', () => {
    const { idGeneratorAdapter } = makeSut();
    jest.spyOn(idGeneratorAdapter, 'generateId').mockReturnValueOnce(error());
    const id = idGeneratorAdapter.generateId();
    expect(id).rejects.toThrow();
  });
});
