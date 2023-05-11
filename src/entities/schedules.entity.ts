import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";
import RealEstate from "./realEstate.entity";

@Entity("schedules")
class Schedule{
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "date" })
    date: string | Date

    @Column({ type: "time" })
    hour: string

    @ManyToOne(() => User)
    user: User

    @ManyToOne(() => RealEstate)
    realEstate: RealEstate
};

export default Schedule
