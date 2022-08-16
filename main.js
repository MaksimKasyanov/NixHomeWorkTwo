'use strict'
// ! Task 1(2 page)
let arrToCount = [1, 2, 3, 0, 4, 5, 6];
let answer = 0;
let resultOfSum = arrToCount.reduceRight(function(sum, elem) {
	if (elem == 0) {
		answer = sum;
	} else {
		return sum + elem;
	}
});
if(answer == undefined){answer = result};
console.log(answer);


// ! Task 2(3 page)
let ggg = function(a, b){return a() + b();};
let f1 = function(){return 3};
let f2 = function(){return 4};
console.log(ggg(f1, f2));


// ! Task 3(4 page)
function division (a, b) { return a / b;}


// ! Task 4(5 page)
let str = "One two three four";
function reverseOdd(str) {
	return str.split(" ").map(word =>
		word.length % 2 === 1
		? word
			.split("")
			.reverse()
			.join("")
		: word
	).join(" ");
}
console.log(reverseOdd(str))


// ! Task 5(6 page)
class User {
	constructor(name, surname, year) {
		this.name = name;
		this.surname = surname;
		this.year = year;
	}
	getFullName() {
		return this.name + ' ' + this.surname;
	}
	getCourse() {
		let today = new Date();
		return `${today.getFullYear() - this.year} Course`;
	}
}
let student = new User('John', 'Johnson', 2019);
console.log(student.getFullName());
console.log(student.getCourse());


// ! Task 6(7 page)
function counter() {
	let i = 1;
	return function() {return i++};
}
let func = counter();
console.log(func());
console.log(func());
console.log(func());


// ! Task 7(8 page)
let parag = document.querySelector('.hundred-paragraph');
document.querySelector('.hundred-btn').addEventListener('click', oneHundred());
function oneHundred() {
	let already_used = [];
	return function() {
		let new_num = Math.floor(Math.random() * 100 + 1);
		for (let i = 0; i < already_used.length; i++) {
			if (already_used[i] == new_num) {return}
		};
		parag.innerHTML += new_num+', ';
		already_used.push(new_num);
	}
}


// ! Task 8(9 page)
let elems = document.getElementsByTagName('div');
for (let i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', setRed);
}
function setRed() {
	this.style.background = 'rgba(255, 0, 0, 0.269)';
	this.removeEventListener('click', setRed);
	this.addEventListener('click', setGreen);
}
function setGreen() {
	this.style.background = 'rgba(0, 255, 0, 0.269)';
	this.removeEventListener('click', setGreen);
	this.addEventListener('click', setRed);
}


// ! Task 9(10-11 pages)
let promise = new Promise((resolve, reject) => {
	console.log(1);
	setTimeout(() =>
	resolve(10)
	, 3000)
	}).then(
	function(result) {
	console.log(2);
	return new Promise((resolve, reject) =>
	setTimeout(() =>
	resolve(Math.pow(result, 2)),
	reject('error')
	, 3000)
	);
	},
	function(error) {
	throw new Error('critical error')
	}
	).then(
	function(result) {
	console.log(3);
	return new Promise((resolve, reject) =>
	setTimeout(() =>
	resolve(Math.pow(result, 2))
	, 3000)
	);
	}
	).then(
	result => console.log(result)
	).catch(
	error => console.log(error)
	);


// ! Task 10(13 page)
document.querySelector('#date-input').addEventListener('blur', function() {
	let bd = new Date(Date.parse(this.value));
	let now = new Date;
	bd.setFullYear(+now.getFullYear())
	if (bd <= now) {
      bd.setFullYear(+bd.getFullYear() + 1)
	}
	let diff = Math.round((+bd - now) / 86400000)
	document.getElementById('output').innerHTML = diff
})


// ! Task 11(14 page)
let arr = [1, -2, 3, 0, 4, -5, 6, -11];
function func1(elem){return elem > 0};

let arrTemp = arr.filter(func);

let result = arrTemp.map(function(elem) {
	return Math.sqrt(elem);
});
console.log(result);


// ! Task 12(15 page)
const delayPromise = new Promise((resolve, reject) => {
	setTimeout(()=>{
		if(Math.round(Math.random())){
			resolve('resolved')
		}else{
			reject('rejected')
		}
	}, 5000)
})
delayPromise.then(res => {
	console.log(res)
}).catch(reason => {
	console.log(reason);
})


// ! Task 13(16 page)
let func2 = function(){
	let a = 0;
	let b = 1;
	let temp;
	return function() {
		this.nextElementSibling.innerHTML = a;
		temp = a;
		a = b;
		b = temp +a;
	}
}

let buts_collect = document.getElementsByTagName('button');
for (let i = 0; i < buts_collect.length; i++) {
	buts_collect[i].addEventListener('click', func2());
}


// ! Task 14(17 page)
document.querySelector('.sum-of-forms').addEventListener('click', sumOfForms)
function sumOfForms(){
	let inp = document.querySelectorAll(".num");
	let result = document.querySelector(".forms-result");
	let sum = 0;
	for(let i=0; i<inp.length; i++){
		sum = sum + Number(inp[i].value);	
	}
	result.innerHTML = 'Result = '+sum;
}


// ! Task 15(19-20 pages)
function Human(name, sex, lang, age) {
	this.name = name;
	this.sex  = sex;
	this.lang = lang;
	this.age  = age;
}
let Ken  = new Human('Ken',  'male', 'eng', 28);
let Pol  = new Human('Pol',  'male', 'eng', 22);
let July = new Human('July', 'female', 'uk',  25);
let Bill = new Human('Bill', 'male', 'rus', 36);

let peoples = [Ken, Pol, July, Bill];

function sortByAge(arr) {
	if (arr instanceof Array) { 
		let sortedData = arr.sort(func);
		return sortedData;
	} else console.log('Error');
		function func(a, b) {
		return a.age - b.age;
	};
};

function render(arr, item) {
	arr.forEach(show);
function show(el) {
	console.log(el[item])
};
};

render(sortByAge(peoples), 'age');

