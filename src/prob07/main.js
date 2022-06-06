// Work on POSIX and Windows
var fs = require("fs");
var stdinBuffer = fs.readFileSync(0); // STDIN_FILENO = 0
var data = stdinBuffer.toString().trim().split(/\s+/);

// 由命令列參數所輸入的資料存放在 data 總體陣列變數

function get_gt10(dat) {
    return dat.filter(v => Number(v) > 10);
}

function has3(v) {
    return v.toString().indexOf('3') >= 0;   
}

function get_has3(dat) {
    return dat.filter(has3);
}

function prime(v) {
    v = Number(v);
    if (v<2) return false;
    for(let n=2; n<=v/2; n++)
        if (v%n==0) return false;
    return true;
}

// ========================================================
// 千萬不要修改『上面』的程式碼!
// ========================================================


// 1. 你所寫的程式碼只能在這個段落。
// 2. 請依照題目說明完成欠缺的程式碼。


// ========================================================
// 千萬不要修改『下面』的程式碼!
// ========================================================

function main() {
    console.log(`get_gt10(data) => ${get_gt10(data)}`);
    console.log(`get_has3(data) => ${get_has3(data)}`);
    console.log(`get_prime(data) => ${get_prime(data)}`);
}

main()


