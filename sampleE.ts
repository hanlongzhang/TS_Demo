var avg:number = 20;
var percentage:number = 90;

console.log("avg 值为："+avg+",percentage 值为:"+percentage);

var res:boolean = ((avg>50)&&(percentage>80));
console.log("((avg>50)&&(percentage>80)):",res);

var res:boolean = ((avg>50)||(percentage>80));
console.log("((avg>50)&&(percentage>80)):",res);

var res:boolean = !((avg>50)&&(percentage>80));
console.log("!((avg>50)&&(percentage>80)):",res);


var avg = 20;

{
    let num:number = 5;
    if (num > 0) {
        console.log("is normal");
    }
}

{
    let num:number = 13;
    if (num%2 == 0) {
        console.log("偶数");
    } else if (num == 0) {
        console.log("奇数");
    } else {
        console.log("你说的是个啥");
    }
}

{
    let j:any;
    let n:any = "a b c"

    for (j in n) {
        console.log(n[j])
    }
}

{
    console.log("你说的是啥" + (1+1))
}

{
    let someArray = [1, 'string', false];
    for (let entery of someArray) {
        console.log(entery);
        console.log("............");
    }
}

{
    let list = [{name:"zhangsan", age: 10}, {name:"lisi", age: 20},]
    list.forEach((item, index) => console.log(item.age))
    console.log("............end...........")
    let bool=list.some((item) => {
        return item.age>=10
    })

    console.log("test log is ok:"+bool)
    console.log("...........some..end...........")
    let bool2=list.every((item) => {
        return item.age <=15
    })
    console.log("test item bool2 log is ok:"+bool2)
}