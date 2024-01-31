var binaryLiteral = 10;
var octalLiteral = 484;
var decLiteral = 6;
var hexLiteral = 0xf00d;
console.log(hexLiteral);
var names = "Runoob";
var years = 5;
var sentences = "\u4F60\u597D\uFF0C\u4ECA\u5E74\u662F ".concat(names, " \u53D1\u5E03 ").concat(years + 2, " \u5468\u5E74");
var words = "\u4F60\u597D\uFF0C\u4ECA\u5E74\u662F ".concat(names, " \u53D1\u5E03 ").concat(years + 1, " \u5468\u5E74");
console.log(sentences);
console.log(words);
var flag = true;
//let arr:number[] = [1,2];
//let arr:Array<number>= [1,2];
var x;
x = ['Runoob', 1];
//x = [1, 'Runoob'];
console.log(x[0]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
function helloword() {
    alert("Hello Runoob");
}
