const entrada = [-1, 0, 1, 2, -1, 4];
//const entrada = [0, 0, 0, 0];

var combination = function (nums) {
  console.log("input:", nums);
  if (nums.length < 3) {
    return [];
  }
  const resultado = [];
  const verifyResult = [];
  for (let i = 0; i < nums.length; i++) {
    //const d1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      //const d2 = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          const tempArray = [nums[i], nums[j], nums[k]];
          //log to see all combinations
          //console.log("indexes(", i,  j,  k, ") data ",tempArray);
          const sortElement = tempArray
            .sort(function (a, b) {
              return a - b;
            })
            .join("");
          if (!verifyResult.includes(sortElement)) {
            resultado.push(tempArray);
            verifyResult.push(sortElement);
          }
        }
      }
    }
  }
  return resultado;
};

const sum3 = combination(entrada);
console.log("output:", sum3);
