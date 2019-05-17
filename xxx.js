<html>
<head>
    <scripts>
        alert("Hellow,world");
    </scripts>
</head>
</html>


<html>
    <head>
        <scripts src="/static/js/abc.js"></scripts>
    </head>
</html>

var x = 1;

"Hellow,world";

var x = 1; var y = 2;

if(2 > 1){
    x = 1;
    y = 2;
    z = 3;
}

if(2 > 1){
    x = 1;
    y = 2;
    z = 3;
    if(x < y){
        z = 4;
    }
    if(x > y){
        z=5;
    }

}

123;
0.456;
1.2345e3;
-99;
NaN;
infinity;

1+2;
(1 + 2) * 5 / 2;
2 / 0;
0 / 0;
10 % 3;
10.5 % 3;

true;
false;
2 > 1;
2 >=3;

true && true;
true && false;
false && true && false;

false || false;
true || false;
false || true || false;


!true;
!false;
!(2 > 5);


var age = 15;
if(age >= 18){
    alert('adult');
}else{
    alert('teenager');
}

2 > 5;
5 >= 2;
7 == 7;

false == 0;
false === 0;


NaN === NaN;
isNaN(NaN);
1 / 3 === (1 - 2 / 3);
Math.abs(1 / 3 -(1 - 2 / 3))< 0.0000001;

[1, 2, 3.14, 'Hellow', null, true];

new Array(1,2,3);

var arr = [1, 2, 3.14, 'Hellow', null, true]
arr[0];
arr[5];
arr[6];

var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'];
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};

person.name;
person.zipcode;

var a;
var $b=1;
var s_007 = '007';
var Answer = true;
var t = null;

var a = 123;
a = 'ABC';

int a = 123;
a = "ABC";

var x =10;
x = x + 2;

'I\'m \"OK\"!';
'\x41';
'\u4e2d\u6587';
`这是一个
多行
字符串`；

var name = '小明';
var age = 20;
var message = '你好,' + name + ',你今年' + age + '岁了!';
alert(message);

var name = '小明'；
var age = 20;
var message = `你好,${name},你今年${age}岁了!`;
alert(message);

'use strict';
var name = '小明'；
var age = 20;
console.log(`你好,${name}, 你今年${age}岁了!`);

var s = 'Hellow,world';
s.length;

var s = 'Hellow,world!';

S[0];
S[6];
S[7];
S[12];
S[13];

var s = 'Test';
s[0] = 'X';
alert(s);

var s = 'Hellow';
s.toUpperCase();

var s = 'Hellow';
s.toUpperCase();


var s = 'Hellow';
var lower = s.toLowerCase();
lower;

var s = 'hellow,world';
s.indexOf('world');
s.indexOf('World');


var s = 'hellow,world'
s.substring(0,5);
s.substring(7);

var arr =[1, 2, 3.14, "Hellow", null, true];
arr.length;

var arr = [1, 2, 3];
arr.length;
arr.length = 6;
arr;
arr.length = 2;
arr;

var arr = ['A','B','C'];
arr[1] = 99;
arr;

var arr = [1,2,3];
arr[5] = 'x';
arr;


var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10);
arr.indexOf(20);
arr.indexOf(30);
arr.indexOf('30');

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3);
arr.slice(3);


var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
aCopy;
aCopy === arr;

var arr = [1,2];
arr.push('A', 'B');
arr;
arr.pop();
arr;
arr.pop(); arr.pop(); arr.pop();
arr;
arr.pop();
arr;


var arr = [1,2];
arr.unshift('A', 'B');
arr;
arr.shift();
arr;
arr.shift(); arr.shift(); arr.shift();
arr;
arr.shift();
arr;

var arr =['B', 'C', 'A'];
arr.sort();
arr;

var arr= ['one', 'two', 'three'];
arr.reverse();
arr;

var arr = ['A', 'B', 'C'];
var added = arr.concat([1,2,3]);
added;
arr;

var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-');
var arr = [[1, 2, 3],[400, 500, 600],'-'];


'use strict';
var arr = [[1, 2, 3],[400, 500, 600],'-'];


var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null;
};

xiaoming.name;
xiaoming.birth;


var xiaohong = {
    name: '小红',
    'middle-school':'No.1 Middle School'
};

xiaohong['middle-school'];
xiaohong['name'];
xiaohong.name;


'use strict';
var xiaoming = {
    name: '小明'
};


var xiaoming = {
    name = '小明';
};
xiaoming.age;
xiaoming.age=18;
xiaoming.age;
delete xiaoming.age;
xiaoming.age;
delete xiaoming['name'];
xiaoming.name;
delete xiaoming.school;


var xiaoming = {
    name: '小明',
    brith: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
'name' in xiaoming;
'grade' in xiaoming;
'toString' in xiaoming;

var xiaoming = {
    name: '小明'
};
xiaoming.hasOwnProperty('name');
xiaoming.hasOwnproperty('toString');

var age = 20;
if(age >= 18){
    alert('adult');
}else{
    alert('teenager');
}

var age = 20;
if(age >= 18)
    alert('adult');
else
    alert('teenager');

var age = 20;
if(age >= 18)
    alert('adult');
else
    console.log('age < 18');
    alert('teenager');

var age = 20;
if(age >= 18){
    alert('adult');
}else{
    console.log('age < 18');
    alert('teenager');
}

var age = 3;
if(age >= 18){
    alert('adult');
}else if(age >= 6){
    alert('teenager');
}else{
    alert('kid');
}

var age = 3;
if(age >= 18){
    alert('adult');
}else{
    if(age >= 6){
        alert('teenager');
    }else{
        alert('kid');
    }
}

'use strict';
var age = 20;
if(age >= 6){
    console.log('teenager');
}else if(age >= 18){
    console.log('adult');
}else{
    console.log('kid');
}

'use strict';
var age = 20;
if(age >= 6){
    console.log('teenager');
}else if(age >= 18 && age !== 6){
    console.log('adult');
}else{
    console.log('kid');
}

'use strict';
var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));

var x = 0;
var i;
for(i=1;i,=1000;i++){
    x=x+i;
}
x;

var x= 0;
var i;
for (i=1;i<=10;i++){
    x*=i;
}

if(x === 3628800){
    console.log('1 x 2 x 3 x...x10 = ' + x);
}else{
    console.log('计算错误');
}

var arr = ['Apple', 'Google', 'Microsoft'];
var i,x;
for(i=0; i<arr.length; i++){
    x = arr[i];
    console.log(x);
}

var x = 0;
for(;;){
    if(x >100){
        break;
    }
    x ++;
}

var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o){
    console.log(key);
}

var o ={
    name: 'Jack',
    age: 20,
    city: 'Beijing',
};
for(var key in o){
    if(o.hasOwnProperty(key)){
        console.log(key);
    }
}

var a = ['A', 'B', 'C'];
for(var i in a){
    console.log(i);
    console.log(a[i]);
}

var x = 0;
var n = 99;
while(n > 0){
    x = x + n;
    n = n - 2;
}
x;

var n = 0;
do{
    n = n + 1;
}while(n < 100);

'use strict';
var arr = ['Bart', 'Lisa', 'Adam'];
for(var i in arr){
    console.log('Hellow,' + i);
}

'use strict';
var m = new Map();
var s = new Set();
console.log('你的浏览器支持Map和Set!');

var names = ['Microsoft', 'Bob', 'Tracy'];
var score = [95, 75, 85];

var m = new Map([['Microsoft', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael');

var m = new Map();
m.set('Adam', 67);
m.set('Bob', 59);
m.has('Adam');
m.get('Adam');
m.delete('Adam');
m.get('Adam');

var m = new Map();
m.set('Adam', 67);
m.set('Adam', 88);
m.get('Adam');

var s1 = new Set();
var s2 = new Set([1, 2, 3]);

var s = new Set([1, 2, 3, 3, '3']);
s;

s.add(4);
s;
s.add(4);
s;


var s = new Set([1, 2, 3]);
s;
s.delete(3);
s;

'use strict';
var a =[1, 2, 3];
for (var x of a){
}
console.log('你的浏览器支持for ... of');

var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1,'x'], [2,'y'], [3,'z']]);
for (var x of a){
    console.log(x);
}
for (var x of s){
    console.log(x);
} 
for (var x of m){
    console.log(x[0] + '=' + x[1]);
} 

var a = ['A', 'B', 'C'];
a.name = 'Hellow';
for(var x in a){
    console.log(x);
}

var a = ['A', 'B', 'C'];
a.name = 'Hellow';
for(var x in a){
    console.log(x);
}

var a = ['A', 'B', 'C'];
a.name = 'Hellow';
for(var x of a){
    concat.log(x);
}

'use strict';
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array){
    console.log(element + ',index = ' + index);
});

var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set){
    console.log(element);
});

var m = new Map([[1,'x'], [2,'y'], [3,'z']]);
m.forEach(function(value, key, map){
    console.log(value);
});

var a = ['A', 'B', 'C'];
a.forEach(function(element){
    console.log(element);
});

var r1 = 12.34;
var r2 = 9.08;
var r3 = 73.1;
var s1 = 3.14 * r1 * r1;
var s2 = 3.14 * r2 * r2;
var s3 = 3.14 * r3 * r3;

function abs(x){
    if(x >= 0){
        return x;
    }else{
        return -x;
    }
}

var abs = function(x){
    if(x >= 0){
        return x;
    }else{
        return -x;
    }
};

function abs(x){
    if(typeof x !== 'number'){
        throw 'Not a number';
    }

    if(x >= 0){
        return x;
    }else{
        return -x;
    }
}

'use strict';
function foo(x){
    console.log('x = ' + x);
    for(var i=0; i<arguments.length; i++){
        console.log('arg ' + i + '=' + arguments[i]);
    }
}
foo(10,20,30);

function abs(){
    if(arguments.length ===0){
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}
abs();
abs(10);
abs(-9);

function foo(a,b,c){
    if(arguments.length ===2){
        c = b;
        b = null;
    }
}

function (a,b){
    var i,rest=[];
    if(arguments.length > 2){
        for(i =2; i<arguments; i++){
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

function foo(a, b, ...rest){
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

var i, args = [];
for(i=1; i<=100; i++){
    args.push(i);
}
if(sum()!== 0){
    console.log('测试失败：sum() = ' + sum());
}else if(sum(1)!== 1){
    console.log('测试失败：sum(1) = ' + sum(1));
}if(sum(2,3)!== 5){
    console.log('测试失败：sum(2,3) = ' + sum(2,3));
}if(sum.apply(null, args) !== 5050){
    console.log('测试失败：sum(1,2,3,...,100) = ' + sum.apply(null,args));
}else{
    console.log('测试通过!');
}

function foo(){
    return {name: 'foo'};
}
foo();

function foo(){
    return {
        {name: 'foo'};
    };
}

function area_of_circle(r,pi){
    if(arguments.length < 2){
        pi = 3.14;
    }
    return pi * r * r;
}

'use strict';
function max(a,b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}
console.log(max(15,20));

'use strict';
function foo() {
    var x = 1;
    x = x + 1;
}
x = x + 2; 

'use strict';
function foo() {
    var x = 1;
    x = x + 1;
}
function bar() {
    var x = 'A';
    x = x + 'B';
}

'use strict';
function foo() {
    var x = 1;
    function bar() {
        var y = x + 1; 
    }
    var z = y + 1; 
}

function foo() {
    var x = 1;
    function bar() {
        var x = 'A';
        console.log('x in bar() = ' + x); 
    }
    console.log('x in foo() = ' + x); 
    bar();
}
foo();

'use strict';
function foo(){
    var x = 'Hello,' + y;
    console.log(x);
    var y = 'Bob';
}
foo();

function foo(){
    var y;
    var x = 'Hello,' + y;
    console.log(x);
    y = 'Bob';
}

function foo(){
    var
        x = 1,
        y = x + 1,
        z,i;
        for(i=0;i<100;i++){
            ...
        }
}

'use strict';
var course = 'Learn JavaScript';
alert(course); 
alert(window.course); 

'use strict';
function foo(){
    alert('foo');
}
foo();
window.foo();

'use strict';
window.alert("调用window.alert()");
var old_alert = window.alert;
window.alert = function (){}
alert('无法用alert()显示了!');
window.alert = old_alert;
alert(''又可以用alert()了!);

var MYAPP = {};
MYAPP.name = 'myapp';
MYAPP.version = 1.0;
MYAPP.foo = function () {
    return 'foo';
};

'use strict';
function foo() {
    for (var i=0; i<100; i++) {
    }
    i += 100; 
}

'use strict';
function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    i += 1; 
}

var PI = 3.14;

'use strict';
const PI = 3.14;
PI = 3;
PI;

var array = ['hello', 'JavaScript', 'ES6'];
var x = array[0];
var y = array[1];
var z = array[2];

'use strict';
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
console.log('x = ' + x + ',y = ' + y + ', z = ' + z);

let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
x; 
y; 
z;

let [,,z] = ['hello', 'JavaScript', 'ES6'];
z;

'use strict';
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {name, age, passport} = person;
console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);

var person = {
    name: '小明';
    age: 20;
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school';
    address:{
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001',
    }
};
var {name, address:{city,zip}} = person;
name;
city;
zip;
address;

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
let {name, passport:id} = person;
name; 
id; 
passport; 

var person = {
    name:'小明',
    age:20,
    gender: 'male',
    passport: 'G-12345678'
}
var {name, single=true} = person;
name;
single;

var x,y;
({x,y} = {name:'小明', x:100, y:200});

var x=1,y=2;
[x,y]=[y,x];

var {hostname:domain,pathname:path} = location;

function buildDate({year, month, day, hour=0, minute=0, second=0}){
    return new Date(year + '-' + month + '-' + day + '' + hour + ':' + minute + ':' + second);
}

buildDate({year:2017,month:1,day:1});
buildDate(year:2017,month:1,day:1,hour:20,minute:15);

var xiaoming = {
    name: '小明',
    birth: 1990
};

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function(){
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
xiaoming.age;
xiaoming.age();

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};
xiaoming.age(); 
getAge(); 

'use strict';
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
var fn = xiaoming.age;
fn(); 

'use strict';
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function(){
        function getAgeFormBirth(){
            var y = new Date().getFullYear();
            return y - this.birth;
        }
        return getAgeFormBirth();
    }
};
xiaoming.age();

'use strict';
var xiaoming = {
    name: '小明'，
    birth: 1990,
    age:function(){
        var that = this;
        function getAgeFormBirth(){
            var y = new Date().getFullYear();
            return y - that.birth;
        }
        return getAgeFormBirth();
    }
};
xiaoming.age();

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};
xiaoming.age(); 
getAge.apply(xiaoming, []);

Math.max.apply(null,[3,5,4]);
Math.max.call(null,3,5,4);

'use  strict';
var count = 0;
var oldParseInt = parseInt;

window.parseInt = function (){
    count += 1;
    return oldParseInt.apply(null,arguments);
}

function add(x, y, f) {
    return f(x) + f(y);
}

x = -5;
y = 6;
f = Math.abs;
f(x) + f(y) ==> Math.abs(-5) + Math.abs(6) ==> 11;
return 11;

'use strict';
function add(x, y, f) {
    return f(x) + f(y);
}
var x = add(-5, 6, Math.abs); 
console.log(x)

'use strict';
function pow(x){
    return x * x;
}
var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow);
console.log(results);

var f = function (x) {
    return x * x;
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = [];
for (var i=0; i<arr.length; i++) {
    result.push(f(arr[i]));
}

var arry =[1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(String);

[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)

var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x + y;
});

'use strict';
    function product(arr){
        var pro= arr.reduce(function(x,y){
        return x * y;
    });
    return pro;
}

var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x * 10 + y;
}); 

var results = s.split('');
var arr = results.map(pow)
function pow(results) {
    return +results;
}
var p= arr.reduce(function(x,y){
    return x * 10 + y;
});
return p;

return arr.map(function(str){
		return str.slice(0,1).toUpperCase()+str.substring(1).toLowerCase();
	})

'use strict';
var arr = ['1', '2', '3'];
var r;
r = arr.map(toInt);
function toInt(arr){
    return parseInt(arr);
}
console.log(r);

var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; 

var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
r; 

'use strict';
var 
 r,
 arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'strawberry'];
r = arr.filter(function (element, index, self){
    return self.indexOf(element) === index;
});
console.log(r.toString());

use strict';
function get_primes(arr) {
 function prime(num){
  if(num==1){return false;}   
        else{
            for (var i = 2; i < num; i++) {
                if (num%i==0){ 
                    return false; 
                }
            }; 
            return true; 
        }  
}
var primes=arr.filter(prime);
return primes;
}
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}

['Google', 'Apple', 'Microsoft'].sort();
['Google', 'apple', 'Microsoft'].sort();
[10, 20, 1, 2].sort(); 

'use strict';
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(arr);

var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
});

var arr = ['Google', 'apple', 'Microsoft'];
arr.sort(function (s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
});

var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
a1; 
a2; 
a1 === a2; 

'use strict';
var arr = ['Apple', 'pear', 'orange'];
console.log(arr.every(function (s)){
    return s.length > 0;
});

console.log(arr.every(function (s)){
    return s.toUpperCase() === s;
});

'use strict';
var arr = ['Apple', 'pear', 'orange'];
console.log(arr.find(function (s) {
    return s.toLowerCase() === s;
})); 
console.log(arr.find(function (s) {
    return s.toUpperCase() === s;
}));

'use strict';
var arr = ['Apple', 'pear', 'orange'];
console.log(arr.findIndex(function (s) {
    return s.toLowerCase() === s;
})); 
console.log(arr.findIndex(function (s) {
    return s.toUpperCase() === s;
})); 

'use strict';
var arr = ['Apple', 'pear', 'orange'];
arr.forEach(console.log);

function sum(){
    return arr.reduce(function (x, y){
        return x + y;
    });
}
sum([1, 2, 3, 4, 5]);

function lazy_sum(arr){
    var sum = function (){
        return arr.reduce(function (x, y){
            return x + y;
        });
    }
    return sum;
}
var f = lazy_sum([1, 2, 3, 4, 5]);
f();
var f1 = lazy_sum([1, 2, 3, 4, 5]);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
f1 === f2;

function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

function count(){
    var arr = [];
    for(var i=1; i<=3; i++){
        arr.push(function (n){
            return function (){
                return n * n;
            }
        }(i));
    }
    return arr;
}
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
f();
f2();
f3();

(function (x){
    return x * x;
})(3);

(function (x){ return x * x})(3);

(function (x){
    return x * x;
})(3);

'use strict';
function creat_counter(initial){
    var x = initial || 0;
    return {
        inc: function(){
            x += 1;
            return x;
        }
    }
}
var c1 = create_counter();
c1.inc(); 
c1.inc(); 
c1.inc(); 
var c2 = create_counter(10);
c2.inc(); 
c2.inc(); 
c2.inc(); 

'use strict';
function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}
var pow2 = make_pow(2);
var pow3 = make_pow(3);
console.log(pow2(5));
console.log(pow3(7));

'use strict';
var zero = function(f){
    return function(x){
        return x;
    }
};
var one = function(f){
    return function(x){
        return f(x);
    }
};

function add(n, m){
    return function(f){
        return function(x){
            return m(f)(n(f)(x));
        }
    }
}
var two = add(one, one);
var three = add(one, two);
var five = add(one, three);
(three(function(console.log('print 3 times');
}))();
(five(function (){
    console.log('print 5 times');
}))();

x => x * x;
function (x){
    return x * x;
}

'use strict';
var fn = x => x * x;

x => {
    if(x > 0){
        return x * x;
    }else{
        return -x * x;
    }
}

(x, y) => x * x + y * y

() => 3.14

(x, y, ...rest) => {
    var i, sum = x + y;
    for(i=0; i<rest.length; i++){
        sum += rest[i];
    }
    return sum;
}

x => ({ foo: x})

var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = function () {
            return new Date().getFullYear() - this.birth; // this指向window或undefined
        };
        return fn();
    }
};
var obj = {
    birth: 1990,
    getAge: function(){
        var b = this.birth;
        var fn = () => new Date().getFullYear() - this.birth;
        return fn();
    }
};
obj.getAge();

var obj = {
    birth: 1990,
    getAge: function (year) {
        var b = this.birth; 
        var fn = (y) => y - this.birth; 
        return fn.call({birth:2000}, year);
    }
};
obj.getAge(2015);

'use strict'
var arr = [10, 20, 1, 2];
arr.sort((x, y) => {
    return x - y;
});
console.log(arr);

function fib(max) {
    var
        t,
        a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    return arr;
}
fib(5);
fib(10);

function* fib(max){
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while(n < max){
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}
fib(5);
var f = fib(5);
f.next();

'use strict';
function* fib(max){
    var
        t,
        a = 0,
        b = 1,
        n = 0;
        while(n < max){
            yield a; 
            [a, b] = [b, a + b];
            n ++;
        }
        return;
}
for (var x of fib(10)){
    console.log(x);
}

var fib = {
    a: 0,
    b: 1,
    n: 0,
    max: 5,
    next: function(){
        var
            r = this.a,
            t = this.a + this.b;
        this.a = this.b;
        this.b = t;
        if(this.n < this.max){
            this.n ++;
            return r;
        }else{
            return undefined;
        }
    }
};

var current_id = 0;
function next_id() {
    current_id ++;
    return current_id;
}

'use strict';
function* next_id(){
    var i = 0;
    while(i >= 0){
        ++ i;
        yield i;
    }
}
var
    x,
    pass = true,
    g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}

'use strict';
if(Date.now){
    console.log(Date.now());
}else{
    console.log(new Date().getTime());
}

'use strict';
var today = new Date();
if (today.getMonth() === 1 && today.getDate() === 14) {
    alert('亲爱的，我预定了晚餐，晚上6点在餐厅见！');
}

'use strict';
var re = /^[0-9a-zA-Z/.]+@[0-9a-zA-Z]+\.(com|org)$/;
var
    i,
    success = true,
    should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com'],
    should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org'];
for (i = 0; i < should_pass.length; i++) {
    if (!re.test(should_pass[i])) {
        console.log('测试失败: ' + should_pass[i]);
        success = false;
        break;
    }
}
for (i = 0; i < should_fail.length; i++) {
    if (re.test(should_fail[i])) {
        console.log('测试失败: ' + should_fail[i]);
        success = false;
        break;
    }
}
if (success) {
    console.log('测试通过!');
}

'use strict';
var re = /^<(\w+\s+\w+)>\s+(\w+\@\w+.\w+)$/;
var r = re.exec('<Tom Paris> tom@voyager.org');
if (r === null || r.toString() !== ['<Tom Paris> tom@voyager.org', 'Tom Paris', 'tom@voyager.org'].toString()) {
    console.log('测试失败!');
}
else {
    console.log('测试成功!');
}

'use strict';
var xiaoming = {
    name: 小明,
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school':'\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
var s = JSON.stringify(xiaoming);
console.log(s);
JSON.stringify(xiaoming, null, ' ');
JSON.stringify(xiaoming,['name', 'skills'], ' ');

function convert(key, value){
    if(key,value){
        return value.toUpperCase();
    }
    return value;
}
JSON.stringify(xiaoming, convert, ' ');


var xiaoming = {
    name: '小明'，
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function(){
        return{
            'Name': this.name,
            'Age': this.Age,
        }
    }
};
JSON.stringify(xiaoming);

JSON.parse('[1,2,3,true]');
JSON.parse('{"name":"小明","age":14}');
JSON.parse('true');
JSON.parse('123.45');

'use strict';
var obj = JSON.parse('{"name":"小明","age":14}',function(key,value){
    if(key === 'name'){
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj));

'use strict'
var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202151330&format=json';
$.getJSON(url, function (data) {
    var city = data.query.results.channel.location.city;
    var forecast = data.query.results.channel.item.forecast;
    var result = {
        city: city,
        forecast: forecast
    };
    alert(JSON.stringify(result, null, '  '));
});

var robot ={
    name: 'Robot',
    height: 1.6,
    run:function(){
        console.log(this.name + ' is running');
    }
};

var Student = {
    name: 'Robot',
    height: 1.2,
    run: function(){
        console.log(this.name + ' is running...');
    }
};
var xiaoming = {
    name: '小明'
};
xiaoming._proto_=Student;
xiaoming.name;
xiaoming.run();

var Bird = {
    fly: function(){
        console.log(this.name + ' is flying...');
    }
};
xiaoming_proto_=Bird;
xiaoming.fly();

var Student = {
    name: 'Robot',
    height: 1.2,
    run: function(){
        console.log(this.name + ' is running...');
    }
};
function createStudent(name){
    var s = Object.create(Student);
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run();
xiaoming._proto_===Student;

var arr = [1, 2, 3];

function foo(){
    return 0;
}

function Student(name){
    this.name = name;
    this.hello = function(){
        alert('Hello,' + this.name + '!');
    }
}
var xiaoming = new Student("小明");
xiaoming.name;
xiaoming.hello();

xiaoming.constructor === Student.prototype.constructor;
Student.prototype.constructor === Student;
Object.getPrototypeOf(xiaoming) === Student.prototype;
xiaoming instanceof Student;


function Student(name){
    this.name = name;
}

Student.prototype.hello = function(){
    alert('Hello,' + this.name + '!');
};

function Student(props){
    this.name = props.name ||'匿名';
    this.grade = props.grade || 1;
}
Student.prototype.hellow = function(){
    alert('Hellow,' + this.name + '!');
};
function createStudent(props){
    return new Student(props || {})
}
var xiaoming = createStudent({
    name: '小明'
});
xiaoming.grade;

'use strict';
function Cat(name){
    function Cat(name) {
    this.name = name;
    }
    Cat.prototype.say=function(){
        return 'Hello, ' + this.name + '!';
    };
}
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}

function PrimaryStudent(props){
    Student.call(this, props);
    this.grade = props.grade || 1;
}
function F(){

}
F.prototype = Student.prototype;
PrimaryStudent.prototype = new F();
PrimaryStudent.prototype.constructor = PrimaryStudent;
PrimaryStudent.prototype.getGrade = function(){
    return this.grade;
};
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
xiaoming.name;
xiaoming.grade;
xiaoming._proto_=== PrimaryStudent.prototype;
xiaoming._proto_._proto_ === Student.prototype;
xiaoming instanceof PrimaryStudent;
xiaoming instanceof Student;

function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

function Student(props){
    this.name = props.name || 'Unnamed';
}
Student.prototype.hello = function(){
    alert('Hello, ' + this,name + '!');
};
function PrimaryStudent(props){
    Student.call(this,props);
    this.grade = props.grade || 1;
}
inherits(PrimaryStudent, Student);
PrimaryStudent.prototype.getGrade = function(){
    return this.grade;
};

function Student(name) {
    this.name = name;
}
Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}

class Student{
    constructor(name){
        this.name = name;
    }
    hello(){
        alert('Hello, ' + this.name + '!');
    }
}
var xiaoming = new Student('小明');
xiaoming.hello();

class PrimaryStudent extends Student{
    constructor(name, grade){
        super(name);
        this.grade = grade;
    }
    myGrade(){
        alert('I am at grade' + this.grade);
    }
}

'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
    }
    say(){
        return 'Hello, ' + this.name + '!';
    }
}
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if ((new Cat('x') instanceof Animal) && kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}

'use strict';
var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
}
var upper = _.map(obj,function (value, key){
    return key + ':' + value;
});
console.log(JSON.stringify(upper));

'use strict';
var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};
var upper=_.mapObject(obj,function(value, key){
    return key + ":" + value;
});
console.log(JSON.stringify(upper));

'use strict';
_.every([1, 4, 7, -3, -9], (x) => x > 0);
_.some([1, 4, 7, -3, -9], (x) => x > 0);

'use strict';
var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};
function isLowerCase(str){
    return str === str.tolowerCase();
}
var r1 = _.every(obj, function(value, key){
    return isLowerCase(value) && isLowerCase(key);
});
var r2 = _.some(obj, function(value, key){
    return isLowerCase(value) && isLowerCase(key);
});
console.log('every key-value are lowercase: ' + r1 + '\nsome key-value are lowercase: ' + r2);

'use strict';
var arr = [3, 5, 7, 9];
_.max(arr);
_.min(arr);

_.max([]);
-Infinity
_.min([]);
-Infinity

'use strict';
_.max({ a: 1, b: 2, c: 3});

'use strict';
var scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
var groups = _.groupBy(scores, function (x){
    if(x < 60){
        return 'C';
    }else if(x < 80){
        return 'B';
    }else{
        return 'A';
    }
});

'use strict';
_.shuffle([1, 2, 3, 4, 5, 6]);

'use strict';
_.sample([1, 2, 3, 4, 5, 6]);
_.sample([1, 2, 3, 4, 5, 6], 3);

'use strict';
var arr = [2, 4, 6, 8];
_.first(arr);
_.last(arr);

'use strict';
_.flatten([1, [2], [3, [4], [5]]]);

'use strict';
var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
_.zip(names, scores);

'use strict';
var namesAndScores = [['Adam', 85], ['Lisa', 92], ['Bart', 59]];
_.unzip(namesAndScores);

'use strict';
var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
_.object(names, scores);

'use strict';
_.range(10);
_.range(1, 11);
_.range(0, 30, 5);
_.range(0, -10, -1);

'use strict';
var arr = ['Apple', 'orange', 'banana', 'ORANGE', 'apple', 'PEAR'];
var result = _.uniq(arr, false, function(value){
    return value.toUpperCase();
});

if(result.toString() === ["Apple", "orange", "banana", "PEAR"].toString()){
    console.log('测试成功');
}else{
    console.log('测试失败');
}

'use strict';
var s = ' Hello ';
var fn = s.trim;
fn.call(s);

'use strict';
var s = ' Hello ';
var fn = _.bind(s.trim, s);
fn();

'use strict';
var pow2N = _.partial(Math.pow, 2);
pow2N(3);
pow2N(5);
pow2N(10);

'use strict';
var cube = _.partial(Math.pow,_,3);
cube(3);
cube(5);
cube(10);

'use strict';
function factorial(){
    console.log('start calculate' + n + '1...');
    var s = 1, i =n;
    while(i > 1){
        s = s * i;
        i --;
    }
    console.log(n + '!=' + s);
    return s;
}
factorial(10);

'use strict';
var factorial = _.memoize(function(n){
    console.log('start calculate ' + n + '!...');
    var s =1, i =n;
    while(i > 1){
        s = s * i;
        i --;
    }
    console.log(n + '!=' + s);
    return s;
});
factorial(10);
factorial(10);

'use strict';
var factorial = _.memoize(function(){
    console.log('start calculate ' + n + '!...');
    if(n < 2){
        return 1;
    }
    return n * factorial(n - 1);
});
factorial(10);
factorial(9);

'use strict';
var register =_.once(function(){
    alert('Register ok!');
});
register();
register();
register();

'use strict';
_.delay(alert, 2000);

'use strict';
var log = _.bind(console.log,console);
_.delay(log, 2000, 'Hello,', 'world!');

'use strict';
function Student(name, age){
    this.name = name;
    this.age = age;
}
var xiaoming = new Student('小明', 20);
_.keys(xiaoming);

'use strict';
function Student(name, age){
    this.name = name;
    this.age = age;
}
Student.prototype.school = 'No.1 Middle School';
var xiaoming = new Student('小明', 20);
_.keys(xiaoming);

'use strict';
var obj = {
    name: '小明',
    age: 20
};
_.value(obj);

'use strict';
var obj = {a: 1, b: 2, c: 3};
_.mapObject(obj, (v,k) => 100 +v);

'use strict';
var obj = {
    Adam: 90,
    Lisa: 85,
    Bart: 59
};
_.invert(obj);

'use strict';
var a = {name: 'Bob', age: 20};
_.extend(a,{age: 15},{age: 88, city: Beijing});
a;

'use strict';
var source = {
    name: '小明',
    age: 20,
    skills: ['JavaScript', 'CSS', 'HTML']
};
var copied = _.clone(source);
console.log(JSON.stringify(copied, null, ' '));

'use strict';
var o1 = {name: 'Bob', skills:{Java: 90, JavaScript: 99}};
var o2 = {name: 'Bob', skills:{JavaScript: 99, Java: 90}};
o1 === o2;
_.isEqual(o1,o2);

'use strict';
var o1 = ['Bob', {skills:['Java', 'JavaScript']}];
var o2 = ['Bob', {skills:['Java', 'JavaScript']}];
o1 === o2;
_.isEqual(o1,o2);

var r =_.chain([1, 4, 9, 16, 25])
_.map(Math.sqrt);
_.filter(x => x % 2 === 1);
_.value();
console.log(r);
