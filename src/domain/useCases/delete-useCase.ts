export interface DeleteUseCase {
  execute(id: string): Promise<boolean>;
}
