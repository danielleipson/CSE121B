/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {};


/* Populate Profile Object with placesLive objects */

myProfile.name = "Danielle Ipson";
myProfile.photo = "images/My_pic.JPG";
myProfile.favoriteFoods = [
    'Italian Food',
    'Mexican Food',
    'Chicken Pot Pie', 
    'Vegetable Lasagna'
];
myProfile.hobbies = ['Reading', 'Painting', 'Gardening', 'Singing', 'Playing outside with my boys'];
myProfile.placesLived = [];

myProfile.placesLived.push({
    place: 'Northern Utah',
    length: '6 years'
});

myProfile.placesLived.push({
    place: 'Southern Utah',
    length: '20 years'
});


/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').alt = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;



/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
