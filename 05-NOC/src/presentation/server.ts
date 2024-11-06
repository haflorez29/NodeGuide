import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
  public static start() {
    console.log("Server started");
    CronService.createJob("*/5 * * * * *", () => {
      const url = "http://google.com";
      //   const date = new Date();
      // console.log('helo');

      new CheckService(
        () => console.log(`success ${url}`),
        (error) => console.log(error)
      ).execute(url);
      // new CheckService().execute('http://localhost:3000/')
    });
  }
}
