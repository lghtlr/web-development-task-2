import { DataSource } from 'typeorm';

const ormConfig: DataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'leright',
  username: 'leright',
  password: 'password',
  entities: ['dist/src/**/*.entity{.ts,.js}'],
  logging: true,
  synchronize: false,
  migrationsTableName: 'migrations',
  migrations: ['dist/src/migrations/*{.ts,.js}'],
});
export default ormConfig;
