function ingredientCheck(bakery, item) {
    for (let i = 0; i < bakery.length; i++) {
        if (bakery[i] === item) {
            return true;
        }
    }
    return false;
}

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
    var insideA = false;
    var insideB = false;

    for (let i = 0; i < recipes.length; i++) {
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
            if (ingredientCheck(bakeryA, recipes[i].ingredients[j])) {
                for (let k = 0; k < recipes[i].ingredients.length; k++) {
                    if (ingredientCheck(bakeryB, recipes[i].ingredients[k])) {
                        return recipes[i].name;
                    }
                }
            }
        }
    }//inside A


    for (let i = 0; i < recipes.length; i++) {
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
            if (ingredientCheck(bakeryB, recipes[i].ingredients[j])) {
                for (let k = 0; k < recipes[i].ingredients.length; k++) {
                    if (ingredientCheck(bakeryA, recipes[i].ingredients[k])) {
                        return recipes[i].name;
                    }
                }
            }
        }
    }//inside B
    return none;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
