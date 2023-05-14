import { Repository } from "typeorm";
import { TRealEstateRequest, TRealEstateResponse } from "../../interfaces/realEstate.interfaces";
import { Address, Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
// import { realEstateSchemaResponse } from "../../schemas/realEstate.schema";
import { AppError } from "../../error";

const createRealEstateService = async (realEstateData: TRealEstateRequest, foundCategory: Category): Promise<TRealEstateResponse> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);

    const { address, categoryId, ...realEstateBody } = realEstateData;

    const existingAddress = await addressRepository.findOneBy({
        ...address, 
        number: address.number? address.number : ""
    });

    if(existingAddress){
        throw new AppError("Address already exists", 409)
    }

    const newAddress: Address = addressRepository.create(address);
    await addressRepository.save(newAddress);

    const realEstate: RealEstate = realEstateRepository.create({
        ...realEstateBody,
        address: newAddress,
        category: foundCategory
    });
    await realEstateRepository.save(realEstate);

    // const returnRealEstate: TRealEstateResponse = realEstateSchemaResponse.parse(realEstate)

    return realEstate;
};

export default createRealEstateService;