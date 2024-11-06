// cron service adaptar
import { CronJob } from "cron";

type CronTime = string | Date;
type OnTick = () => void;

export class CronService {
  static createJob(crontTime: CronTime, onTick: OnTick) {
    const job = new CronJob(crontTime, onTick);
    job.start()
    return job;
  }
}
