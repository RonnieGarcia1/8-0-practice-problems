
const pets = require("./pets-data.js")

/**
 * getAllPetNames()
 * -----------------------------
 * Returns all names from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets. 
 * @returns {string[]} An array of strings, which are pet names.
 *
 * EXAMPLE: getAllPetNames(pets);
 * > ["Deloba", "Tuba", "Percy", "Monkey", "Gia", "Gumby"]
*/

function getAllPetNames(pets) {
    let arrOfNames = [];
    let petNames;
    for(let pet of pets){
        petNames = pet.petName;
        arrOfNames.push(petNames);
    // console.log(arrOfNames);
    }
return arrOfNames;
}
getAllPetNames(pets);

/**
 * getAllCaretakerNames()
 * -----------------------------
 * Returns all of the pets' caretaker's names from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets. 
 * @returns {string[]} An array of strings, which are the names of the pets' caretakers.
 *
 * EXAMPLE: getAllCaretakerNames(pets);
 * > ["Sam", "Ari", "Nicole", "Katie", "Steven", "John"]
*/

function getAllCaretakerNames(careTakers) {
    let careTakerArr = [];
    let careTakersstr;
    for(let i = 0; i < careTakers.length;i++){
        careTakersstr = careTakers[i].caretakerName;
        careTakerArr.push(careTakersstr);
    }
return careTakerArr;
}
getAllCaretakerNames(pets);

/**
 * getAllFavoriteFoods()
 * -----------------------------
 * Returns all favorite foods from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets. 
 * @returns {string[]} An array of strings, which are pets' favorite foods.
 *
 * EXAMPLE: getAllFavoriteFoods(pets);
 * > ["watermelon", "mealworms", "fish", "dog food", "salami", "bacon"]
*/

function getAllFavoriteFoods(pets) {
    let arrOfFoods = [];
    let favFoods;
    for(let food of pets){
        favFoods = food.favoriteFood;
        arrOfFoods.push(favFoods);
    }
return arrOfFoods;
}
getAllFavoriteFoods(pets);

/**
 * getAllPetSpecies()
 * -----------------------------
 * Returns all pet species from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets. 
 * @returns {string[]} An array of strings, which are the pets' species.
 *
 * EXAMPLE: getAllPetSpecies(pets);
 * > ["dog", "spotted gecko", "cat", "cat", "dog", "cat"]
*/

function getAllPetSpecies(species) {
let arrOfSpecies = [];
let animalType;
for(let speciesType of species){
    animalType = speciesType.species;
    arrOfSpecies.push(animalType);
}
return arrOfSpecies;
}
getAllPetSpecies(pets);



/**
 * getAllPetAges()
 * -----------------------------
 * Returns all ages from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets. 
 * @returns {number[]} An array of numbers, which are pet ages.
 *
 * EXAMPLE: getAllPetAges(pets);
 * > [8, 2, 1, 10, 3, 6]
*/

function getAllPetAges(ages) {
    let animalAges = [];
    let age;
    for(let i = 0;i < ages.length;i++){
        age = ages[i].age;
        animalAges.push(age);
    }
    return animalAges // returns an array of ages of animals from our array
}
getAllPetAges(pets);



/**
 * totalAllPetAges()
 * -----------------------------
 * Returns a total of all ages from an array of pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets. 
 * @returns {number} A number, which is a total of all the pets' ages.
 *
 * EXAMPLE: getAllPetAges(pets);
 * > 30
*/

function totalAllPetAges(ages) {
    let animalAges = [];
    let age = 0;
    for(let i = 0;i < ages.length;i++){
        age += ages[i].age;
        animalAges.push(age);
    }
    return age; // returns 30
}
totalAllPetAges(pets);



/**
 * averageAllPetAges()
 * -----------------------------
 * Returns an average of all ages from an array of pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets. 
 * @returns {number} A number, which is an average of all the pets' ages.
 *
 * EXAMPLE: getAllPetAges(pets);
 * > 5
*/

function averageAllPetAges(age) {
    let averageAge = 0;
    let ageLength = [];
for(let ages of age){
    averageAge += ages.age;
    ageLength.push(ages.age);
}
return averageAge/ageLength.length;
}
averageAllPetAges(pets);



/**
 * averageAllCaretakerAges()
 * -----------------------------
 * Returns an average of all caretakers' ages from an array of pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets. 
 * @returns {number} A number, which is an average of all the pets' caretakers' ages.
 *
 * EXAMPLE: getAllCaretakerAges(pets);
 * > 32.3333333
*/

function averageAllCaretakerAges(caretakerAge) {
    let arr = [];
    let caretakerAges = "";
    for(let i = 0;i < caretakerAge.length;i++){
        caretakerAges = caretakerAge[i].caretakerAge;
        arr.push(caretakerAges);
        arr = arr.map(Number);
    }
    let totalAge = 0;
    let arr1 = [];

    for(let i = 0;i < arr.length;i++){
      totalAge += arr[i];
      arr1.push(arr[i])
    }
     return totalAge/arr1.length;
    // return arr;
}
averageAllCaretakerAges(pets);