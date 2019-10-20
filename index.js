const openBrackets = ['(', '<', '['];
const closeBrackets = [')', '>', ']'];

const testStringTrue = "(())";
const testStringFalse = "(()";
const testDifTrue = "(<some>)[]";
const testDifFalse = "(some)[<]";

const check = currentString => {
  const stringArray = currentString.split("");

  const stack = [];

  for (const symbol of stringArray) {
    if (openBrackets.some((item) => item === symbol)) {
      stack.push(symbol);
    }

    if (closeBrackets.some((item) => item === symbol)) {
      if (stack.length === 0) return false;
      stack.pop();
    }

    if (stack < 0) return false;
  }

  return !stack.length;

};

console.log('correct', check(testStringTrue));
console.log('incorrect', check(testStringFalse));
console.log('correct diff', check(testDifTrue));
console.log('incorrect diff', check(testDifFalse));
