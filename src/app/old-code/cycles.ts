export const starStrings = (starNum: number): void => {
  let star = '';
  for (let i = 1; i <= starNum; i++) {
    // можно объявлять star тут и тогда не придется сбрасывать,
    // на каждую итерацию создается свой star где ты потом забиваешь его во второи цикле
    for (let p = 1; p <= i; p++) {
      star += '*';
    }
    // если star внешняя, то во вложенном цикле смлысла нет
    // и можно было просто star += '*' на каждой итерации и выводить его
    console.log(star);
    star = '';
  }
}

export const eachSymbolOfString = (stringExample: string): void => {
  for (let i = 0; i < stringExample.length; i++) {
    console.log(stringExample[i]);
  }
}

export const fiftyEvenNumber = (): void => {
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) console.log(i);
    // пробелы между элементами (i % 2 === 0) так удобнее читать
    // (и привыкай везде ставить 3 равно, тогда учитывается тип и меньше ошибок будет)
    // так же оборачивай код после if в фигурные скобки, даже если там одна строка
    // if (i % 2 === 0) {
    //  console.log(i);
    // }
  }
}

export const deleteSymbol = (wholeString: string, delSymbol: string): void => {
  let delSymbolString = wholeString;
  for (let i = 0; i < delSymbolString.length; i++) {
    // пробелы везде!!!!
    let a = delSymbolString[i];
    if (a == delSymbol) {
      delSymbolString = delSymbolString.replace(delSymbolString[i], '');
      i--;
    }
  }
  // молодец, работает, но это оч жестко. replace делает поиск по строке и заменяет первое попавшееся значение.
  // Делаешь лишний поиск, хотя позиция тебе уже известна (к тому же тут могут вылезти баги в определенных ситуациях)

  // ща я выебнусь, смари как можно
  // const result = wholeString.replaceAll(delSymbol, '');
  // это еще в бете и работать не будет, месяц назад завезли.
  //Но в проект завозить новую версию жс я конечно же не буду (но можешь в браузере пожамкать)

  // как вариант с циклом, то лучший наверн вариант пройтись по всем буквам строки,
  // и если не равно, то пихать в новую строку (это будет проще прочитать, быстрее будет выполнятся и спасет от багов)
  console.log(delSymbolString);
}

export const simpleNumber = (numberOfSimple: number): void => {
  for (let i = 2; i <= numberOfSimple; i++) {
    let trueFalse = true;
    // "trueFalse" ничего непонятно, но очень интересно
    // есть такая штука Решето Эратосфена, подходит сюда получше
    for (let p = 2; p <= i / p; p++) {
      if (i % p == 0) trueFalse = false;
    }
    if (trueFalse == true) console.log(i);
  }
}
