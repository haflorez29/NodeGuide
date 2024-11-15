import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// permite poder llamar metodos que se encuentran dentro del datasource
export abstract class LogRepository {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
