
export type Meal = {
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strInstructions: string,
    strArea: string,
    strMealThumb: string,
    strTags: string,
    strYoutube: string,
}

export type ResponseMeal = {
    meals: Meal[]
}


export type Categories = {
    idCategory: string,
    strCategory: string,
    strCategoryThumb: string,
    strCategoryDescription: string,
}

export type ResponseCategory = {
    categories: Categories[]
}