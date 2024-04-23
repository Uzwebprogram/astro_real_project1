import { IsString } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "leaderships" })
export class LeadershipsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "varchar", length: 1000 })
  @IsString()
  name: string;

  @Column({ type: "varchar", length: 300 })
  @IsString()
  position: string;

  @Column({ type: "varchar", length: 300 })
  @IsString()
  phone_number: string;

  @Column({ type: "varchar", length: 300 })
  @IsString()
  email: string;
  @Column({ type: "varchar", length: 300 })
  @IsString()
  reception_days: string;
  @Column({ type: "varchar", length: 300 })
  @IsString()
  network_tg: string;
  @Column({ type: "varchar", length: 300 })
  @IsString()
  network_inst: string;
  @Column({ type: "varchar", length: 300 })
  @IsString()
  network_fac: string;
  @Column({ type: "varchar", length: 300 })
  @IsString()
  work_activity: string;
  @Column({ type: "varchar", length: 300 })
  @IsString()
  duties_and_functions: string;
  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updateAt: Date;
}
