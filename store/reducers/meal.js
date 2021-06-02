import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE,FILTER_MEAL} from '../actions/meals';

const initialState = {
    meals:MEALS,
    FilterMeal:MEALS,
    FavoriteMeal:[],
};


const mealReducer = (state = initialState, action)=>{
    switch(action.type){
        case TOGGLE_FAVORITE:
            checkAvailable = state.FavoriteMeal.findIndex(meal => meal.id === action.mealId);
            if(checkAvailable >= 0){
                const updateFavoriteMeal = [...state.FavoriteMeal];
                updateFavoriteMeal.splice(checkAvailable,1);
                return {...state, FavoriteMeal: updateFavoriteMeal};
            }else{
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return {...state, FavoriteMeal: state.FavoriteMeal.concat(meal)};
            }

        case FILTER_MEAL:
            const meals = action.optionsFilter;
            const updateFilter = state.meals.filter( meal => {
                if(meals.GlutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(meals.VegetarianFree && !meal.isVegetarian){
                    return false;
                }
                if(meals.LactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(meals.VeganFree && !meal.isVegan){
                    return false;
                }
                return true;
            });
            return {...state,FilterMeal: updateFilter};
        default:
            return state;
    }

    return state;
};

export default mealReducer;