export class AuthError extends Error {
  status: number | undefined;
  protected __isAuthError = true;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "AuthError";
    this.status = status;
  }
}
