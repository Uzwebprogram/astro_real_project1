import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { NewsEntity } from '../entities/news';

class NewsController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(NewsEntity ).find());
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        res.json(await AppDataSource.getRepository(NewsEntity ).find({where: { id: +id }}));
    }

    public async Post(req: Request, res: Response) {
        try {
            const { title , desc, image ,  } = req.body

            const category = await AppDataSource.getRepository(NewsEntity ).createQueryBuilder().insert().into(NewsEntity ).values({ title , desc, image ,  }).returning("*").execute()

            res.json({
                status: 201,
                message: "category created",
                data: category.raw[0]
            })
        } catch (error) {
            console.log(error);
        }

    }

    public async Put(req: Request, res: Response) {
        try {
            const { title , desc, image ,   } = req.body
            const { id } = req.params

            const category = await AppDataSource.getRepository(NewsEntity ).createQueryBuilder().update(NewsEntity )
                .set({ title , desc, image ,   })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "category updated",
                data: category.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const category = await AppDataSource.getRepository(NewsEntity ).createQueryBuilder().delete().from(NewsEntity ).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "category deleted",
                data: category.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new NewsController();