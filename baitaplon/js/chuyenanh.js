
var danhSachAnh = [
    '../img/avt1.webp',
    '../img/avt2.jpg',
    '../img/avt3.webp',
    '../img/avt4.webp'
];

var index = 0;

function chuyenAnh() {
    index++;
    if (index >= danhSachAnh.length) index = 0;
    var anh = document.getElementById("anh");
    anh.src = danhSachAnh[index];
    document.getElementById("dem").innerHTML = "" + index + "/8";
}
var ind = 3;

function chuyenAnhNguoc() {
    if (ind < 0) ind = 3;
    var anh = document.getElementById("anh");
    anh.src = danhSachAnh[ind];
    ind--;
}
setInterval("chuyenAnh()", 2000);
