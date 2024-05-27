//Bài 1
let firstName = "Academy";
let lastName = "Rikkei";
let fullName = "Rikkei Academy";

//Bai 2
let bai1 = 10;
let a=true;
let b=null;
let c;
document.writeln("<br><b>Bài 2:</b> Các kiểu dữ liệu trong js:");
document.writeln("<br>Number: "+bai1 );
document.writeln("<br>String: "+firstName);
document.writeln("<br>String: "+a);
document.writeln("<br>boolean: "+b);
document.writeln("<br>underfined: "+c);

//Bài 3
let physicS = parseFloat(prompt("Bài 3: Nhập điểm Vật Lý: "));
let chemistryS = parseFloat(prompt("Bài 3: Nhập điểm Hoá Học: "));
let SinhS = parseFloat(prompt("Bài 3: Nhập điểm Sinh Học: "));
let Dtb = (SinhS+physicS+chemistryS)/3;
console.log(Dtb);
document.writeln("<br><b>Bài 3:</b> Điểm trung bình là: "+Dtb);
//Bài 4
let celsius = parseFloat(prompt("Nhập giá trị độ C: "));
let doF = (celsius/5 *9) +32;
document.writeln("<br><b>Bài 4:</b> Chuyển "+celsius+" độ C sang độ F là"+doF);

//Bài 5
let dai= parseFloat(prompt("Bài 5: Mời bạn nhập chiều dài cạnh chữ nhật: "));
let rong= parseFloat(prompt("Bài 5: Mời bạn nhập chiều rộng cạnh chữ nhật: "));
let Chuvi=0;
let Dtich=0;
Chuvi=(dai+rong)*2;
Dtich=dai*rong;
document.writeln("<br><b>Bài 5:</b> Chu vi của hình chữ nhật có chiều dài: "+dai+" và rộng: "+rong+" là: "+Chuvi);
document.writeln("<br>Diện tích của hình chữ nhật có chiều dài: "+dai+" và rộng: "+rong+" là: "+Dtich);

//Bài 6
let R = parseFloat(prompt("Bài 6: Nhập bán kính đường tròn: "));
let Sr= 3.14*(R**2);
document.writeln("<br><b>Bài 6:</b> Diện tích hình tròn là: "+Sr);
let Dr = 2*3.14*R;
document.writeln("<br>Chu vi hình tròn là: "+Dr);

//Bài 7
let bai7=2;
var bai7_2="2";
var bai7_3=2;
if(bai7==bai7_2)
{
    document.write("<br><b>Bài 7 </b>Đây kết quả của == khi so sánh let a=7 và var b='7'");
}
if(bai7===bai7_3)
{
    document.write("<br><b>Bài 7 </b>Đây kết quả của === khi so sanh let a=7 và var c=7");
}

//Bài 8
let d=6;
let result= ++d + d + d++ + ++d + d;
document.write("<br>a=6"+ result);

//Bài 9
console.log(0 || NaN ||"Rikkei Academy"||null);
console.log(null || NaN || false || null);
console.log(undefined || 1 || 5 || null);
console.log("" || null || 5 || NaN);
console.log(12 || null || 1|| NaN);

//Bài 10
console.log(0 && 1 && "Rikkei Academy" &&null);
console.log(2 && NaN && false && null);
console.log(3 && 1 && 5 && null);
console.log("1" && undefined && 5 && NaN);
console.log(1 && null && 12&& NaN);