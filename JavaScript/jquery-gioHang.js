function layThongTinDuLich() {

    // lay id tren query string

     
    var urlSearchParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlSearchParams.entries());


    var id = params.id;
    
    var idInt = parseInt(id);

    // data la kieu string
    
    var dataString = localStorage.getItem("dataStored");

    // chuyen data => javascript object/array
    var data = JSON.parse(dataString);


    var duLichItem = data.find(d => d.id === idInt);


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

}

function layThongTinDuLichTrongNuoc() {

    // lay id tren query string

     
    var urlSearchParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlSearchParams.entries());


    var idTN = params.idTN;
    
    var idIntTN = parseInt(idTN);

    // data la kieu string
    var dataTN = localStorage.getItem("dataTN");

    // chuyen data => javascript object/array
    var data1 = JSON.parse(dataTN);


    var duLichItem1 = data1.find(dTN => dTN.idTN === idIntTN);


// Phần thay đổi thông tin 
    // Sản phẩm trong nước
    // thay doitieu de
    $("#NameTrip").text(duLichItem1.title);

    // Thay đổi ngày tháng
    $("#dateTrip").text(duLichItem1.startDay);

    // thay doi anhdai dien
    $("#anhDaiDien").attr("src",duLichItem1.img);

    // Thay đổi giá tiền khi nhân
    $("#price-multiplier").text("x " + duLichItem1.priceNoVND + " =")

    // Thay đổi giá tiền
    $.each($(".total-item2"), function (){
        $(this).text(duLichItem1.price)
    })

}

function layThongTinDuLichNuocNgoai() {

    // lay id tren query string

     
    var urlSearchParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlSearchParams.entries());


    var idNN = params.idNN;
    
    var idIntNN = parseInt(idNN);

    // data la kieu string
    var dataNN = localStorage.getItem("dataNN");

    // chuyen data => javascript object/array
    var data2 = JSON.parse(dataNN);

    var duLichItem2 = data2.find(dNN => dNN.idNN === idIntNN);


// Phần thay đổi thông tin 
    // Sản phẩm nước ngoài
    // thay doitieu de
    $("#NameTrip").text(duLichItem2.title);

    // Thay đổi ngày tháng
    $("#dateTrip").text(duLichItem2.startDay);

    // thay doi anhdai dien
    $("#anhDaiDien").attr("src",duLichItem2.img);

    // Thay đổi giá tiền khi nhân
    $("#price-multiplier").text("x " + duLichItem2.priceNoVND + " =")

    // Thay đổi giá tiền
    $.each($(".total-item2"), function (){
        $(this).text(duLichItem2.price)
    })
}



$(document).ready(function() {
    layThongTinDuLich();
    layThongTinDuLichTrongNuoc();
    layThongTinDuLichNuocNgoai()
})