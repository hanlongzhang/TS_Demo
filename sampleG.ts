{
    function calculate_discount(price:any, rate:any) {
        if (rate === void 0) {rate = 0.50;}
        let discount = price * rate;
        console.log("计算结果:", discount);
    }

    //calculate_discount(1000);
    calculate_discount(1000, 0.30);
}

/** 省略参数*/
function buildName(firstName1:string, ...restName:string[]) {
    return firstName1 + " " + restName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
{
    function addNumbers(...nums:number[]) {
        let i;
        let sum:number = 0;
        for (i = 0; i < nums.length; i++) {
            sum = sum + nums[i];
        }
        console.log("和为:",sum);
    }
    addNumbers(1,2,3);
    addNumbers(10,10,10,10,10);
}