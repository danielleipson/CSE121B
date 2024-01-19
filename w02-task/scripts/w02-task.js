/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Danielle Ipson';
let currentYear = '2024';
let profilePicture = 'images/family_pic.jpeg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

const myFavoriteFood = ["Birria tacos", "Pasta", "Breakfast burritos", "Spicy foods", "White queso chicken chili", "Animal style fries"];


foodElement.innerHTML = myFavoriteFood;
myFavoriteFood.push('Pizza');
foodElement.innerHTML += `<br>${myFavoriteFood}`;
myFavoriteFood.shift();
foodElement.innerHTML += `<br>${myFavoriteFood}`;
myFavoriteFood.pop();
foodElement.innerHTML += `<br>${myFavoriteFood}`;

