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