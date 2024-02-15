/* eslint no-restricted-syntax: [off, ForOfStatement] */
/* eslint no-console: [off] */

// task 1
const task1 = () => {
  const array = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];
  array.forEach((name) => console.log(`Привет, ${name}`));
};

const task2 = () => {
  const array = [1, 2, 3, 4, 5];
  const result = array.map((item) => item * 10);
  console.log(result);
};

const task3 = () => {
  const array = [5, 12, 8, 130, 44];
  const result = array.filter((item) => item > 10);
  console.log(result);
};

const task4 = () => {
  const array = [{ name: 'Иван', age: 23 }, { name: 'Мария', age: 18 }, { name: 'Алексей', age: 32 }, { name: 'Ольга', age: 24 }, { name: 'Сергей', age: 17 }, { name: 'Анна', age: 21 }];
  const result = array.filter(({ age }) => age > 18).map(({ name, age }) => `${name} (${age} лет)`);
  console.log(result);
};

const task5 = () => {
  const array = [{ product: 'Телефон', price: 50000, quantity: 1 }, { product: 'Чехол', price: 1500, quantity: 2 }, { product: 'Зарядное устройство', price: 2500, quantity: 1 }];
  const result = array.reduce((acc, { price, quantity }) => acc + (price * quantity), 0);
  console.log(result);
};

task1();
task2();
task3();
task4();
task5();
