const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

const keys = Object.keys(person);
for (const element of keys) {
  console.log(element);
}
// Print values of person using Object.keys