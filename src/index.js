module.exports = function solveEquation(equation) {
  let parser = equation.split(' ');

  let coefA = +parser[0],
      coefB = +(parser[3] + parser[4]),
      coefC = +(parser[7] + parser[8]);

  let discriminant = Math.pow(coefB, 2) - 4 * coefA * coefC;

  let rootOne = Math.round((-coefB + Math.sqrt(discriminant)) / (2 * coefA)),
      rootTwo = Math.round((-coefB - Math.sqrt(discriminant)) / (2 * coefA));

  let roots = [];

  roots.push(rootOne);
  roots.push(rootTwo);

  return sortRoots = roots.sort((a, b) => a - b);
}
