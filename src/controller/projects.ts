import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { ProjectsEntity } from '../entities/projects';

class ProjectsController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(ProjectsEntity ).find());
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(ProjectsEntity ).find({
            relations:{
                category:true
            },where: { id: +id }}));
    }

    public async Post(req: Request, res: Response) {
        try {
            const {title , description, date, category } = req.body
            const Projects = await AppDataSource.getRepository(ProjectsEntity ).createQueryBuilder().insert().into(ProjectsEntity ).values({title , description, date, category }).returning("*").execute()

            res.json({
                status: 201,
                message: "Projects created",
                data: Projects.raw[0]
            })
        } catch (error) {
            console.log(error);
        }

    }

    public async Put(req: Request, res: Response) {
        try {
            const {title , description, date, category } = req.body
            const { id } = req.params

            const Projects = await AppDataSource.getRepository(ProjectsEntity ).createQueryBuilder().update(ProjectsEntity )
                .set({title , description, date, category  })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "Projects updated",
                data: Projects.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const Projects = await AppDataSource.getRepository(ProjectsEntity ).createQueryBuilder().delete().from(ProjectsEntity ).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "Projects deleted",
                data: Projects.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ProjectsController();