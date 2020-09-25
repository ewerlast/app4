// let a = 7;
// let b = '5';
// a = -40;
// // 1..20
// // 21..30
// //30..40
// // ==  ===
// // != !==
// // > < >= <=
// // ===
// //&&
// // ||
// if (a > 0 && a <= 20) {
//     console.log('1');
// }
// else if (a > 20 && a <= 30) {
//     console.log(2);
// }
// else if (a > 30 && a <= 40) {
//     console.log(3);
// }
// else {
//     console.log('Такой квартиры нет');
// }

// генерирую случайное число!
let r = Math.random();
r = r * 10;
r = Math.round(r);
//console.log(r);

/*let userNum = document.querySelector('#user-num');

document.querySelector('#btn').onclick = checkNum;

function checkNum() {
    let num = userNum.value;
    num = parseInt(num);
    console.log(num);
    // isNaN('aaaa') -> true
    // isNaN(4) -> false
    if (isNaN(num)) {
        alert('Введите корректное число');
    }
    else {
        if (num == r) {
            alert('Вы угадали!!!!');
            location.reload();
        }
        else {
            alert('Пробуй еще!');
        }
    }
}*/
// My code
//       ДЗ 1
// делайм генерайию числа
let random =  Math.floor(Math.random()*10);


 //ищем нужные id
 let victory = document.querySelector('.victory');
 let p = document.getElementsByTagName('p');
 let wrapper = document.querySelector('.wrapper');
 let inNumber = document.querySelector('#in_number');
 let enter = document.querySelector('#enter');
 let myNumber = document.querySelector('.my_namber');
 let compNumber = document.querySelector('.comp_number');

 function run(){
   let nuM = inNumber.value;
   nuM = parseInt(nuM);
  
  
    if(!isNaN(nuM) && nuM < 10){
    compNumber.innerHTML = random;
    myNumber.innerHTML = nuM; 
    }
    else{
        alert('введите число от 0 до 9');
    }


     
    if(nuM == random){
    victory.style.display = 'block';
    
    }
    else{
        alert('пробуй еще');
    }
 }
 

 enter.onclick = run;


 //ДЗ2

 let couters = document.querySelector('.couter');
 let btn_2 = document.querySelector('#btn_2');

 let count = 0;

 btn_2.onclick = function(){
	count++;
	if (count == 1){
        btn_2.innerHTML = 'нажми меня';
        couters.innerHTML = 'осталось 2 попытки'

    }
    if (count == 2){
        btn_2.innerHTML = 'сейчас исчезну';
        couters.innerHTML = 'осталось 1 попытка'
    }
	if (count == 3){
        btn_2.style.display = 'none';
        couters.innerHTML = 'Тебя предупреждали :)';
    }
}
 

//ДЗ3


let maxResult = document.querySelector('.max_result');
let firstNumber = document.querySelector('.first_number');
let secondNumber = document.querySelector('.second_number');
let runMax = document.querySelector('.run_max');



 
function runMaxRsult(){
    firstNumberValue = String(firstNumber.value);
    secondNumberValue = String(secondNumber.value);
    
    if(firstNumberValue && secondNumberValue){
        if(firstNumberValue < secondNumberValue){
            maxResult.innerHTML = secondNumberValue;

        }
        if(firstNumberValue > secondNumberValue){
            maxResult.innerHTML = firstNumberValue;
        }
        if(firstNumberValue == secondNumberValue){
            maxResult.innerHTML = 'Рывные значения';
        }
    }

}

runMax.onclick = runMaxRsult 


//ДЗ4


let dayBirht = document.querySelector('#day_birht');
let monthBirht = document.querySelector('#month_birht');
let resultBirth =document.querySelector('.result_birth');
let runSign = document.querySelector('#run_sign');
function resultSign(){
    dayBirht = dayBirht.value;
    monthBirht = monthBirht.value;
if(!isNaN(monthBirht && monthBirht )){
    if((dayBirht >= 21 && monthBirht == 3)||(dayBirht <=20 && monthBirht == 4)){
        resultBirth.innerHTML = 'Овен';
    }
    if((dayBirht >= 21 && monthBirht == 4)||(dayBirht <=20 && monthBirht == 5)){
        resultBirth.innerHTML = 'Телец';
    }
    if((dayBirht >= 21 && monthBirht == 5)||(dayBirht <=20 && monthBirht == 6)){
        resultBirth.innerHTML = 'Близнецы';
    }
    if((dayBirht >= 21 && monthBirht == 6)||(dayBirht <=22 && monthBirht == 7)){
        resultBirth.innerHTML = 'Рак';
    }
    if((dayBirht >= 23 && monthBirht == 7)||(dayBirht <=22 && monthBirht == 8)){
        resultBirth.innerHTML = 'Лев';
    }
    if((dayBirht >= 23 && monthBirht == 8)||(dayBirht <=23 && monthBirht == 9)){
        resultBirth.innerHTML = 'Дева';
    }
    if((dayBirht >= 24 && monthBirht == 9)||(dayBirht <=23 && monthBirht == 10)){
        resultBirth.innerHTML = 'ТВесы';
    }
    if((dayBirht >= 22 && monthBirht == 10)||(dayBirht <=21 && monthBirht == 11)){
        resultBirth.innerHTML = 'Скорпион';
    }
    if((dayBirht >= 22 && monthBirht == 11)||(dayBirht <=22 && monthBirht == 12)){
        resultBirth.innerHTML = 'Стрелец';
    }
    if((dayBirht >= 22 && monthBirht == 12)||(dayBirht <=19 && monthBirht == 1)){
        resultBirth.innerHTML = 'Козерог';
    }
    if((dayBirht >= 22 && monthBirht == 1)||(dayBirht <=18 && monthBirht == 2)){
        resultBirth.innerHTML = 'Водолей';
    }
    if((dayBirht >= 19 && monthBirht ==2 )||(dayBirht <=20 && monthBirht == 3)){
        resultBirth.innerHTML = 'Рыбы';
    }

    

}
else{
    alert('введите коректно дату');
}

}
runSign.onclick = resultSign;



//ДЗ5

let resultYear = document.querySelector('.result_year');
let inYear = document.querySelector('#in_year');
let runYear = document.querySelector('#run_year');

function yearBirth(){
    inYear = inYear.value;
    if(!isNaN(inYear)){
        if(inYear % 12 == 1){
            resultYear.innerHTML = 'Петух';
        }
        if(inYear % 12 == 2){
            resultYear.innerHTML = 'Собака';
        }
        if(inYear % 12 == 3){
            resultYear.innerHTML = 'Свинья';
        }
        if(inYear % 12 == 4){
            resultYear.innerHTML = 'Крыса';
        }
        if(inYear % 12 == 5){
            resultYear.innerHTML = 'Бык';
        }
        if(inYear % 12 == 6){
            resultYear.innerHTML = 'Тигр';
        }
        if(inYear % 12 == 7){
            resultYear.innerHTML = 'Кролик';
        }
        if(inYear % 12 == 8){
            resultYear.innerHTML = 'Дракон';
        }
        if(inYear % 12 == 9){
            resultYear.innerHTML = 'Змея';
        }
        if(inYear % 12 == 10){
            resultYear.innerHTML = 'Лощадь';
        }
        if(inYear % 12 == 11){
            resultYear.innerHTML = 'Коза';
        }
    }
    else{
        alert('введите корктно год');
    }
}
runYear.onclick = yearBirth;
