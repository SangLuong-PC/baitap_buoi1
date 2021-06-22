// Bài tập 5 Tính tổng 2 ký số
var so = 35;
so = Math.abs(so);
var sum = (so % 10) + Math.floor((so /= 10));
console.log("--------------------Bai tap 5 -----------------");
console.log("SỐ NHẬP VÀO LÀ = 35");
console.log("TỔNG SỐ ", sum);
