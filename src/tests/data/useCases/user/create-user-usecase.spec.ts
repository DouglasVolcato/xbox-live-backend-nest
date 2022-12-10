import { makeError } from '../../../test-utils/make-error';
import { CreateUserUseCase } from '../../../../data/useCases/user/create-user-usecase';
import {
  fakeUser,
  fakeUserWithoutPassword,
} from '../../../test-utils/fake-user';
import { UserRepositoryStub } from '../../../test-utils/user-repository-stub';

interface SutTypes {
  createUserUseCase: CreateUserUseCase;
  userRepositoryStub: UserRepositoryStub;
}

function makeSut(): SutTypes {
  const userRepositoryStub = new UserRepositoryStub();
  const createUserUseCase = new CreateUserUseCase(userRepositoryStub);
  return { createUserUseCase, userRepositoryStub };
}

describe('CreateUserUseCase', () => {
  test('Should call userRepository with correct value.', async () => {
    const { createUserUseCase, userRepositoryStub } = makeSut();
    const createSpy = jest.spyOn(userRepositoryStub, 'create');
    await createUserUseCase.execute(fakeUser);
    expect(createSpy).toHaveBeenCalledWith(
      expect.objectContaining(fakeUserWithoutPassword),
    );
  });

  test('Should throw if userRepository throws.', async () => {
    const { createUserUseCase, userRepositoryStub } = makeSut();
    jest.spyOn(userRepositoryStub, 'create').mockReturnValueOnce(makeError());
    const promise = createUserUseCase.execute(fakeUser);
    await expect(promise).rejects.toThrow();
  });

  test('Should return true if called with correct user.', async () => {
    const { createUserUseCase } = makeSut();
    const promise = await createUserUseCase.execute(fakeUser);
    expect(promise).toBe(true);
  });
});
