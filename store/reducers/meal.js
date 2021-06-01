import {MEALS} from '../../data/dummy-data';


const initialState = {
    meals:MEALS,
    FilterMeal:MEALS,
    FavoriteMeal:[],
};


const mealReducer = (state = initialState, action)=>{
    
    return state;
};

export default mealReducer;