"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
// cron service adaptar
const cron_1 = require("cron");
class CronService {
    static createJob(crontTime, onTick) {
        const job = new cron_1.CronJob(crontTime, onTick);
        job.start();
        return job;
    }
}
exports.CronService = CronService;
