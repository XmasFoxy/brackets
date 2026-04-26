module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const ruleObj = {};
  for (let i = 0; i < bracketsConfig.length; i += 1) {
    const ind = bracketsConfig[i];
    for (let j = 0; j < ind.length; j += 2) {
      ruleObj[ind[j]] = ind[j + 1];
    }
  }

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    if (ruleObj[char] === char) {
      if (stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (ruleObj[char]) {
      stack.push(char);
    } else if (Object.values(ruleObj).includes(char)) {
      if (stack.length === 0 || ruleObj[stack.pop()] !== char) {
        return false;
      }
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
