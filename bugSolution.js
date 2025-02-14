function foo(a, b) {
  // Convert operands to numbers before adding
  a = Number(a);
  b = Number(b);
  return a + b;
}
console.log(foo(1, 2)); // Expected output: 3
console.log(foo(1, "2")); // Expected output: 3
console.log(foo("1", 2)); // Expected output: 3
console.log(foo("1", "2")); // Expected output: 3