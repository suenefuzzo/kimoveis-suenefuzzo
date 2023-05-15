import { Router } from "express";
import { createScheduleController, listSchedulesRealEstatesController } from "../controllers/schedules.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureValidData.middleware";
import { scheduleSchemaRequest } from "../schemas/schedules.schemas";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import checksAdminPermission from "../middlewares/checksAdminPermission.middleware";

const schedulesRoutes: Router = Router();

schedulesRoutes.post("", ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(scheduleSchemaRequest), createScheduleController);

schedulesRoutes.get("/realEstate/:id", ensureTokenIsValidMiddleware, checksAdminPermission, listSchedulesRealEstatesController);

export default schedulesRoutes