import { CreateProfileUseCase } from 'src/data/useCases/profile/create-profile-usecase';
import { DeleteProfileUseCase } from 'src/data/useCases/profile/delete-profile-usecase';
import { GetAllProfilesUseCase } from 'src/data/useCases/profile/getAll-profile-usecase';
import { GetOneProfileUseCase } from 'src/data/useCases/profile/getOne-profile-usecase';
import { UpdateProfileUseCase } from 'src/data/useCases/profile/update-profile-usecase';
import { ProfileRepository } from 'src/infra/repositories/profile-repository';

export function makeProfileServiceFactory() {
  const repository = new ProfileRepository();

  const createProfileUseCase = new CreateProfileUseCase(repository);
  const getOneProfileUseCase = new GetOneProfileUseCase(repository);
  const getAllProfilesUseCase = new GetAllProfilesUseCase(repository);
  const updateProfileUseCase = new UpdateProfileUseCase(repository);
  const deleteProfileUseCase = new DeleteProfileUseCase(repository);

  return {
    createProfileUseCase,
    getOneProfileUseCase,
    getAllProfilesUseCase,
    updateProfileUseCase,
    deleteProfileUseCase,
  };
}
