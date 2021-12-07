const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let counter = 0;

let restaurants = [
  'McDonalds',
  'Bonny Castle',
  'Harveys',
  'Giuseppes',
  'Taco Bell',
  'Five Guys',
];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  counter++;
  response.send("Hey it's working " + counter);
});

app.get('/restaurants/new', (request, response) => {
  const queryStringParams = request.query;
  response.send(`
  <h1>🏰 New Restaurant</h1>
  <form action='/restaurants' method='POST'>
    <input name='restaurantName' placeholder='restaurant name'>
    <input name='owner' placeholder='name of owner'>
    <button>Submit</button>
  </form>
  `);
});

/*
request.params
request.query
request.body
*/

app.post('/restaurants', (request, response) => {
  const restaurantName = request.body.restaurantName;

  restaurants.push(restaurantName);
  response.redirect('/restaurants');
});

app.get('/restaurants', (request, response) => {

  response.send(`
    <main>
    <a href='/restaurants/new'>🏰 New Restaurant</a>
      <ul>
        ${restaurants.map(restaurant => `<li>
          <span>${restaurant}</span>
          <form action='/restaurants/${restaurant}/delete' method='POST'>
            <button>🚮</button>
          </form>
        </li>`).join('\n')}
      </ul>
    </main>
  `);
});

app.post('/restaurants/:restaurant/delete', (request, response) => {
  const restaurant = request.params.restaurant;
  const { restaurant } = request.params;
  restaurants = restaurants.filter(name => name !== restaurant);
  response.redirect('/restaurants');
});

app.listen(8008, () => console.log('Server is running 👍'));
