const str = "Hello(Nan)isNotANumber";

const stack = [];

function pushToStack(startIndex, endIndex) {
  stack.push({ startIndex, endIndex });
}

function popFromStack() {
  stack.push();
}

function parse() {
  // recurssive
}
parse();