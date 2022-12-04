import { TokenHandlerInterface } from '../abstract/adapters/token-handler-interface';
import * as jwt from 'jsonwebtoken';
import { GetOneUserByIdUseCase } from 'src/data/useCases/user/getOne-user-byId-usecase';
import { UserRepository } from 'src/infra/repositories/user-repository';
import { InvalidParamError } from '../errors';
import { UserEntityInterface } from 'src/domain/entities/user-entity-interface';

export class TokenHandlerAdapter implements TokenHandlerInterface {
  generateToken(userId: string): string {
    return jwt.sign({ id: userId }, process.env.SECRET, {
      expiresIn: 86400,
    });
  }

  async validateToken(token: string): Promise<UserEntityInterface> {
    let mainUser: UserEntityInterface;
    await jwt.verify(
      token,
      process.env.SECRET,
      async (error, decoded: { id: string }) => {
        try {
          if (error) {
            throw new InvalidParamError('Token');
          }

          const userRepository = new UserRepository();
          const getUserByIdUseCase = new GetOneUserByIdUseCase(userRepository);
          const user = await getUserByIdUseCase.execute(decoded.id);

          if (!user || !user.id) {
            throw new InvalidParamError('Token');
          }

          mainUser = user;
          return;
        } catch (error) {
          throw new InvalidParamError('Token');
        }
      },
    );
    return mainUser;
  }
}
