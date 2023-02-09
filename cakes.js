// Pete likes to bake some cakes. He has some recipes and ingredients.
// Unfortunately he is not good in maths. Can you help him to find out,
// how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the
// available ingredients (also an object) and returns the maximum number
// of cakes Pete can bake (integer). For simplicity there are no units
// for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.
// Example
//  must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
//  must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

function cakes(recipe, available) {
  //for each recipe item check it is available then divide the availability by recipe amount(rounding down)
  for (key in recipe) {
    recipe[key] = available[key] ? Math.floor(available[key] / recipe[key]) : 0;
  }
  //return the amount based on the limitation of the most scarce ingredient
  return Object.values(recipe).reduce((a, b) => Math.min(a, b));
}

// a refactored solution using destructuring to a single line solution.
// >> 0 shift operator works effectively like math.floor by truncating the number to 32bit integer
function refactoredCakes(recipe, available) {
  return Math.min(
    ...Object.keys(recipe).map((key) => (available[key] / recipe[key]) >> 0)
  );
}
console.log(
  refactoredCakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
console.log(
  refactoredCakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
