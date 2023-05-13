import { Repository } from "typeorm";
import { TCategoryResponse } from "../../interfaces/categories.interfaces";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";

const listCategoriesService = async (): Promise<TCategoryResponse[]> => {
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const categories: Category[] | null = await categoryRepository.find();

    return categories;
};

export default listCategoriesService;