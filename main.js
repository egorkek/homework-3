
function printWindowValues() {
    for (values in window){
        console.log(window[values])
    }
}
printWindowValues();


function expTen(num) {
    var endValue=1;
    for (var i=0;i<10;i++){
        endValue *=num;
    }
    return endValue;

}

console.log(expTen(10));

function getFuncRes(fun, value) {
    fun(value)
}

getFuncRes(console.log, 'Hello World');

