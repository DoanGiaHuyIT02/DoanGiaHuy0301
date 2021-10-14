function layThongTinDuLich() {

    // lay id tren query string

     
    // lay query string tu url
    var urlSearchParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlSearchParams.entries());

    // END lay query string tu url


     // params[ daSplit[0] ] = daSplit[1]   ~ params[ "id" ] = 1


// var newParam = { id: 1 };

//     var idValue = newParam.id;
//     var idValue = newParam["id"];


    // Gan gia tri 1000 vao thuoc tinh price
    // cach 1: newParam.price = 1000
    // cach 2: newParam["price"] = 1000


    // var tenThuocTinh = "address";
    // Gan gia tri Huynh Tan Phat vao thuoc tinh adresss
    // cach 1: newParam.address = 1000
    // cach 2: newParam[tenThuocTinh] = 1000



    // newParam.id = 2; // => { id: 2}
    // Lấy thuoc tinh title cua object newParam
    // cach 1 newParam.title
    // cach 2 newParam["title"]
    
    // newParam["title"] = "Du lịch Sapa: Thành phố sương mù của Việt Nam";


    // 1 lay URL 'http://dfsdfsf?id=1&loai=2'
    // 2 lay tu ? den het => id=1&loai=2 (dung substring)
    // 3 split & de lay tung cai param => ["id=1", "loai=1"] (dung split)
    // 4 lay gia tri cua param va ten thuoc tinh cua param (xu ly mang arr)



    var id = params.id;
    var loai = params.loai;
    var idInt = parseInt(id);
    var loaiInt = parseInt(loai);

   

    // data la kieu string
    
    // var dataString = localStorage.getItem("dataAll");

    var dataString = null;

    if(loaiInt === 1)
    {
        console.log("dataStored");
        dataString = localStorage.getItem("dataStored");
    }

    if(loaiInt === 2)
    {
        console.log("dataTN");
        dataString = localStorage.getItem("dataTN");
    }

    if(loaiInt === 3)
    {
        console.log("dataNN");
        dataString = localStorage.getItem("dataNN");
    }

   

    // Truong hop 1: data, trongnuoc, ngoai nuoc id khac nhau => GOP
     
    // data
    // dataTrongNuoc
    // dataNuocNgoai

    // GOP = gop (dataTrongNuoc, dataNuocNgoai)

    // sau khi gop 3 thang thì co id thì lay ra thoi

    // truong hop 2: id giong nhau nhung loai khac nha => tim cach de biet la thang nao


    // chuyen data => javascript object/array
    var data = JSON.parse(dataString);

    var duLichItem = data.find(d => d.id === idInt);


    // var imgListHTML = "";

    // var list = duLichItem.imgList;
    // for (var index = 0; index < list.length; index++) {


    //     imgListHTML = imgListHTML + `<img src="${list[index].img}" />`
    // }

    // console.log(imgListHTML);
        // <img src="imgs/ảnh-sản-phẩm/NN2.jpg" alt="sp1"/>
        // <img src="imgs/ảnh-sản-phẩm/NN2-1.jpg" alt="sp1-1"/>
        // <img src="imgs/ảnh-sản-phẩm/NN2-2.jpg" alt="sp1-2"/>
        // <img src="imgs/ảnh-sản-phẩm/NN2-3.jpg" alt="sp1-3"/>


    console.log(duLichItem);



// Phần thay đổi thông tin 
    // Sản phẩm hot
    // thay doitieu de
    $("#NameTrip").text(duLichItem.title);

    // Thay đổi ngày tháng
    $("#dateTrip").text(duLichItem.startDay);

    // thay doi anhdai dien
    $("#anhDaiDien").attr("src",duLichItem.img);

    // Thay đổi giá tiền khi nhân
    $("#price-multiplier").text("x " + duLichItem.priceNoVND + " =")

    // Thay đổi giá tiền
    $.each($(".total-item2"), function (){
        $(this).text(duLichItem.price)
    })

    // Phần xử lý tính tiền
}

function tinhTien() {

    // lay query string tu url
    var urlSearchParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlSearchParams.entries());
    // END lay query string tu url

    var id = params.id;
    var loai = params.loai;
    var idInt = parseInt(id);
    var loaiInt = parseInt(loai);


    var dataString = null;

    if(loaiInt === 1)
    {
        console.log("dataStored");
        dataString = localStorage.getItem("dataStored");
    }

    if(loaiInt === 2)
    {
        console.log("dataTN");
        dataString = localStorage.getItem("dataTN");
    }

    if(loaiInt === 3)
    {
        console.log("dataNN");
        dataString = localStorage.getItem("dataNN");
    }

    // chuyen data => javascript object/array
    var data = JSON.parse(dataString);

    var duLichItem = data.find(d => d.id === idInt);


    // Phần xử lý chuyển só có chấm thành không chấm
    var priceString = duLichItem.priceNoVND;

    var priceArr = priceString.split(".");

    var priceKhongCham = "";
    for (var i = 0; i < priceArr.length; i++) {
        priceKhongCham += priceArr[i];
        
    }

    var priceNoVNDInt = parseInt(priceKhongCham); // parseFloat
    


    // Phần xử lý tính tiền
    var soLuongKhach = document.getElementById("soLuongKhach").value;

    var tongTinhToan = soLuongKhach * priceNoVNDInt;

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




$(document).ready(function() {
    layThongTinDuLich();
    tinhTien();
})