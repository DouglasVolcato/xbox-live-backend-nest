import { HasherAdapter } from '../../../utils/adapters/hasher-adapter';

function error(): any {
  return new Promise((resolve, reject) => reject(new Error()));
}

interface SutTypes {
  hasherAdapter: HasherAdapter;
}

function makeSut(): SutTypes {
  const hasherAdapter = new HasherAdapter();
  return { hasherAdapter };
}

describe('HasherAdapter', () => {
  test('Hash method should return a string.', () => {
    const { hasherAdapter } = makeSut();
    const hash = hasherAdapter.hash('any_password', 10);
    expect(hash).toBeDefined();
    expect(typeof hash).toBe('string');
  });

  test('Should throw if Hash throws.', () => {
    const { hasherAdapter } = makeSut();
    jest.spyOn(hasherAdapter, 'hash').mockReturnValueOnce(error());
    const hash = hasherAdapter.hash('any_password', 10);
    expect(hash).rejects.toThrow();
  });

  test('Compare should return a boolean.', () => {
    const { hasherAdapter } = makeSut();
    const compare = hasherAdapter.compare('any_password', 'hashed_password');
    expect(compare).toBeDefined();
    expect(typeof compare).toBe('boolean');
  });

  test('Should throw if Compare throws.', () => {
    const { hasherAdapter } = makeSut();
    jest.spyOn(hasherAdapter, 'compare').mockReturnValueOnce(error());
    const compare = hasherAdapter.compare('any_password', 'hashed_password');
    expect(compare).rejects.toThrow();
  });
});
