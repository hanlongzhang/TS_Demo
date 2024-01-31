{
    let sites:string[] = new Array("Google","Runoob", "Taobao","Facebook");
    for (let i= 0; i < sites.length; i++) {
        console.log(sites[i])
    }
}

{
    var arr_names:number[] = new Array(4)
    for(let i = 0; i <arr_names.length; i++) {
        console.log(arr_names[i])
    }
}

{
    var j:any;
    var nums:number[] = [1001,1002,1003,1004]
    for(j in nums)
        console.log(nums[j])
}

{
    function disp():string[] {
        return new Array("google","runoob","taobao","facebook")
    }
    var sites:string[] = disp()
    for (var i in sites)
        console.log(sites[i])
}

{
    function disp() {
        return new Array("google","runoob","taobao1","facebook")
    }
    var sites = disp()
    for (var i in sites)
        console.log(sites[i])
}

{
    function isBigEnough(element:any, index:any, array:any) {
        return (element>=0);
    }
    let source = [12,24,34,12,2].every(isBigEnough)
    console.log("Test value:" + source)
}

{
    let index = [12,5,8,130,44].indexOf(5);
    console.log("index is :" + index);
}

{
    let arr = new Array("baidu","taobao","tianmao");
    var str = arr.join();
    console.log("str:" + str);
    str = arr.join(",");
    console.log("str:" + str);
    str = arr.join("hello");
    console.log("str:" + str);
    str = arr.join("111");
    console.log("str:" + str);
}

{
    var number = [1,4,9];
    let roots = number.map(Math.sqrt);
    console.log("root is :" + roots);
}

{
    let number = [1,4,9];
    let roots = number.pop();
    console.log("element is :" + roots);
    let roots2 = number.push(10);
    console.log("element is :" + roots2);

    let numbers = new Array(1,4,9);
    let roots3 = numbers.push(19);
    console.log("element is :" + roots3);
}