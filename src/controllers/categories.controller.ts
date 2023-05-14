import { Request, Response } from "express";
import { TCategoryRequest, TCategoryResponse } from "../interfaces/categories.interfaces";
import createCategoryService from "../services/categories/createCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import listRealEstatesByCategoryService from "../services/categories/listRealEstatesByCategory.service";
import { Category } from "../entities";


const createCategoryController = async (request: Request, response: Response): Promise<Response> => {
    const categoryData: TCategoryRequest = request.body;

    const newCategory = await createCategoryService(categoryData)

    return response.status(201).json(newCategory)
}

const listCategoriesController = async (request: Request, response: Response): Promise<Response> => {
    const listCategories: TCategoryResponse[] = await listCategoriesService();

    return response.json(listCategories);
};

const listRealEstatesByCategoryController = async (request: Request, response: Response): Promise<Response> => {
    const categoryId: number = Number(request.params.id);

    const listRealEstatesByCategory  = await listRealEstatesByCategoryService(categoryId);

    return response.json(listRealEstatesByCategory);
};

export { createCategoryController, listCategoriesController, listRealEstatesByCategoryController }