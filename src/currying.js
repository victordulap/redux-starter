function add(a) {
  // (a, b)
  return function (b) {
    return a + b;
  };
}

const add2 = (a) => (b) => a + b; // (a, b) => a + b

add(1)(5); // add(1, 5)
