import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class EnvironmentConfig {
  /**
   * @description ensure that all values from received array of keys exists on .env
   * @param keys array of keys
   * @throws true
   */
  public ensureValues(keys: string[]): void {
    keys.forEach((k) => EnvironmentConfig.getValue(k, true));
  }

  /**
   * @description determine whether the application is on production
   */
  public isOnProduction(): boolean | object {
    const mode = EnvironmentConfig.getValue('NODE_ENV', false);

    if (mode === 'dev') {
      return false;
    } else {
      return { rejectUnauthorized: false };
    }
  }

  /**
   * @description typeorm configuration for the project.
   */
  public getTypeOrmConfig(): TypeOrmModuleOptions {
    this.ensureValues([
      'POSTGRES_HOST',
      'POSTGRES_PORT',
      'POSTGRES_USER',
      'POSTGRES_PASSWORD',
      'POSTGRES_DATABASE',
    ]);

    return {
      type: 'postgres',
      host: EnvironmentConfig.getValue('POSTGRES_HOST'),
      port: parseInt(EnvironmentConfig.getValue('POSTGRES_PORT')),
      username: EnvironmentConfig.getValue('POSTGRES_USER'),
      password: EnvironmentConfig.getValue('POSTGRES_PASSWORD'),
      database: EnvironmentConfig.getValue('POSTGRES_DATABASE'),
      synchronize: !this.isOnProduction(),
      migrationsTableName: 'migrations',
      migrations: ['dist/migrations/*.{ts,js}'],
      entities: ['dist/**/*entity.{ts,js}'],
      ssl: this.isOnProduction(),
    };
  }

  /**
   * @description get a specific value from .env file
   * @param key key to be searched in .env
   * @param throwOnUndefined throw an error whether key not found on .env
   * @default throwOnUndefined true
   */
  private static getValue(key: string, throwOnUndefined = true): string {
    const value = process.env[key];
    if (!value && throwOnUndefined) {
      throw new Error(`Missing env: ${key}`);
    }

    return value;
  }
}
