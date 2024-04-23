import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { LeadershipsEntity } from '../entities/leaderships';

class LeadershipsController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(LeadershipsEntity ).find());
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        res.json(await AppDataSource.getRepository(LeadershipsEntity ).find({where: { id: +id }}));
    }

    public async Post(req: Request, res: Response) {
        try {
            const { name, position , phone_number , email , reception_days , network_tg, network_inst , network_fac, work_activity , duties_and_functions } = req.body

            const category = await AppDataSource.getRepository(LeadershipsEntity ).createQueryBuilder().insert().into(LeadershipsEntity ).values({ name, position , phone_number , email , reception_days , network_tg, network_inst , network_fac, work_activity , duties_and_functions }).returning("*").execute()

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
            const { name, position , phone_number , email , reception_days , network_tg, network_inst , network_fac, work_activity , duties_and_functions  } = req.body
            const { id } = req.params

            const category = await AppDataSource.getRepository(LeadershipsEntity ).createQueryBuilder().update(LeadershipsEntity )
                .set({ name, position , phone_number , email , reception_days , network_tg, network_inst , network_fac, work_activity , duties_and_functions  })
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

            const category = await AppDataSource.getRepository(LeadershipsEntity ).createQueryBuilder().delete().from(LeadershipsEntity ).where({ id }).returning("*").execute()

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

export default new LeadershipsController();