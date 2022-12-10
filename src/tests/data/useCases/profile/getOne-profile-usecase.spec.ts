import { makeError } from '../../../test-utils/errors/make-error';
import { GetOneProfileUseCase } from '../../../../data/useCases/profile/getOne-profile-usecase';
import { fakeProfile } from '../../../test-utils/fake-entities/fake-profile';
import { ProfileRepositoryStub } from '../../../test-utils/stubs/repositories/profile-repository-stub';

interface SutTypes {
  profileRepositoryStub: ProfileRepositoryStub;
  getOneProfileUseCase: GetOneProfileUseCase;
}

function makeSut(): SutTypes {
  const profileRepositoryStub = new ProfileRepositoryStub();
  const getOneProfileUseCase = new GetOneProfileUseCase(profileRepositoryStub);
  return { profileRepositoryStub, getOneProfileUseCase };
}

describe('GetOneProfileUseCase', () => {
  test('Ensure ProfileReposiory is called with correct value.', async () => {
    const { profileRepositoryStub, getOneProfileUseCase } = makeSut();
    const getOneSpy = jest.spyOn(profileRepositoryStub, 'getOne');
    await getOneProfileUseCase.execute(fakeProfile.id, fakeProfile.id);
    expect(getOneSpy).toHaveBeenCalledWith(fakeProfile.id);
  });

  test('Should throw if ProfileReposiory throws.', async () => {
    const { profileRepositoryStub, getOneProfileUseCase } = makeSut();
    jest
      .spyOn(profileRepositoryStub, 'getOne')
      .mockReturnValueOnce(makeError());
    const promise = getOneProfileUseCase.execute(
      fakeProfile.id,
      fakeProfile.id,
    );
    await expect(promise).rejects.toThrow();
  });

  test('Should return void if foundProfile.userId is different than the given user id.', async () => {
    const { profileRepositoryStub, getOneProfileUseCase } = makeSut();
    jest
      .spyOn(profileRepositoryStub, 'getOne')
      .mockReturnValueOnce(
        new Promise((resolve) =>
          resolve({ ...fakeProfile, userId: 'another_id' }),
        ),
      );
    const profile = await getOneProfileUseCase.execute(
      fakeProfile.id,
      fakeProfile.id,
    );
    expect(profile).toBeFalsy();
  });

  test('Should return void if foundProfile.getOne return void.', async () => {
    const { profileRepositoryStub, getOneProfileUseCase } = makeSut();
    jest
      .spyOn(profileRepositoryStub, 'getOne')
      .mockReturnValueOnce(new Promise((resolve) => resolve()));
    const profile = await getOneProfileUseCase.execute(
      fakeProfile.id,
      fakeProfile.id,
    );
    expect(profile).toBeFalsy();
  });
});
