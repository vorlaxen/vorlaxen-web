// src/utils/logger.ts

type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'NONE';

interface LoggerOptions {
  level?: LogLevel;
  enableTimestamp?: boolean;
  enableColors?: boolean;
  defaultTag?: string; // Opsiyonel global tag
}

const LEVELS: Record<LogLevel, number> = {
  NONE: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  DEBUG: 4,
};

const COLORS: Record<LogLevel, string> = {
  NONE: '',
  DEBUG: 'color: gray',
  INFO: 'color: blue',
  WARN: 'color: orange',
  ERROR: 'color: red; font-weight: bold'
};

class Logger {
  private level: LogLevel;
  private enableTimestamp: boolean;
  private enableColors: boolean;
  private defaultTag?: string;

  constructor(options?: LoggerOptions) {
    this.level = options?.level ?? (import.meta.env.MODE === 'production' ? 'WARN' : 'DEBUG');
    this.enableTimestamp = options?.enableTimestamp ?? true;
    this.enableColors = options?.enableColors ?? true;
    this.defaultTag = options?.defaultTag;
  }

  private shouldLog(level: LogLevel): boolean {
    return LEVELS[level] <= LEVELS[this.level];
  }

  private formatMessage(level: LogLevel, tag: string | undefined, args: any[]): [string, any[]] {
    const parts: string[] = [];

    if (this.enableTimestamp) {
      parts.push(new Date().toISOString());
    }

    parts.push(level);

    if (tag || this.defaultTag) {
      parts.push(`[${tag ?? this.defaultTag}]`);
    }

    const prefix = parts.join(' ') + ':';

    return [prefix, args];
  }

  private logWithColor(level: LogLevel, tag: string | undefined, ...args: any[]) {
    if (!this.shouldLog(level)) return;

    const [prefix, rest] = this.formatMessage(level, tag, args);

    if (this.enableColors && COLORS[level]) {
      console.log(`%c${prefix}`, COLORS[level], ...rest);
    } else {
      console.log(prefix, ...rest);
    }
  }

  debug(tagOrMessage?: string | any, ...args: any[]) {
    if (!this.shouldLog('DEBUG')) return;

    if (typeof tagOrMessage === 'string' && args.length > 0) {
      this.logWithColor('DEBUG', tagOrMessage, ...args);
    } else {
      this.logWithColor('DEBUG', undefined, tagOrMessage, ...args);
    }
  }

  info(tagOrMessage?: string | any, ...args: any[]) {
    if (!this.shouldLog('INFO')) return;

    if (typeof tagOrMessage === 'string' && args.length > 0) {
      this.logWithColor('INFO', tagOrMessage, ...args);
    } else {
      this.logWithColor('INFO', undefined, tagOrMessage, ...args);
    }
  }

  warn(tagOrMessage?: string | any, ...args: any[]) {
    if (!this.shouldLog('WARN')) return;

    if (typeof tagOrMessage === 'string' && args.length > 0) {
      this.logWithColor('WARN', tagOrMessage, ...args);
    } else {
      this.logWithColor('WARN', undefined, tagOrMessage, ...args);
    }
  }

  error(tagOrMessage?: string | any, ...args: any[]) {
    if (!this.shouldLog('ERROR')) return;

    if (typeof tagOrMessage === 'string' && args.length > 0) {
      this.logWithColor('ERROR', tagOrMessage, ...args);
    } else {
      this.logWithColor('ERROR', undefined, tagOrMessage, ...args);
    }
  }

  setLevel(newLevel: LogLevel) {
    this.level = newLevel;
  }
}

const logger = new Logger();

export default logger;
