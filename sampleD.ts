var uname:string = "Runoob";
var score1:number = 50;
var score2:number = 42.50;
var sum = score1 + score2;
console.log("name:" + uname);
console.log("the first score:" + score1);
console.log("the second score:" + score2);
console.log("summer score:" + sum);

var str = '1'
var str2:number = <number><any> str;
console.log(str2)

var global_num = 12;
class Numbers {
    num_val = 13;
    static sval = 10;

    storeNum() {
        var local_num = 14;
        return local_num;
    }
}

console.log("全局变量为:"+global_num);
console.log(Numbers.sval);
var obj1 = new Numbers();
var returnval = obj1.storeNum();
console.log("实例变量："+obj1.num_val);
console.log("实例变量local_num: "+obj1.storeNum());