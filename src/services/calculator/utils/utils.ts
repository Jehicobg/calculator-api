const specialCharacter = /[\%\^\@\$\#\&]/g;

export function processEquation(equation: string): number {
  let match = equation.match(/\*|\/|\+|\-/gims) || [];
  const idxWrongChar = equation.search(specialCharacter);
  if (idxWrongChar !== -1)
    throw new TypeError(`Error in character ${equation[idxWrongChar]}`);

  while (match.length > 0) {
    equation = equation
      .replace(/\((.*?)\)/gims, (_, s): any => {
        return processEquation(s);
      })
      .replace(/([0-9\.\-]+)(\*|\/)([0-9\.\-]+)/gims, (_, n1, o, n2): any => {
        return o === "*" ? Number(n1) * Number(n2) : Number(n1) / Number(n2);
      })
      .replace(/([0-9\.\-]+)(\-|\+)([0-9\.\-]+)/gims, (_, n1, o, n2): any => {
        return o === "+" ? Number(n1) + Number(n2) : Number(n1) - Number(n2);
      });

    if (/^[0-9]/g.test(equation)) {
      match = equation.match(/\*|\/|\+|\-/gims) || [];
    } else {
      match = [];
    }
  }
  return Number(equation);
}
