import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { PossibilitiesEntity } from '../entities/possibilities';

class PossibilitiesController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(PossibilitiesEntity ).find());
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        res.json(await AppDataSource.getRepository(PossibilitiesEntity ).find({where: { id: +id }}));
    }

    public async Post(req: Request, res: Response) {
        try {
            const { title , desc, date ,  } = req.body

            const category = await AppDataSource.getRepository(PossibilitiesEntity ).createQueryBuilder().insert().into(PossibilitiesEntity ).values({ title , desc, date ,  }).returning("*").execute()

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
            const { title , desc, date ,   } = req.body
            const { id } = req.params

            const category = await AppDataSource.getRepository(PossibilitiesEntity ).createQueryBuilder().update(PossibilitiesEntity )
                .set({ title , desc, date ,   })
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

            const category = await AppDataSource.getRepository(PossibilitiesEntity ).createQueryBuilder().delete().from(PossibilitiesEntity ).where({ id }).returning("*").execute()

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

export default new PossibilitiesController();