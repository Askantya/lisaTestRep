export const countStringLength = (stringName: string): number => {
  const stringLength = stringName.length;
  return stringLength;
};

export const stringTransform = (stringSmall: string): string => {
  const stringLarge = stringSmall.toUpperCase();
  return stringLarge;
};

export const stringSum = (strFirst: string, strSecond: string): string => {
  const stringResult = strFirst + ' ' + stringTransform(strSecond);
  return stringResult;
};

export const delStringSpaces = (stringWithSpaces: string): string => {
  const stringWithoutSpaces = stringWithSpaces.split(' ').join('');
  //или stringWithSpaces.trim()
  return stringWithoutSpaces;
};

export const findIndexOfSymbol = (stringExample: string, symbol: string): number => {
  const numberOfSymbol = stringExample.indexOf(symbol, 0);
  return numberOfSymbol;
};

export const returnSubstring = (wholeString: string): string => {
  // параметры from, to должны передаватся

  const substring = wholeString.slice(0, 2);
  return substring;
};

export const searchOfSubstring = (stringTry: string, substringTry: string): boolean => {
  const stringTryLower = stringTry.toLowerCase();
  const substringTryLower = substringTry.toLowerCase();
  const substringResult = stringTryLower.includes(substringTryLower);
  return substringResult;
};
