import { Request, Response } from "express";
import { TSchedulesRequest } from "../interfaces/schedules.interfaces";
import createSchedulesService from "../services/schedules/createSchedules.service";
import { RealEstate } from "../entities";
import listScheduleRealEstatesService from "../services/schedules/listSchedulesRealEstate.service";
// import { TRealEstateScheduleResponse } from "../interfaces/realEstate.interfaces";

const createScheduleController = async (request: Request, response: Response): Promise<Response> => {
    const schedulesData: TSchedulesRequest = request.body;
    const { userId } = response.locals;

    const newSchedule = await createSchedulesService(schedulesData, userId)

    return response.status(201).json(newSchedule)
};

const listSchedulesRealEstatesController = async (request: Request, response: Response): Promise<Response> => {
    const realEstateId: number = Number(request.params.id);
    const listSchedules: RealEstate = await listScheduleRealEstatesService(realEstateId)

    return response.json(listSchedules)
};

export { createScheduleController, listSchedulesRealEstatesController }