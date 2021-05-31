class Meal {
    constructor(id, categoryID, title, affordability, complex, imageUrl, duration, ingredients, steps, isGlutenFree, isVegetarian, isLactoseFree){
        this.id = id;
        this.categoryID = categoryID;
        this.title=title;
        this.affordability=affordability;
        this.complex=complex;
        this.imageUrl=imageUrl;
        this.duration=duration;
        this.ingredients=ingredients;
        this.steps=steps;
        this.isGlutenFree=isGlutenFree;
        this.isVegetarian=isVegetarian;
        this.isLactoseFree=isLactoseFree;
    }
}

export default Meal;