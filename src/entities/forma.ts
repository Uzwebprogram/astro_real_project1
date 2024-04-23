import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn} from "typeorm";


@Entity({ name: "form" })
export class FormEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 200 })
    @IsString()
    name: string

    @Column({ type: "varchar", length: 30 })
    @IsString()
    phone_number: string
    @Column({ type: "varchar", length: 50 })
    @IsString()
    email: string
    @Column({ type: "varchar", length: 1000 })
    @IsString()
    comment: string
    @Column({ type: "varchar", length: 200 })
    @IsString()
    subject: string
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;
}