import { Repository } from "typeorm";
import { TSchedulesRequest } from "../../interfaces/schedules.interfaces";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../error";

const createSchedulesService = async (schedulesData: TSchedulesRequest, userId: number): Promise<Object> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
    const schedulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);

    const user: User | null = await userRepository.findOneBy({
        id: userId
    })

    if(!user){
        throw new AppError("User not found", 404)
    };

    const realEstate: RealEstate | null = await realEstateRepository.findOneBy({
        id: schedulesData.realEstateId
    });

    if(!realEstate){
        throw new AppError("RealEstate not found", 404)
    };

    const day = new Date(schedulesData.date).getDay();
    if(day === 0 || day === 6){
        throw new AppError("Invalid date, work days are monday to friday", 400);
    }

    const hour = new Date(schedulesData.date + " " +schedulesData.hour).getHours();
    if(hour < 8 || hour > 18){
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    };

    const verifySchedule = await schedulesRepository
    .createQueryBuilder("schedule")
    .where("schedule.userId = :userId", { userId: userId })
    .andWhere("schedule.hour = :hour", { hour: schedulesData.hour })
    .andWhere("schedule.date = :date", { date: schedulesData.date })
    .getOne();

    if(verifySchedule){
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    };

    const verifyScheduleRealEstate = await schedulesRepository
    .createQueryBuilder("schedule")
    .where("schedule.realEstateId = :realEstateId", { realEstateId: schedulesData.realEstateId })
    .andWhere("schedule.hour = :hour", { hour: schedulesData.hour })
    .andWhere("schedule.date = :date", { date: schedulesData.date })
    .getOne();

    if(verifyScheduleRealEstate){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    };

    const newSchedule = schedulesRepository.create({
        date: schedulesData.date,
        hour: schedulesData.hour,
        user,
        realEstate
    })
    await schedulesRepository.save(newSchedule)

    return { message: "Schedule created"}
};

export default createSchedulesService;