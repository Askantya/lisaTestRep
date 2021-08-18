export const starStrings = (starNum: number): void => {
  for (let i = 1; i <= starNum; i++) {
    let star = '';
    star += '*';
    console.log(star);
    // оно выведет по одному символу в столбик тк star будет сбрасываться в начале каждой итерации цикла
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
  // а еще можно было начать с четного чиста и прибавлять к i по два заменив i++ на i += 2 и тогда убрать if)
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }

    // в if () можнет быть просто какое-то значение и оно переводится в boolean например
    // if (true) { выполнится } или if (1) { выполнится } if (0) { не выполнится тк 0 это false }
    // if ('asd') { выполнится тк строка не пустая и существет } или if ('') { не выполнится тк строка пустая }
    // if (0) { не выполнится тк 0 это false }
    // так же существует символ орицание ! который ставится перед значением или логическим оператором например
    // !true => false, !0 => true, !'' => true, !1 => false ; ===(равно) !==(не равно)
    // операнд просто ставит boolean на противоположное
    // то есть if (a === 0) можно заменит на if (!a) и все
    // if (i % 2 === 0) заменить на !(a % 2)
    // довольно удобно
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
      // тут если срабатывает false, то цикл все равно идет дальше, хотя это уже не нужно
      // есть такие команды break; и continue; читать
      if (i % p === 0) trueFalse = false;

    }
    if (trueFalse === true) console.log(i);
  }
};


//-------- вот как бы я написал используя твою логику, прочитай и пойми что куда
export const getSimpleNumbers = (numberOfSimple: number): number[] => {
  const simpleNumbers = [];

  for (let i = 2; i <= numberOfSimple; i++) {
    const isSimple = isSimpleNumber(i);
    if (isSimple) {
      simpleNumbers.push(i);
    }
  }

  return simpleNumbers;
};

const isSimpleNumber = (value: number): boolean => {
  for (let p = 2; p <= value / 2; p++) {
    if (value % p === 0) {
      return false;
    }
  }
  return true;
};
//--------
const arrayS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const getMappedArrayElements = (array: any[][]): any[][] => {
  if (array.length === 1) {
    return array[0].map(element => [element]);
  }

  const newarr = array.shift();

  const arset = getMappedArrayElements(array);

  return newarr?.reduce((acc, el) => {
    arset.forEach(setElement => {
      acc = [...acc, [el, ...setElement]];
    });
    return acc;
  }, []);
};
