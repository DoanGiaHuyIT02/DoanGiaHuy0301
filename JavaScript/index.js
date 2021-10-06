var index = 1;
changeImg = function() {
    var imgs = ["imgs/img-QC/anh-QC.png", "imgs/img-QC/anh0.jpg", "imgs/img-QC/anh1.jpg", "imgs/img-QC/anh2.jpg", "imgs/img-QC/anh3.jpg", "imgs/img-QC/anh4.jpg", "imgs/img-QC/anh5.jpg", "imgs/img-QC/anh6.jpg", "imgs/img-QC/anh7.jpg"]
    document.getElementById('img').src = imgs[index]
    index++;
    if (index == 9)
    {
        index = 0;
    }
}
setInterval(changeImg, 5000);


// Phần trượt và tăng số 
var yearTimer = null;
var peopleTimer = null;
var tripTimer = null;
$(document).ready(function() {
    var year = $("#year")
    var people = $("#people")
    var trip = $("#trip")

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 4300) {
            if (yearTimer === null)
                yearTimer = inc(year, 3, 30, "year")
            if (peopleTimer === null)
                peopleTimer = inc(people, 100000, 1000000, "people")
            if (tripTimer === null)
                tripTimer = inc(trip, 100, 1000, "trip")
        }
    })
})
function inc(el, steps, max, type) {
    var value = parseInt(el.text())
    return setInterval(function() {
        value += steps;
        if (value <= max) {
            el.text(value)
        } else {
            if (type === "year")
                clearInterval(yearTimer)
            else if (type === "people")
                clearInterval(peopleTimer)
            else if (type="trip")
                clearInterval(tripTimer)
        }
    }, 100)
}

//Phần chuyển đổi ảnh
function init() {
    var imgs = document.querySelectorAll("div.TripInfo-img-items img")
    for (var i = 0; i < imgs.length; i++)
        imgs[i].onclick = function() {
            var path = this.src;
            var img = document.getElementById("mainImg");
            img.setAttribute("src", path)
        }
}


// Phần xử lý tính tiền
function tinhTien() {

    var soLuongKhach = document.getElementById("soLuongKhach").value;

    var tongTinhToan = soLuongKhach * 3199000;

    // chuyen ve chuoi tongTinhToan
    var tongTinhToanString = tongTinhToan.toString();


    var tongCoChamNguoc = '';
    var dem = 0;


    // chay vong lap for 3 so cham 1 cai
    for (let index = tongTinhToanString.length - 1; index >= 0; index--) {
        
        var so = tongTinhToanString[index];

        dem = dem + 1;
        if(dem === 3){
            tongCoChamNguoc = tongCoChamNguoc + so + ".";

            dem = 0;
        } else{
            tongCoChamNguoc = tongCoChamNguoc + so
        }
        
    }

    var tongCoCham = '';

    for (let index = tongCoChamNguoc.length - 1; index >= 0; index--) {
        var so = tongCoChamNguoc[index];
        tongCoCham = tongCoCham + so;
    }

    var tongTienHienThi = tongCoCham + " VND";

    document.getElementById("total-item").innerHTML = tongTienHienThi;
    document.getElementById("total").innerHTML = tongTienHienThi;
    document.getElementById("total1").innerHTML = tongTienHienThi;
    
}
