/*
var a = +prompt('Введите первое число');
var b  = +prompt('Введите второе число');
alert('Ваши числа ' + a + ' и ' + b);
if (a >= 0 && b >= 0) {
    alert('Разность ваших чисел равна ' + (a - b))
} else if (a < 0 && b < 0) {
    alert ('Произведение ваших чисел равна ' + a * b)
} else 
    alert ('Сумма ваших чисел равна ' + (a + b))
*/
/*
var a = +prompt('Введите число');
switch(a) {
    case 0:
    alert(0);
    case 1:
    alert(1);
    case 2:
    alert(2);
    case 3:
    alert(3);
    case 4:
    alert(4);
    case 5:
    alert(5);
    case 6:
    alert(6);
    case 7:
    alert(7);
    case 8:
    alert(8);
    case 9:
    alert(9);
}
*/
/*
function sum(num1, num2) {
    var result = num1 + num2;
    alert('Сумма ваших чисел равна ' + result)
    return result;

}
    
var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var result = sum(a, b);
alert('Сумма ваших чисел равна ' + result)
*/

function mathOperation(arg1, arg2, operation) {
    switch(operation){
        case '+':
            var result = arg1 + arg2;
            alert('Сумма ваших чисел равна ' + result);
            return result;
            break;
        case '-':
            var result = arg1 - arg2;
            alert('Разность ваших чисел равна ' + result);
            return result;
            break;
        case 'multiplication':
            var result = arg1 * arg2;
            alert('Произведение ваших чисел равно ' + result);
            return result;
            break;
        case 'division':
            var result = arg1 / arg2;
            alert('Деление ваших чисел равно ' + result);
            return result;
            break;
    }
}
var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = prompt('Выберете операцию + addition, - subtraction, * multiplication, / division');
var result = mathOperation(a, b, c);
alert('Результат ' + result)