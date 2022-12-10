import {
  fakeUser,
  fakeUserWithoutPassword,
} from '../../../test-utils/fake-user';
import { UserRepositoryStub } from '../../../test-utils/user-repository-stub';
import { makeError } from '../../../test-utils/make-error';
import { UpdateUserUseCase } from '../../../../data/useCases/user/update-user-usecase';

interface SutTypes {
  userRepositoryStub: UserRepositoryStub;
  updateUserUseCase: UpdateUserUseCase;
}

function makeSut(): SutTypes {
  const userRepositoryStub = new UserRepositoryStub();
  const updateUserUseCase = new UpdateUserUseCase(userRepositoryStub);
  return { userRepositoryStub, updateUserUseCase };
}

describe('UpdateUserUseCase', () => {
  test('Should call UserRepository with correct values.', async () => {
    const { userRepositoryStub, updateUserUseCase } = makeSut();
    const updateSpy = jest.spyOn(userRepositoryStub, 'update');
    await updateUserUseCase.execute(fakeUser, fakeUser.id);
    expect(updateSpy).toHaveBeenCalledWith(
      expect.objectContaining(fakeUserWithoutPassword),
      fakeUser.id,
    );
  });

  test('Should throw if UserRepository throws.', async () => {
    const { userRepositoryStub, updateUserUseCase } = makeSut();
    jest.spyOn(userRepositoryStub, 'update').mockReturnValueOnce(makeError());
    const promise = updateUserUseCase.execute(fakeUser, fakeUser.id);
    await expect(promise).rejects.toThrow();
  });

  test('Should return true if called with correct values.', async () => {
    const { updateUserUseCase } = makeSut();
    const promise = await updateUserUseCase.execute(fakeUser, fakeUser.id);
    expect(promise).toBe(true);
  });
});
