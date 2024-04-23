import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,OneToMany} from "typeorm";


@Entity({ name: "possibilities" })
export class PossibilitiesEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 300 })
    @IsString()
    title: string

    @Column({ type: "varchar", length: 1000 })
    @IsString()
    desc: string

    @Column({ type: "varchar", length: 1000 })
    @IsString()
    date: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;
}