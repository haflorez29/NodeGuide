interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error : string) => void;

export class CheckService implements CheckServiceUseCase {
  constructor(
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ) { } 
  // no se hace estatico porque se requiere realizar una inyeccion
  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);      
      if (!req.ok) {
        throw new Error(`Error on check service ${url}`);
      }
      this.successCallback()
      console.log(`${url} is ok`);
      return true;
    } catch (err) {
      this.errorCallback(`${err}`);
      console.log(`${err}`);
      return false;
    }
  }
}
