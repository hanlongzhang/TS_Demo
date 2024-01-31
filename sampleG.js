{
    function calculate_discount(price, rate) {
        if (rate === void 0) {
            rate = 0.50;
        }
        var discount = price * rate;
        console.log("计算结果:", discount);
    }
    //calculate_discount(1000);
    calculate_discount(1000, 0.30);
}
/** 省略参数*/
function buildName(firstName) {
    var restName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
{
    function addNumbers() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        var i;
        var sum = 0;
        for (i = 0; i < nums.length; i++) {
            sum = sum + nums[i];
        }
        console.log("和为:", sum);
    }
    addNumbers(1, 2, 3);
    addNumbers(10, 10, 10, 10, 10);
}
