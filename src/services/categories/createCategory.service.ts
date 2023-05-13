import { Repository } from "typeorm";
import { TCategoryRequest, TCategoryResponse } from "../../interfaces/categories.interfaces";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { categorySchema } from "../../schemas/categories.schemas";

const createCategoryService = async (categoryData: TCategoryRequest): Promise<TCategoryResponse> => {
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const category: Category = categoryRepository.create(categoryData);
    await categoryRepository.save(category);

    const returnCategory: TCategoryResponse = categorySchema.parse(category)

    return returnCategory;
};

export default createCategoryService;