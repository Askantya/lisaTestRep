export const countMathExpression = (a: number, b: number, c: number): number => {
  const result = Math.pow(a, 2) + Math.pow(b, 3) - Math.sqrt(c);
  return +result.toFixed(2);
}