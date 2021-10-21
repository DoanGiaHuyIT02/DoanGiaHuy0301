function layThongTinDuLichChiTiet() {

    // lay id tren query string

     
    // lay query string tu url
    var urlSearchParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlSearchParams.entries());

    // END lay query string tu url


    var id = params.id;
    var loai = params.loai;
    var idInt = parseInt(id);
    var loaiInt = parseInt(loai);

   

    // data la kieu string
    
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


    // var imgListHTML = "";

    var list = duLichItem.imgList;
    var DayList = duLichItem.startDayList;
    console.log(duLichItem);


    


// Phần thay đổi thông tin 
    // Thay đổi ảnh nền
    $("#anhNen").attr("src", duLichItem.anhNen);

    // thay doi tieu de
    $("#NameTripCT").text(duLichItem.title);

    // Thay đổi ngày tháng
    $("#dateTrip").text(duLichItem.startDay);
    $("#numberDay").text(duLichItem.numberDay);
    $(".startDay1").text(DayList[0].startDay);
    $(".startDay2").text(DayList[1].startDay);
    $(".startDay3").text(DayList[2].startDay);
    $(".startDay4").text(DayList[3].startDay);
    $(".startDay5").text(DayList[4].startDay);
    $(".startDay6").text(DayList[5].startDay);
    $(".startDay7").text(DayList[6].startDay);
    $(".startDay8").text(DayList[7].startDay);

    // thay doi anhdai dien
    $("#mainImg").attr("src",duLichItem.img);
    $("#img1").attr("src", list[0].img);
    $("#img2").attr("src", list[1].img);
    $("#img3").attr("src", list[2].img);
    $("#img4").attr("src", list[3].img);

    // Thay đổi mã tour
    $("#TourCode").text("Mã tour: " + duLichItem.maTour);
    $.each($(".maCode"), function (){
        $(this).text(duLichItem.price)
    });

    // Thay đổi địa chỉ khởi hành
    $("#addressStar").text(duLichItem.address);

    // Thay đổi giá tiền
    $.each($(".total-item2"), function (){
        $(this).text(duLichItem.price)
    });
}

function datNgayClick(id, loai) {
    // var item = $(this);

    // loai 1 => data
    // loai 2 => trong nuoc
    // loai 3 => ngoai nuoc

    // window.location.href = "/index-gioHang.html?id=" + id;
    window.location.href = `/index-gioHang.html?id=${id}&loai=${loai}`;
}

$(document).ready(function() {
    layThongTinDuLichChiTiet();
})