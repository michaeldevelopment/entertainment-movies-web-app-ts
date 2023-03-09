type operationType = "add" | "diff" | "mult" | "div";
type resultType = string | number;

export const sumNumbers = (number1: number, number2: number, operation: operationType, message: string) : resultType => {
  switch(operation) {
    case "add":
      return `${message} ${number1 + number2}`;
    case "diff":
      return `${message} ${number1 - number2}`;
    case "mult":
      return `${message} ${number1 * number2}`;
    case "div":
      return `${message} ${number1 / number2}`;
    default:
      return "error";
  }
}

export const calcBmi = (height: number, mass: number) : resultType => {
  let heightInCm: number = height/100
  return `The result of the BMI is: ${mass/(heightInCm*heightInCm)}`;
}
