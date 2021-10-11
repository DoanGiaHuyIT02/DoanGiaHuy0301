var versionHienTai = "3.5" //LƯU Ý: Khi đổi dữ liệu cần cập nhật version

var data = [
    {
        id: 1,
        img: "imgs/ảnh-sản-phẩm/sp1-2.jpg",
        title: "Du lịch Sapa: Thành phố sương mù của Việt Nam",
        address: "TP.HCM",
        startDay: "30/04/2022",
        price: "2.199.000 VND",
        priceNoVND: "2.199.000"
    },
    {
        id: 2,
        img: "imgs/ảnh-sản-phẩm/sp4.jpg",
        title: "Du lịch Phan Thiết: Combo Centara Mirage Resort 5* Mũi Né",
        address: "TP.HCM, Hà Nội",
        startDay: "10/08/2022",
        price: "2.689.000 VND",
        priceNoVND: "2.689.000"
    },
    {
        id: 3,
        img: "imgs/ảnh-sản-phẩm/TN-Đà Lạt2.jpg",
        title: "Du lịch Đà Lạt: Thành phố mộng mơ - Thiên đường nghỉ dưỡng",
        address: "TP.HCM",
        startDay: "02/09/2022",
        price: "4.689.000 VND",
        priceNoVND: "4.689.000"
    },
    {
        id: 4,
        img: "imgs/ảnh-sản-phẩm/sp5.jpg",
        title: " Du Lịch Tây Nguyên: Buôn Ma Thuột - Pleiku - Bảo Tàng Thế Giới Cà Phê - Thác Phú Cường",
        address: "TP.HCM, Hà Nội",
        startDay: "15/06/2022",
        price: "3.689.000 VND",
        priceNoVND: "3.689.000"
    },
    {
        id: 5,
        img: "imgs/ảnh-sản-phẩm/sp6.jpg",
        title: "Du Lịch Phú Quốc: Combo Intercontinental Resort 5* Phú Quốc. 3 ngày 2 đêm.",
        address: "TP.HCM, Hà Nội",
        startDay: "10/03/2022",
        price: "6.199.000 VND",
        priceNoVND: "6.199.000"
    },
    {
        id: 6,
        img: "imgs/ảnh-sản-phẩm/sp3.jpg",
        title: "Du Lịch Miền Bắc: Hà Nội - Sapa - Fansipan - Thị Trấn Mờ Sương Sapa",
        address: "Thành phố Hồ Chí Minh - Đà Nắng",
        startDay: "30/04/2022",
        price: "5.199.000 VND",
        priceNoVND: "5.199.000"
    }
]

var dataTrongNuoc = [
    {
        idTN: 1,
        img: "imgs/ảnh-sản-phẩm/TN-Đà Lạt2.jpg",
        title: "Du Lịch Đà Lạt: Combo Đặc Biệt dành cho dịp lễ tại Đà Lạt - Lễ 02/09 + Vé Máy Bay Khứ Hồi",
        address: "Thành phố Hồ Chí Minh - Hà Nội",
        startDay: "02/09/2022",
        price: "7.899.000 VND",
        priceNoVND: "7.899.000"
    },
    {
        idTN: 2,
        img: "imgs/ảnh-sản-phẩm/sp4.jpg",
        title: "Du Lịch Phan Thiết: Combo Centara Mirage Resort 5* Mũi Né",
        address: "Thành phố Hồ Chí Minh",
        startDay: "10/08/2022",
        price: "2.689.000 VND",
        priceNoVND: "2.689.000"
    },
    {
        idTN: 3,
        img: "imgs/ảnh-sản-phẩm/TN2.jpg",
        title: " Du lịch biển (Bà Rịa - Vũng Tàu) - Combo trọn gói (vé khứ hồi - khách sạn)",
        address: "Hà Nội - Đà Nẵng - Hải Phòng",
        startDay: "30/04/2022",
        price: "3.709.000 VND",
        priceNoVND: "3.709.000"
    },
    {
        idTN: 4,
        img: "imgs/ảnh-sản-phẩm/TN1.jpg",
        title: "Tham quan Tây Ninh - Đất thánh địa của Miền Nam - Núi Bà Đen - Chùa Tòa Thánh",
        address: "Hà Nội - Hải Phòng",
        startDay: "30/04/2022",
        price: "3.999.000 VND",
        priceNoVND: "3.999.000"
    },
    {
        idTN: 5,
        img: "imgs/ảnh-sản-phẩm/sp5.jpg",
        title: "Du Lịch Tây Nguyên: Buôn Ma Thuột - Pleiku - Bảo Tàng Thế Giới Cà Phê - Thác Phú Cường",
        address: "Hà Nội - Thành phố Hồ Chí Minh",
        startDay: "30/04/2022",
        price: "2.509.000 VND",
        priceNoVND: "2.509.000"
    },
    {
        idTN: 6,
        img: "imgs/ảnh-sản-phẩm/sp1.jpg",
        title: " Du lịch Sapa: Combo trọn gói 3 ngày 2 đêm.",
        address: "Thành phố Hồ Chí Minh",
        startDay: "30/04/2022",
        price: "6.689.000 VND",
        priceNoVND: "6.689.000"
    }

]

var dataNuocNgoai = [
    {
        idNN: 1,
        img: "imgs/ảnh-sản-phẩm/NN1.jfif",
        title: "Du lịch Singapo: Combo trọn gói, vé khứ hồi, 5 ngày 4 đêm.",
        address: "Thành phố Hồ Chí Minh (Hộ Chiếu)",
        startDay: "30/04/2022",
        price: "8.199.000 VND",
        priceNoVND: "8.199.000"
    },
    {
        idNN: 2,
        img: "imgs/ảnh-sản-phẩm/NN2.jpg",
        title: "Du lịch Anh Quốc: Combo trọn gói, vé khứ hồi, khách sạn 5 sao, 7 ngày 6 đêm",
        address: "Thành phố Hồ Chí Minh (Hộ Chiếu)",
        startDay: "30/04/2022",
        price: "10.399.000 VND",
        priceNoVND: "10.399.000"
    },
    {
        idNN: 3,
        img: "imgs/ảnh-sản-phẩm/NN3.jpg",
        title: "Du lịch Thái Lan: Quốc gia chùa vàng - 3 ngày 2 đêm - Khách sạn 5 sao",
        address: "Thành phố Hồ Chí Minh (Hộ Chiếu)",
        startDay: "30/04/2022",
        price: "4.199.000 VND",
        priceNoVND: "4.199.000"
    },
    {
        idNN: 4,
        img: "imgs/ảnh-sản-phẩm/NN4.jpg",
        title: "Du lịch Hàn Quốc - Xứ sở kim chi - Combo vé khứ hồi, 4 ngày 3 đêm, khách sạn chuẩn 5 sao.",
        address: "Thành phố Hồ Chí Minh (Hộ Chiếu)",
        startDay: "30/04/2022",
        price: "6.199.000 VND",
        priceNoVND: "6.199.000"
    },
    {
        idNN: 5,
        img: "imgs/ảnh-sản-phẩm/NN5.jpg",
        title: "Du lịch Nhật Bản - Xứ sở hoa anh đào: Combo trọn gói 3 ngày 2 đêm.",
        address: "Thành phố Hồ Chí Minh (Hộ Chiếu)",
        startDay: "30/04/2022",
        price: "5.899.000 VND",
        priceNoVND: "5.899.000"
    },
    {
        idNN: 6,
        img: "imgs/ảnh-sản-phẩm/NN6.jpg",
        title: "Du lịch Hoa Kì: Combo trọn gói 6 ngày 5 đêm - Khách sạn 5 sao",
        address: "Thành phố Hồ Chí Minh (Hộ Chiếu)",
        startDay: "30/04/2022",
        price: "15.199.000 VND",
        priceNoVND: "15.199.000"
    }
]





function loadDataToLocalStore(id) {
    var versionStored = localStorage.getItem("versionStored");

    // nếu chưa lưu version thì mặc định là versionHienTai
    if (!versionStored) {
        versionStored = versionHienTai; //Đã cài đặt mặc định
        localStorage.setItem("versionStored", versionStored);
    }

    if (versionStored !== versionHienTai) {
        localStorage.removeItem("dataStored");
        localStorage.removeItem("dataTN");
        localStorage.removeItem("dataNN");
    }


    var dataDaLuu = localStorage.getItem("dataStored");
    var dataDaLuuTN = localStorage.getItem("dataTN");
    var dataDaLuuNN = localStorage.getItem("dataNN");

    if (!dataDaLuu) {
        //Data là một object/ array JavaScript
        // Chuyển Data thành chuỗi String
        var dataString = JSON.stringify(data);
        localStorage.setItem("dataStored", dataString);
    }

    if (!dataDaLuuTN) {
        var dataTN = JSON.stringify(dataTrongNuoc);
        localStorage.setItem("dataTN", dataTN);
    }

    if (!dataDaLuuNN) {
        var dataNN = JSON.stringify(dataNuocNgoai);
        localStorage.setItem("dataNN", dataNN);
    }

    localStorage.setItem("versionStored", versionHienTai);
}

function xuLyHienThiDULieu() {
    var tourHTML = '';
    var tourTN = '';
    var tourNN = '';

    for (var  i = 0;  i < data.length;  i++) {
        const item = data[i];
        
        
        var dataHTML = `
                            <div class="col-30">
                                <div class="product-items">
                                    <div class="img-SanPham">
                                        <a href="#">
                                            <img src="${item.img}" alt="">
                                        </a>
                                    </div>
                                    <div class="info-SanPham">
                                        <div class="logoHot">
                                            <img src="imgs/hot.png" alt="ảnh chữ hot">
                                        </div>
                                        <a href="#">
                                            <p>${item.title}</p>
                                        </a>
                                        <div class="location">
                                            <i class="far fa-flag"></i>
                                            <span>Địa điểm khơi hành: ${item.address}</span>
                                        </div>
                                        <div class="startDay">
                                            <i class="far fa-clock"></i>
                                            <span>${item.startDay}</span>
                                        </div>
                                    </div>
                                    <div class="footer-product">
                                        <div class="price">
                                            <i class="fas fa-money-bill-alt"></i>
                                            <span>${item.price}</span>
                                        </div>
                                        <input class="btn" type="button" value="Đặt ngay" onClick="datNgayClick(${item.id})">
                                    </div>
                                </div>
                            </div>`;
        tourHTML = tourHTML + dataHTML;
    }

    $(`#SanPhamHOT-items`).prepend(tourHTML);

    for (var index = 0; index < dataTrongNuoc.length; index++) {
        const itemTN = dataTrongNuoc[index];
        
        var DaTaTN = `
                        <div class="col-30">
                            <div class="product-items">
                                <div class="img-SanPham">
                                    <a href="#">
                                        <img src="${itemTN.img}" alt="">
                                    </a>
                                </div>
                                <div class="info-SanPham">
                                    <a href="#">
                                        <p>${itemTN.title}</p>
                                    </a>
                                    <div class="location">
                                        <i class="far fa-flag"></i>
                                        <span>Địa điểm khơi hành: ${itemTN.address}</span>
                                    </div>
                                    <div class="startDay">
                                        <i class="far fa-clock"></i>
                                        <span>${itemTN.startDay}</span>
                                    </div>
                                </div>
                                <div class="footer-product">
                                    <div class="price">
                                        <i class="fas fa-money-bill-alt"></i>
                                        <span>${itemTN.price}</span>
                                    </div>
                                    <input class="btn" type="button" value="Đặt ngay" onClick="datNgayClick1(${itemTN.idTN})">
                                </div>
                            </div>
                        </div> `
        tourTN = tourTN + DaTaTN;
    }

    $("#SanPhamTrongNuoc").prepend(tourTN);

    for (var i = 0; i < dataNuocNgoai.length; i++) {
        const itemNN = dataNuocNgoai[i];

        var DaTaNN = `<div class="col-30">
                        <div class="product-items">
                            <div class="img-SanPham">
                                <a href="#">
                                    <img src="${itemNN.img}" alt="">
                                </a>
                            </div>
                            <div class="info-SanPham">
                                <a href="#">
                                    <p>${itemNN.title}</p>
                                </a>
                                <div class="location">
                                    <i class="far fa-flag"></i>
                                    <span>Địa điểm khơi hành: ${itemNN.address}</span>
                                </div>
                                <div class="startDay">
                                    <i class="far fa-clock"></i>
                                    <span>${itemNN.startDay}</span>
                                </div>
                            </div>
                            <div class="footer-product">
                                <div class="price">
                                    <i class="fas fa-money-bill-alt"></i>
                                    <span>${itemNN.price}</span>
                                </div>
                                <input class="btn" type="button" value="Đặt ngay" onClick="datNgayClick2(${itemNN.idNN})">
                            </div>
                        </div>
                    </div> `;
        tourNN = tourNN + DaTaNN;
    }
    $("#SanPhamNuocNgoai").prepend(tourNN);
}


        
  

// Phần xử lý js trượt về đầu trang
function truotVeTrangDau() {
    $("#GoToTop").hide()

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 400)
            $("#GoToTop").show("slow")
        else
            $("#GoToTop").hide("slow")
    })

    $("#GoToTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
    })
}

// Phần trượt đến các section
function truotDenCacSection() {

    $("#TOURHOT").click(function () {
        $("html, body").animate({
            scrollTop: 1120
        }, 1000)
    })
    $("#TOURTrongNuoc").click(function () {
        $("html, body").animate({
            scrollTop: 2280
        }, 1000)
    })
    $("#TOURNuocNgoai").click(function () {
        $("html, body").animate({
            scrollTop: 3460
        }, 1000)
    })
}

// Phần bấm nút đặt ngay
function langNgheHamClick() {
    $(document).on("click", ".btn", function (e) {

    })
}

function datNgayClick(id) {
    var item = $(this);

    window.location.href = "/index-gioHang.html?id=" + id;
}

function datNgayClick1(idTN) {
    var item1 = $(this);

    window.location.href = "/index-gioHang.html?idTN=" + idTN;
}

function datNgayClick2(idNN) {
    var item2 = $(this);

    window.location.href = "/index-gioHang.html?idNN=" + idNN;
}


$(document).ready(function () {

    truotVeTrangDau();
    truotDenCacSection();
    loadDataToLocalStore();
    xuLyHienThiDULieu();
})