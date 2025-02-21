function foo(a, b) {
  if (a == null || b == null) {
    return 0; // Or handle it in another suitable way
  }
  return a + b;
}
console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(undefined, 2)); // 2