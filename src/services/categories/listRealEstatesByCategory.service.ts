import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const listRealEstatesByCategoryService = async (categoryId: number): Promise<Category> => {
    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const realEstatesFound: Category | null = await categoriesRepository.findOne({
        where: {
            id: categoryId
        },
        relations: {
            realEstate: true
        }
    })

    if(!realEstatesFound){
        throw new AppError("Category not found", 404)
    }
    
    return realEstatesFound;
}

export default listRealEstatesByCategoryService;