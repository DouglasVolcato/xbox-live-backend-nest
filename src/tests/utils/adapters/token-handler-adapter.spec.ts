import { TokenHandlerAdapter } from '../../../utils/adapters/token-handler-adapter';

const fakeUser = {
  id: 'any_id',
  name: 'any_name',
  email: 'any_email',
  password: 'any_password',
  cpf: 'any_cpf',
  isAdmin: true,
  profiles: [],
  createdAt: '2022/12/09',
  updatedAt: '2022/12/09',
};

function error(): any {
  return new Promise((resolve, reject) => reject(new Error()));
}

process.env.SECRET = 'any_secret';
let token = '';

class GetUserByIdStub {
  async execute(): Promise<any> {
    return new Promise((resolve) => resolve(fakeUser));
  }
}

interface SutTypes {
  tokenHandlerAdapter: TokenHandlerAdapter;
}

function makeSut(): SutTypes {
  const getUserByIdUseCaseStub = new GetUserByIdStub();
  const tokenHandlerAdapter = new TokenHandlerAdapter(getUserByIdUseCaseStub);
  return { tokenHandlerAdapter };
}

describe('TokenHandlerAdapter', () => {
  test('GenerateToken return a string.', () => {
    const { tokenHandlerAdapter } = makeSut();
    const generatedToken = tokenHandlerAdapter.generateToken(fakeUser.id);
    token = generatedToken;
    expect(typeof token).toBe('string');
  });

  test('Should throw if GenerateToken throws.', () => {
    const { tokenHandlerAdapter } = makeSut();
    jest
      .spyOn(tokenHandlerAdapter, 'generateToken')
      .mockReturnValueOnce(error());
    const generatedToken = tokenHandlerAdapter.generateToken('any_id');
    expect(generatedToken).rejects.toThrow();
  });

  test('ValidateToken should return a user if token is valid.', async () => {
    const { tokenHandlerAdapter } = makeSut();
    const validate = await tokenHandlerAdapter.validateToken(token);
    expect(validate).toBe(fakeUser);
  });

  test('Should throw if ValidateToken throws.', async () => {
    const { tokenHandlerAdapter } = makeSut();
    jest
      .spyOn(tokenHandlerAdapter, 'validateToken')
      .mockReturnValueOnce(error());
    const validate = tokenHandlerAdapter.validateToken('any_token');
    expect(validate).rejects.toThrow();
  });
});
