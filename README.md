23.07.2021
  1) изначально картинка не видна, когда наводишь на нее мышку, то она медленно появляется 
      (пусть будет 1 секунда) (подсказки(opacity, transition))
  2) добавь еще одну колонку с кнопкой на каждый ряд. Когда нажимаешь на кнопку, под таблицей пишешь:
      "Выбранное животное: {{ имя_животного }}"
  3) Используй один метод для кнопки выбора животного. пусть будет selectAnimal.
      в темплейте можно слать параметры в функцию так же как и везде ( selectAnimal(ПАРАМЕТР) )
      а отлавливать их можно в компоненте добавив в функию арумент
      пример:

      public countSumAB(a: number, b: number) {
        a+b
      }
      
      вызов:
      
      countSumAB(1, 2); - шлем параметры для А=1, B=2

      так можно слать в функцию любые типы данных (в countSumAB были number, но может быть string например)
      и любое количество аргументов (столько сколько объявила)
  4) окно из вк

25.07.2021
https://learn.javascript.ru/types
https://learn.javascript.ru/number
https://learn.javascript.ru/string
https://learn.javascript.ru/function-basics
https://learn.javascript.ru/function-expressions
  типы данных:
    bolean: 
      является самым простым типом . имеет 2 значения true/false (эквивалентно 1/0).
    number: 
      1) сложить number со строкой, сложить с boolean, поделить number на 0
      2) создать метод, который будет возвращать результат выражения "A(в квадрате) + B(в кубе) - C(квадратный корень)" и округлить до 2х знаков после запятой
    string: 
      0) метод который будет выводить в консоль длинну строки
      0.1) метод который будет выводить в переданную строку, но большими буквами
      1) создать метод, который будет возвращать слияние 2х строк разделенных пробелом. Пример method('asd','qwe') вернет "asd qwe".
      2) создать метод, который будет удалять все пробелы из переданной строки 
      3) создать метод, который будет возвращать индекс символа в строке (символ передается параметром)
      3) создать метод, который будет обрезать строку символа номер N1 по символ N2;
      5) создать метод, который будет проверять существует ли в в строке переданная подстрока (вернет boolean)
         например в строке "Елизавета" есть подстрока "лиза", то есть вернет "true". (учти что тебе нужно будет игнорировать регистр букв (то есть чтобы "ЛиЗа" было равно "лиза"))

  циклы:
    1) создать метод который принимает число N, вывесли N строк из символа "*",
       где длинна каждой строки равна ее порядковому номеру
       пример func(3) выведет
       *
       **
       ***
       реализовать 2 способами. С одним циклом и с 2мя (один вложенный)
    2) вывести каждый символ строки с новой строки
      пример func("ABC") выведет
      A
      B
      C
    3) вывести все четные числа от 1 до 50
    4) Удалить из строки все вхождения символа
       пример func('askantya', 'a') => 'sknty'

    5)*** вывести все прослые числа в введенном интервале (алгоритм не гуглить!!!)
    
05.08.2021
  1) создать метод который будет возвращать марицу (NxM (параметры)) и заполняет ее последовательно от одного до M*N
    например
    4 х 2
    --
    1 2 3 4
    5 6 7 8

    3 х 3
    --
    1 2 3
    4 5 6
    7 8 9

  2) сделать сдвиг матрицы на N элементов, где последние элементы перемещаются вначало
    например:
    1 2 3
    4 5 6
    7 8 9
    сдвинуть на 4 элемента
    6 7 8
    9 1 2
    3 4 5
  
  3) есть массив студентов, у которых есть фио, средний балл и курс
     вывести только тех студентов (но поля курс), которые находятся на введенном курсе и отсортированы по среднему баллу
  
  4) дана структура [[1, 2], [3, 4]] нужно получить пары [[1, 3], [1, 4], [2, 3], [2, 4]].
    Дожно работать с любым размером первоначальных данных 
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]] => [[1, 4, 7], [1, 4, 8], [1, 4, 9], [1, 5, 7], [1, 5, 7] ... ]
     
  5) получить НОД и НОК заданных чисел