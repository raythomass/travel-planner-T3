const db = require('./connection');
const { User, Pizza, OrderDetails, Order } = require('../models');
const cleanDB = require('./cleanDB');
const bcrypt = require('bcrypt');

db.once('open', async () => {
  await cleanDB('Order', 'orders');
  await cleanDB('OrderDetails', 'orderDetails');
  await cleanDB('User', 'users');
  await cleanDB('Pizza', 'pizzas');

  await User.create({
    username: 'raythomas',
    email: 'ray@testmail.com',
    password: '1234password',
    address: '1234 Park Ave',
    phoneNumber: '1234567890'
  });

  await User.create({
    username: 'raymondthomas',
    email: 'thomas@testmail.com',
    password: '1234password',
    address: '0987 Park Ave',
    phoneNumber: '0987654321'
  });

  await Pizza.create({  
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil',
    price: 10.99
  });

  await Pizza.create({
    name: 'Pepperoni Pizza',
    description: 'Delicious pizza with pepperoni, tomato sauce, and mozzarella cheese',
    price: 12.99
  });

  console.log('users seeded');

  process.exit();
});