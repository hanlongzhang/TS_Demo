interface IPerson {
    firstName:string,
    lastName:string,
    sayHi:()=>string
}
var customer:IPerson = {
    firstName:"Tom",
    lastName:"Hanks",
    sayHi() {
    return "Hi there"
    }
}

console.log("Customer 对象")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee:IPerson = {
    firstName:"Jim",
    lastName:"Blakes",
    sayHi:():string=>{return "Hello!!!"}
}

console.log("Employee 对象")
console.log(employee.firstName)
console.log(employee.lastName)
console.log(employee.sayHi())

interface RunOptions {
    program:string,
    commandline:string[] | string |(()=>string);
}

var options:RunOptions = {program:"test1", commandline:["Hello","World"]};
console.log(options.commandline)

options = {program:"test1", commandline:["Hello","World"]};
//console.log(options.commandline[0]);
//console.log(options.commandline[1]);

{
    function greet():string {
        return "Hello World"
    }

    function caller() {
        let msg = greet()
        console.log(msg)
    }

    caller()
}

{
    function add(x: number, y:number) {
        return x+y;
    }
    console.log(add(1,2))
}