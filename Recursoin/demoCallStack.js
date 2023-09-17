

function fun() {
    let x = 10;
    console.log("inside fun");
}

function gun(y) {
    console.log("inside gun");
    fun();
    console.log("compelete");
}

function run() {
    let z = 9;
    gun()
    console.log("exit");
}
run();