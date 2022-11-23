export interface DeleteProfileUseCaseInterface {
  execute(id: string): Promise<boolean>;
}
