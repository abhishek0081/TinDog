"use strict";
// let message = 'Hello';
// let name1 = 'Abhishek Kumar';

// //  

// alert(`${message} there ${name1}`);
// console.log(name1.length);


// const post = prompt('Enter your message : ');

// alert(`You have written ${post.length} characters and ${post.slice(0,140)}, you have ${140-post.length} characters left`)

// alert(prompt('Compose youe tweet : ').toUpperCase().slice(0,140));

// const name1 = prompt('Enter your name please : ');
// alert(`Hi ! ${name1.slice(0,1).toUpperCase()+name1.slice(1,name1.length).toLowerCase()}`)



// function getMilk(cost) {  
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log(`Buy ${ Math.floor(cost/1.5) } bottles of milk.`)
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     return cost % 1.5;
// }

// console.log(11/1.5);
// const change = getMilk(11);
// console.log(change)

// const contestant1 = prompt("Enter Your lover's Name");
// const contestant2 = prompt("Enter Your Name");
// const n = Math.random();
// alert(`You and Your partner ${contestant1} has  ${Math.floor(n*100)+1}% love in between.`);

// const func = (num)=>{
//     if(num%3===0 && num%5===0){
//         return console.log('FizzBuzz')
//     }else if(num%3===0){
//         return console.log('Fizz')
//     }else if(num%5===0){
//         return console.log('Buzz')
//     }
//     else{
//         return console.log(num)
// }
// }

// for(let i=1;i<101;i+=1){
//     func(i);
// }

// var output =[];
// var count=1;
// const fizzBuzz  = ()=> {
//     while (count<101){
//         if(count%3===0 && count%5===0){
//             output.push('FizzBuzz');  
//         }else if(count%3===0){
//             output.push('Fizz'); 
//         }else if(count%5===0){
//             output.push('Buzz');
//         }
//         else{
//             output.push(count);
//         }
//         count++;
// }
//     return console.log(output);
// }

// fizzBuzz();

// var i = 100;
// var bottleWord = 'bottles';
// const beer = ()=>{
//     while ( i >= 0){
//         if (i===0){
//             i--;
//             console.log(`No more bottles on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`);
//         }else{
//         console.log(`${i} ${bottleWord} of beer on the wall, ${i} ${bottleWord} of beer.`);
//         console.log(`Take 1 down, pass it around,`);
//         i--;
//         if (i===1){
//             bottleWord = 'bottle';
//         }
//         if (i == 0){
//             console.log(`no more bottles on the wall`);
//         }else{
//         console.log(`${i} ${bottleWord} of beer on the wall.`);
//         }
//     }

        
// }
// }

// beer();

// if ( i === 1) {
//     console.log(`${i} bottle of beer on the wall, ${i} bottle of beer. Take 1 down , pass it around,no more bottles on the wall`);
    
// }else if ( i === 0) {
//     console.log(`No more bottles on the wall, no more bottles of beer. Go to the store ans buy some more, 99 bottles of beer on the wall.`);
// }else if(i===2){
// console.log(`${i} bottles of beer on the wall, ${i} bottles of beers. Take 1 down , pass it around,${i-1} bottle of beer on the wall.`);

// }else{
// console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take 1 down , pass it around, ${i-1} bottles of beer on the wall.`);
// }



// // Fibonacci


// const fibonacci = num=>{
//     const arr = [0,1];
//     if (num ===1){
//         return [0];
//     }else{
//         for(let i =0 ;i<num -2 ;i++){ 
//             // const seriesNumbers = arr[i] + arr[i+1];
//             arr.push(arr[i] + arr[i+1]);
            
//         }
//         return arr;

//     }
    
// } 

// console.log(fibonacci(7))

// 0  +  0 = 0
// 0  +  1 = 1
// 1  +  0 = 1
// 1  +  1 = 2
// 2  +  1 = 3
// 3  +  2 = 5
// 5  +  3 = 8



// document.querySelector('')