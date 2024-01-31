let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;

console.log(hexLiteral);

let names:string = "Runoob";
let years:number = 5;
let sentences:string = `你好，今年是 ${names} 发布 ${years + 2} 周年`;
let words:string = `你好，今年是 ${names} 发布 ${years + 1} 周年`;
console.log(sentences);
console.log(words);
let flag: boolean = true;
//let arr:number[] = [1,2];
//let arr:Array<number>= [1,2];

let x: [string, number];
x = ['Runoob', 1];
//x = [1, 'Runoob'];
console.log(x[0]);

enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);

function helloword():void {
    alert("Hello Runoob");
}