export const TOGGLE_FAVORITE = "TOGGLE_MEAL";
export const FILTER_MEAL = "FILLTER_MEAL";

export const toggleFavorite = (id) =>{
    return ({
        type : TOGGLE_FAVORITE,
        mealId : id,
    });
};

export const filterMeal = (arrayFilter) => {
    return {
        type: FILTER_MEAL,
        optionsFilter: arrayFilter
    };
};
