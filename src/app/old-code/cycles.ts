export const starStrings = (starNum: number): void => {
  for (let i = 1; i <= starNum; i++) {
    let star = '';
    star += '*';
    console.log(star);
  }
};

export const eachSymbolOfString = (stringExample: string): void => {
  let i = 0;
  while (i < stringExample.length) {
    console.log(stringExample[i]);
    i++;
  }
};

export const fiftyEvenNumber = (): void => {
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

export const deleteSymbol = (wholeString: string, delSymbol: string): void => {
  let delSymbolString = '';
  let i = 0;
  while (i < wholeString.length) {
    const a = wholeString[i];
    if (a !== delSymbol) {
      delSymbolString += a;
    }
    i++;
  }
  console.log(delSymbolString);
};

export const simpleNumber = (numberOfSimple: number): void => {
  for (let i = 2; i <= numberOfSimple; i++) {
    let trueFalse = true;
    // "trueFalse" ничего непонятно, но очень интересно
    // есть такая штука Решето Эратосфена, подходит сюда получше(чет непонятное попытаюсь с этим завтра разобраться)
    for (let p = 2; p <= i / p; p++) {
      if (i % p === 0) trueFalse = false;
    }
    if (trueFalse === true) console.log(i);
  }
};
