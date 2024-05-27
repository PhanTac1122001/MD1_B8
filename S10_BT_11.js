//Bài 1
let physicS = parseFloat(prompt("Nhập điểm Vật Lý: "));
let chemistryS = parseFloat(prompt("Nhập điểm Hoá Học: "));
let SinhS = parseFloat(prompt("Nhập điểm Sinh Học: "));
let Dtb = (SinhS+physicS+chemistryS)/3;
console.log(Dtb);
document.writeln(Dtb);
//Bài 2
let celsius = parseFloat(prompt("Nhập giá trị độ C: "));
let doF = (celsius/5 *9) +32;
document.writeln("Bài 2: Chuyển "+celsius+" độ C sang độ F là"+doF);
//Bài 3
let R = parseFloat(prompt("Bài 3+4: Nhập bán kính đường tròn: "));
let Sr= 3.14*(R**2);
document.writeln("Bài 3: Diện tích hình tròn là: "+Sr);
//Bài 4
let Dr = 2*3.14*R;
document.writeln("Bài 4: Chu vi hình tròn là: "+Dr);