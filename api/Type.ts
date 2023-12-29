
export type Meal = {
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strInstructions: string,
    strArea: string,
    strMealThumb: string,
    strTags: string,
    strYoutube: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,
    strMeasure5: string,
    strMeasure6: string,
    strMeasure7: string,
    strMeasure8: string,
    strMeasure9: string,

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

export type TypeBookMark = {
    id: string,
    title: string,
    image: string
}