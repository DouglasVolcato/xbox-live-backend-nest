import { CreateUserUseCase } from 'src/data/useCases/user/create-user-usecase';
import { DeleteUserUseCase } from 'src/data/useCases/user/delete-user-usecase';
import { GetAllUsersUseCase } from 'src/data/useCases/user/getAll-user-usecase';
import { GetOneUserByEmailUseCase } from 'src/data/useCases/user/getOne-user-byEmail-usecase';
import { GetOneUserByIdUseCase } from 'src/data/useCases/user/getOne-user-byId-usecase';
import { UpdateUserUseCase } from 'src/data/useCases/user/update-user-usecase';
import { UserRepository } from 'src/infra/repositories/user-repository';

export function makeUserServiceFactory() {
  const repository = new UserRepository();

  const createUserUseCase = new CreateUserUseCase(repository);
  const getOneUserByEmailUseCase = new GetOneUserByEmailUseCase(repository);
  const getOneUserByIdUseCase = new GetOneUserByIdUseCase(repository);
  const getAllUsersUseCase = new GetAllUsersUseCase(repository);
  const updateUserUseCase = new UpdateUserUseCase(repository);
  const deleteUserUseCase = new DeleteUserUseCase(repository);

  return {
    createUserUseCase,
    getOneUserByEmailUseCase,
    getOneUserByIdUseCase,
    getAllUsersUseCase,
    updateUserUseCase,
    deleteUserUseCase,
  };
}
