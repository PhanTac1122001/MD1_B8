let diem = parseFloat(prompt("Nhập điểm của sinh viên (theo thang 100): "));
if(diem >=75)
{
    document.writeln("Sinh viên đạt loại A");
} 
else if(diem <75 && diem >=60)
{
    document.writeln("Sinh viên đạt loại B");
}
else if(diem <60 && diem >=45)
{
    document.writeln("Sinh viên đạt loại C");
}
else if(diem <45 && diem >=35)
{
    document.writeln("Sinh viên đạt loại D");
}
else if(diem <35)
{
    document.writeln("Sinh viên đạt loại F");
}