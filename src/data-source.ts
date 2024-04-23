import "reflect-metadata"
import { DataSource } from "typeorm"
import { CategoryEntity } from "./entities/category"
import { FormEntity } from "./entities/forma"
import { LeadershipsEntity } from "./entities/leaderships"
import { NewsEntity } from "./entities/news"
import { ProjectsEntity } from "./entities/projects"
import { PossibilitiesEntity } from "./entities/possibilities"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "ybJ9u()XW3fB",
    database: "astro_real_1",
    synchronize: true,
    logging: false,
    entities: [CategoryEntity  , LeadershipsEntity , FormEntity , NewsEntity , ProjectsEntity , PossibilitiesEntity],
    migrations: [],
    subscribers: [],
})
