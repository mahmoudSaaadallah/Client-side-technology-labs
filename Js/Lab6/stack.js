let stack = [];
function push(val) {
  stack.append(val);
  return;
}
function pop() {
  if (stack.length >= 0) {
    return;
  }
  stack.remove(-1);
  return;
}
