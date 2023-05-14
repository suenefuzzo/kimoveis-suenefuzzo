import { Repository } from "typeorm";
import { TManyRealEstatesResponse } from "../../interfaces/realEstate.interfaces";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";

const listRealEstateService = async (): Promise<TManyRealEstatesResponse> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstate:RealEstate[] | null = await realEstateRepository.find({
        relations: {
            address: true
        }
    });

    return realEstate;
};

export default listRealEstateService;