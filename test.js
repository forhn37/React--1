var attributes = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (var key in attributes) {
  // key는 객체의 각 속성(키)을 나타냅니다.
  // attributes[key]는 해당 속성의 값에 접근합니다.
  console.log(key + ': ' + attributes[key]);
}
