var versionHienTai = "4.9" //LƯU Ý: Khi đổi dữ liệu cần cập nhật version




var data = [
    {
        id: 1,
        anhNen: "imgs/ảnh-nền/Sapa.png",
        img: "imgs/ảnh-sản-phẩm/sp1-2.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/sp1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/sp1-1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/sp1-2.jpg"},
            { img: "imgs/ảnh-sản-phẩm/sp1-3.jpg" },
        ],
        title: "Du lịch Sapa: Thành phố sương mù của Việt Nam",
        address: "TP.HCM",
        startDay: "30/04/2022",
        startDayList: [
            {startDay: "30/04/2022"},
            {startDay: "01/05/2022"},
            {startDay: "02/05/2022"},
            {startDay: "03/05/2022"},
            {startDay: "04/05/2022"},
            {startDay: "05/05/2022"},
            {startDay: "06/05/2022"},
            {startDay: "07/05/2022"},
        ],
        price: "2.199.000 VND",
        priceNoVND: "2.199.000",
        numberDay: "3 ngày 2 đêm",
        maTour: "HT-SP0301"
    },
    {
        id: 2,
        anhNen: "imgs/ảnh-nền/PhanThiet.png",
        img: "imgs/ảnh-sản-phẩm/sp4.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/sp4.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Phan Thiết1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Phan Thiết2.png"},
            { img: "imgs/ảnh-sản-phẩm/TN-Phan Thiết3.jpg" },
        ],
        title: "Du lịch Phan Thiết: Combo Centara Mirage Resort 5* Mũi Né",
        address: "TP.HCM, Hà Nội",
        startDay: "10/08/2022",
        startDayList: [
            {startDay: "10/08/2022"},
            {startDay: "11/08/2022"},
            {startDay: "12/08/2022"},
            {startDay: "13/08/2022"},
            {startDay: "14/08/2022"},
            {startDay: "15/08/2022"},
            {startDay: "16/08/2022"},
            {startDay: "17/08/2022"},
        ],
        price: "2.689.000 VND",
        priceNoVND: "2.689.000",
        numberDay: "3 ngày 2 đêm",
        maTour: "HT-PT0301"
    },
    {
        id: 3,
        anhNen: "imgs/ảnh-nền/DaLat.png",
        img: "imgs/ảnh-sản-phẩm/TN-Đà Lạt2.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/TN-Đà Lạt2.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Đà Lạt1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Đà Lạt3.jpg"},
            { img: "imgs/ảnh-sản-phẩm/TN-Đà Lạt4.jfif" },
        ],
        title: "Du lịch Đà Lạt: Thành phố mộng mơ - Thiên đường nghỉ dưỡng",
        address: "TP.HCM",
        startDay: "02/09/2022",
        startDayList: [
            {startDay: "02/09/2022"},
            {startDay: "03/09/2022"},
            {startDay: "04/09/2022"},
            {startDay: "05/09/2022"},
            {startDay: "06/09/2022"},
            {startDay: "07/09/2022"},
            {startDay: "08/09/2022"},
            {startDay: "09/09/2022"},
        ],
        price: "4.689.000 VND",
        priceNoVND: "4.689.000",
        numberDay: "4 ngày 3 đêm",
        maTour: "HT-DL0301"
    },
    {
        id: 4,
        anhNen: "imgs/ảnh-nền/TayNguyen.png",
        img: "imgs/ảnh-sản-phẩm/sp5.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/sp5.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Tây Nguyên1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Tây Nguyên2.jpg"},
            { img: "imgs/ảnh-sản-phẩm/TN-Tây Nguyên3.jpg" },
        ],
        title: " Du Lịch Tây Nguyên: Buôn Ma Thuột - Pleiku - Bảo Tàng Thế Giới Cà Phê - Thác Phú Cường",
        address: "TP.HCM, Hà Nội",
        startDay: "15/06/2022",
        startDayList: [
            {startDay: "15/06/2022"},
            {startDay: "16/06/2022"},
            {startDay: "17/06/2022"},
            {startDay: "18/06/2022"},
            {startDay: "19/06/2022"},
            {startDay: "20/06/2022"},
            {startDay: "21/06/2022"},
            {startDay: "22/06/2022"},
        ],
        price: "3.689.000 VND",
        priceNoVND: "3.689.000",
        numberDay: "3 ngày 2 đêm",
        maTour: "HT-TN2803"
    },
    {
        id: 5,
        anhNen: "imgs/ảnh-nền/TayNinh.png",
        img: "imgs/ảnh-sản-phẩm/TN1.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/TN1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-TâyNinh1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-TâyNinh2.jpg"},
            { img: "imgs/ảnh-sản-phẩm/TN-TâyNinh3.webp" },
        ],
        title: "Tham quan Tây Ninh - Đất thánh địa của Miền Nam - Núi Bà Đen - Chùa Tòa Thánh",
        address: "Hà Nội - Hải Phòng",
        startDay: "30/04/2022",
        startDayList: [
            {startDay: "30/04/2022"},
            {startDay: "01/05/2022"},
            {startDay: "02/05/2022"},
            {startDay: "03/05/2022"},
            {startDay: "04/05/2022"},
            {startDay: "05/05/2022"},
            {startDay: "06/05/2022"},
            {startDay: "07/05/2022"},
        ],
        price: "3.999.000 VND",
        priceNoVND: "3.999.000",
        numberDay: "3 ngày 2 đêm",
        maTour: "HT-TN0301"
    },
    {
        id: 6,
        anhNen: "imgs/ảnh-nền/MienBac.png",
        img: "imgs/ảnh-sản-phẩm/sp3.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/sp3.jpg" },
            { img: "imgs/ảnh-sản-phẩm//TN-Hà Nội.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Sapa1.jpg"},
            { img: "imgs/ảnh-sản-phẩm/TN-Sapa.jpg" },
        ],
        title: "Du Lịch Miền Bắc: Hà Nội - Sapa - Fansipan - Thị Trấn Mờ Sương Sapa",
        address: "Thành phố Hồ Chí Minh - Đà Nắng",
        startDay: "30/04/2022",
        startDayList: [
            {startDay: "30/04/2022"},
            {startDay: "01/05/2022"},
            {startDay: "02/05/2022"},
            {startDay: "03/05/2022"},
            {startDay: "04/05/2022"},
            {startDay: "05/05/2022"},
            {startDay: "06/05/2022"},
            {startDay: "07/05/2022"},
        ],
        price: "5.199.000 VND",
        priceNoVND: "5.199.000",
        numberDay: "4 ngày 3 đêm",
        maTour: "HT-MB2803"
    }
]

var dataTrongNuoc = [
    {
        id: 1,
        anhNen: "imgs/ảnh-nền/DaLat.png",
        img: "imgs/ảnh-sản-phẩm/TN-Đà Lạt2.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/TN-Đà Lạt2.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Đà Lạt1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Đà Lạt3.jpg"},
            { img: "imgs/ảnh-sản-phẩm/TN-Đà Lạt4.jfif" },
        ],
        title: "Du Lịch Đà Lạt: Combo Đặc Biệt dành cho dịp lễ tại Đà Lạt - Lễ 02/09 + Vé Máy Bay Khứ Hồi",
        address: "Thành phố Hồ Chí Minh - Hà Nội",
        startDay: "02/09/2022",
        startDayList: [
            {startDay: "02/09/2022"},
            {startDay: "03/09/2022"},
            {startDay: "04/09/2022"},
            {startDay: "05/09/2022"},
            {startDay: "06/09/2022"},
            {startDay: "07/09/2022"},
            {startDay: "08/09/2022"},
            {startDay: "09/09/2022"},
        ],
        price: "7.899.000 VND",
        priceNoVND: "7.899.000",
        numberDay: "4 ngày 3 đêm",
        maTour: "HT-DL0301"
    },
    {
        id: 2,
        anhNen: "imgs/ảnh-nền/PhanThiet.png",
        img: "imgs/ảnh-sản-phẩm/sp4.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/sp4.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Phan Thiết1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Phan Thiết2.png"},
            { img: "imgs/ảnh-sản-phẩm/TN-Phan Thiết3.jpg" },
        ],
        title: "Du Lịch Phan Thiết: Combo Centara Mirage Resort 5* Mũi Né",
        address: "Thành phố Hồ Chí Minh",
        startDay: "10/08/2022",
        startDayList: [
            {startDay: "10/08/2022"},
            {startDay: "11/08/2022"},
            {startDay: "12/08/2022"},
            {startDay: "13/08/2022"},
            {startDay: "14/08/2022"},
            {startDay: "15/08/2022"},
            {startDay: "16/08/2022"},
            {startDay: "17/08/2022"},
        ],
        price: "2.689.000 VND",
        priceNoVND: "2.689.000",
        numberDay: "3 ngày 2 đêm",
        maTour: "HT-PT0301"
    },
    {
        id: 3,
        anhNen: "imgs/ảnh-nền/VungTau.png",
        img: "imgs/ảnh-sản-phẩm/TN2.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/TN2.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Vũng Tàu1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Vũng Tàu2.jpg"},
            { img: "imgs/ảnh-sản-phẩm/TN-Vũng Tàu3.jfif" },
        ],
        title: " Du lịch biển (Bà Rịa - Vũng Tàu) - Combo trọn gói (vé khứ hồi - khách sạn)",
        address: "Hà Nội - Đà Nẵng - Hải Phòng",
        startDay: "30/04/2022",
        startDayList: [
            {startDay: "30/04/2022"},
            {startDay: "01/05/2022"},
            {startDay: "02/05/2022"},
            {startDay: "03/05/2022"},
            {startDay: "04/05/2022"},
            {startDay: "05/05/2022"},
            {startDay: "06/05/2022"},
            {startDay: "07/05/2022"},
        ],
        price: "3.709.000 VND",
        priceNoVND: "3.709.000",
        numberDay: "3 ngày 2 đêm",
        maTour: "HT-VT0301"
    },
    {
        id: 4,
        anhNen: "imgs/ảnh-nền/TayNinh.png",
        img: "imgs/ảnh-sản-phẩm/TN1.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/TN1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-TâyNinh1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-TâyNinh2.jpg"},
            { img: "imgs/ảnh-sản-phẩm/TN-TâyNinh3.webp" },
        ],
        title: "Tham quan Tây Ninh - Đất thánh địa của Miền Nam - Núi Bà Đen - Chùa Tòa Thánh",
        address: "Hà Nội - Hải Phòng",
        startDay: "30/04/2022",
        startDayList: [
            {startDay: "30/04/2022"},
            {startDay: "01/05/2022"},
            {startDay: "02/05/2022"},
            {startDay: "03/05/2022"},
            {startDay: "04/05/2022"},
            {startDay: "05/05/2022"},
            {startDay: "06/05/2022"},
            {startDay: "07/05/2022"},
        ],
        price: "3.999.000 VND",
        priceNoVND: "3.999.000",
        numberDay: "3 ngày 2 đêm",
        maTour: "HT-TN0301"
    },
    {
        id: 5,
        anhNen: "imgs/ảnh-nền/TayNguyen.png",
        img: "imgs/ảnh-sản-phẩm/sp5.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/sp5.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Tây Nguyên1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/TN-Tây Nguyên2.jpg"},
            { img: "imgs/ảnh-sản-phẩm/TN-Tây Nguyên3.jpg" },
        ],
        title: "Du Lịch Tây Nguyên: Buôn Ma Thuột - Pleiku - Bảo Tàng Thế Giới Cà Phê - Thác Phú Cường",
        address: "Hà Nội - Thành phố Hồ Chí Minh",
        startDay: "30/04/2022",
        startDayList: [
            {startDay: "30/04/2022"},
            {startDay: "01/05/2022"},
            {startDay: "02/05/2022"},
            {startDay: "03/05/2022"},
            {startDay: "04/05/2022"},
            {startDay: "05/05/2022"},
            {startDay: "06/05/2022"},
            {startDay: "07/05/2022"},
        ],
        price: "2.509.000 VND",
        priceNoVND: "2.509.000",
        numberDay: "3 ngày 2 đêm",
        maTour: "HT-TN2803"
    },
    {
        id: 6,
        anhNen: "imgs/ảnh-nền/Sapa.png",
        img: "imgs/ảnh-sản-phẩm/sp1.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/sp1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/sp1-1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/sp1-2.jpg"},
            { img: "imgs/ảnh-sản-phẩm/sp1-3.jpg" },
        ],
        title: " Du lịch Sapa: Combo trọn gói 3 ngày 2 đêm.",
        address: "Thành phố Hồ Chí Minh",
        startDay: "30/04/2022",
        startDayList: [
            {startDay: "30/04/2022"},
            {startDay: "01/05/2022"},
            {startDay: "02/05/2022"},
            {startDay: "03/05/2022"},
            {startDay: "04/05/2022"},
            {startDay: "05/05/2022"},
            {startDay: "06/05/2022"},
            {startDay: "07/05/2022"},
        ],
        price: "6.689.000 VND",
        priceNoVND: "6.689.000",
        numberDay: "3 ngày 2 đêm",
        maTour: "HT-SP0301"
    }

]


var dataNuocNgoai = [
    {
        id: 1,
        anhNen: "imgs/ảnh-nền/Singapo.png",
        img: "imgs/ảnh-sản-phẩm/NN1-1.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/NN1-1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/NN1-0.jpg" },
            { img: "imgs/ảnh-sản-phẩm/NN1.jfif" },
            { img: "imgs/ảnh-sản-phẩm/NN1-2.jpeg" }
        ],
        title: "Du lịch Singapo: Combo trọn gói, vé khứ hồi, 5 ngày 4 đêm.",
        address: "Thành phố Hồ Chí Minh (Hộ Chiếu)",
        startDay: "30/04/2022",
        startDayList: [
            {startDay: "30/04/2022"},
            {startDay: "01/05/2022"},
            {startDay: "02/05/2022"},
            {startDay: "03/05/2022"},
            {startDay: "04/05/2022"},
            {startDay: "05/05/2022"},
            {startDay: "06/05/2022"},
            {startDay: "07/05/2022"},
        ],
        price: "8.199.000 VND",
        priceNoVND: "8.199.000",
        numberDay: "4 ngày 3 đêm",
        maTour: "HT-SGP0301"
    },
    {
        id: 2,
        anhNen: "imgs/ảnh-nền/Anh.png",
        img: "imgs/ảnh-sản-phẩm/NN2.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/NN2.jpg" },
            { img: "imgs/ảnh-sản-phẩm/NN2-1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/NN2-2.jpg" },
            { img: "imgs/ảnh-sản-phẩm/NN2-3.jpg" }
        ],
        title: "Du lịch Anh Quốc: Combo trọn gói, vé khứ hồi, khách sạn 5 sao, 7 ngày 6 đêm",
        address: "Thành phố Hồ Chí Minh (Hộ Chiếu)",
        startDay: "30/04/2022",
        startDayList: [
            {startDay: "30/04/2022"},
            {startDay: "01/05/2022"},
            {startDay: "02/05/2022"},
            {startDay: "03/05/2022"},
            {startDay: "04/05/2022"},
            {startDay: "05/05/2022"},
            {startDay: "06/05/2022"},
            {startDay: "07/05/2022"},
        ],
        price: "10.399.000 VND",
        priceNoVND: "10.399.000",
        numberDay: "5 ngày 4 đêm",
        maTour: "HT-AQ0301"
    },
    {
        id: 3,
        anhNen: "imgs/ảnh-nền/ThaiLan.png",
        img: "imgs/ảnh-sản-phẩm/NN3.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/NN3.jpg" },
            { img: "imgs/ảnh-sản-phẩm//NN3-1.jpg" },
            { img: "imgs/ảnh-sản-phẩm//NN3-2.jpg" },
            { img: "imgs/ảnh-sản-phẩm//NN3-3.jpg" }
        ],
        title: "Du lịch Thái Lan: Quốc gia chùa vàng - 3 ngày 2 đêm - Khách sạn 5 sao",
        address: "Thành phố Hồ Chí Minh (Hộ Chiếu)",
        startDay: "30/04/2022",
        startDayList: [
            {startDay: "30/04/2022"},
            {startDay: "01/05/2022"},
            {startDay: "02/05/2022"},
            {startDay: "03/05/2022"},
            {startDay: "04/05/2022"},
            {startDay: "05/05/2022"},
            {startDay: "06/05/2022"},
            {startDay: "07/05/2022"},
        ],
        price: "4.199.000 VND",
        priceNoVND: "4.199.000",
        numberDay: "5 ngày 4 đêm",
        maTour: "HT-TL0301"
    },
    {
        id: 4,
        anhNen: "imgs/ảnh-nền/HanQuoc.png" ,
        img: "imgs/ảnh-sản-phẩm/NN4.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/NN4.jpg" },
            { img: "imgs/ảnh-sản-phẩm/NN4-1.png" },
            { img: "imgs/ảnh-sản-phẩm/NN4-2.png" },
            { img: "imgs/ảnh-sản-phẩm/NN4-3.jpg" }
        ],
        title: "Du lịch Hàn Quốc - Xứ sở kim chi - Combo vé khứ hồi, 4 ngày 3 đêm, khách sạn chuẩn 5 sao.",
        address: "Thành phố Hồ Chí Minh (Hộ Chiếu)",
        startDay: "30/04/2022",
        startDayList: [
            {startDay: "30/04/2022"},
            {startDay: "01/05/2022"},
            {startDay: "02/05/2022"},
            {startDay: "03/05/2022"},
            {startDay: "04/05/2022"},
            {startDay: "05/05/2022"},
            {startDay: "06/05/2022"},
            {startDay: "07/05/2022"},
        ],
        price: "6.199.000 VND",
        priceNoVND: "6.199.000",
        numberDay: "4 ngày 3 đêm",
        maTour: "HT-HQ0301"
    },
    {
        id: 5,
        anhNen: "imgs/ảnh-nền/NhatBan.png",
        img: "imgs/ảnh-sản-phẩm/NN5.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/NN5.jpg" },
            { img: "imgs/ảnh-sản-phẩm/NN5-1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/NN5-2.jpg" },
            { img: "imgs/ảnh-sản-phẩm/NN5-3.jpg" }
        ],
        title: "Du lịch Nhật Bản - Xứ sở hoa anh đào: Combo trọn gói 3 ngày 2 đêm.",
        address: "Thành phố Hồ Chí Minh (Hộ Chiếu)",
        startDay: "30/04/2022",
        startDayList: [
            {startDay: "30/04/2022"},
            {startDay: "01/05/2022"},
            {startDay: "02/05/2022"},
            {startDay: "03/05/2022"},
            {startDay: "04/05/2022"},
            {startDay: "05/05/2022"},
            {startDay: "06/05/2022"},
            {startDay: "07/05/2022"},
        ],
        price: "5.899.000 VND",
        priceNoVND: "5.899.000",
        numberDay: "3 ngày 2 đêm",
        maTour: "HT-NB0301"
    },
    {
        id: 6,
        anhNen: "imgs/ảnh-nền/USA.png",
        img: "imgs/ảnh-sản-phẩm/NN6.jpg",
        imgList: [
            { img: "imgs/ảnh-sản-phẩm/NN6.jpg" },
            { img: "imgs/ảnh-sản-phẩm/NN6-1.jpg" },
            { img: "imgs/ảnh-sản-phẩm/NN6-2.jpg" },
            { img: "imgs/ảnh-sản-phẩm/NN6-3.jpg" }
        ],
        title: "Du lịch Hoa Kì: Combo trọn gói 6 ngày 5 đêm - Khách sạn 5 sao",
        address: "Thành phố Hồ Chí Minh (Hộ Chiếu)",
        startDay: "30/04/2022",
        startDayList: [
            {startDay: "30/04/2022"},
            {startDay: "01/05/2022"},
            {startDay: "02/05/2022"},
            {startDay: "03/05/2022"},
            {startDay: "04/05/2022"},
            {startDay: "05/05/2022"},
            {startDay: "06/05/2022"},
            {startDay: "07/05/2022"},
        ],
        price: "15.199.000 VND",
        priceNoVND: "15.199.000",
        numberDay: "6 ngày 5 đêm",
        maTour: "HT-HK0301"
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

    // if (!dataDaLuuAll) {
    //     var dataAllString = JSON.stringify(dataAll);
    //     localStorage.setItem("dataAll", dataAllString);
    // }


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
                                        <a class="titleClick" onclick="chiTietClick(${item.id}, 1)">
                                            <img src="${item.img}" alt="">
                                        </a>
                                    </div>
                                    <div class="info-SanPham">
                                        <div class="logoHot">
                                            <img src="imgs/hot.png" alt="ảnh chữ hot">
                                        </div>
                                        <a class="titleClick" onclick="chiTietClick(${item.id}, 1)">
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
                                        <input class="btn" type="button" value="Đặt ngay" onclick="datNgayClick(${item.id}, 1)">
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
                                    <a class="titleClick" onclick="chiTietClick(${itemTN.id}, 2)">
                                        <img src="${itemTN.img}" alt="">
                                    </a>
                                </div>
                                <div class="info-SanPham">
                                    <a class="titleClick" onclick="chiTietClick(${itemTN.id}, 2)">
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
                                    <input class="btn" onclick="datNgayClick(${itemTN.id}, 2)" type="button" value="Đặt ngay" >
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
                                <a class="titleClick" onclick="chiTietClick(${itemNN.id}, 3)">
                                    <img src="${itemNN.img}" alt="">
                                </a>
                            </div>
                            <div class="info-SanPham">
                                <a class="titleClick" onclick="chiTietClick(${itemNN.id}, 3)">
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
                                <input class="btn" onclick="datNgayClick(${itemNN.id}, 3)" type="button" value="Đặt ngay" >
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
        }, 800);
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

    $(document).on("click", ".titleClick", function (e) {

    })
}

function datNgayClick(id, loai) {
    // var item = $(this);

    // loai 1 => data
    // loai 2 => trong nuoc
    // loai 3 => ngoai nuoc

    // window.location.href = "/index-gioHang.html?id=" + id;
    window.location.href = `/index-gioHang.html?id=${id}&loai=${loai}`;
}

function chiTietClick(id, loai) {
    window.location.href = `/index-ChiTietChuyenDi.html?id=${id}&loai=${loai}`;
}



$(document).ready(function () {

    truotVeTrangDau();
    truotDenCacSection();
    loadDataToLocalStore();
    xuLyHienThiDULieu();
})