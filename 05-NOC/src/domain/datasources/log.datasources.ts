import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// contrato que tiene que cumpllir de datasources
export abstract class LogDatasource {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
