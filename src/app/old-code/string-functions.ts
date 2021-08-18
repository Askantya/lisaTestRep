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


// 4) дана структура [[1, 2], [3, 4]] нужно получить пары [[1, 3], [1, 4], [2, 3], [2, 4]].
// Дожно работать с любым размером первоначальных данных
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]] => [[1, 4, 7], [1, 4, 8], [1, 4, 9], [1, 5, 7], [1, 5, 7] ... ]
