import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Tasks } from './entity/Tasks';

const PostgresAppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-cphln6gcmk4c73ekdp00-a.oregon-postgres.render.com',
  port: 5432,
  username: 'raziel',
  password: '9dGNM9k3gwqwMxWr1LNFEpVUjs46RmBU',
  database: 'tarefadb_oeyl',
  synchronize: true,
  logging: true,
  entities: [Tasks],
  migrations: [],
  subscribers: [],
  ssl: true,
});

const SqliteAppDataSource = new DataSource({
  type: 'sqlite',
  database: 'tarefadb.sql',
  synchronize: true,
  logging: true,
  entities: [Tasks],
  migrations: [],
  subscribers: [],
});

export const AppDataSource =
  process.env.ENV === 'PROD' ? PostgresAppDataSource : SqliteAppDataSource;
