/* BT 1 - Viết chương trình nhập ngày tháng năm */
/* Ngày Tiếp Theo */
document.getElementById("xuatNTN").onclick = function () {

    //Đầu Vào : DOM tới thẻ input lấy value
    var ngay = document.getElementById("nhapNgay").value * 1;
    var thang = document.getElementById("nhapThang").value * 1;
    var nam = document.getElementById("nhapNam").value * 1;

    //Xử Lý Dữ Kiện
    if ( nam % 4 !== 0 && thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang ==8 || thang == 10 || thang == 12 && ngay < 31 ) {
        var ngayTiepTheo = ngay + 1;
        var thangTiepTheo = thang ;
        var namTiepTheo = nam ;
    }   else if (  nam % 4 !== 0 && thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang ==8 || thang == 10  && ngay == 31) {
        var ngayTiepTheo = 1 ;
        var thangTiepTheo = thang + 1 ;
        var namTiepTheo = nam ;
    }   else if (  nam % 4 !== 0 && thang == 12 && ngay == 31) {
        var ngayTiepTheo = 1 ;
        var thangTiepTheo =  1 ;
        var namTiepTheo = nam + 1 ;
    }   else if (  nam % 4 !== 0 && thang == 4 || thang == 6 || thang == 9 || thang == 11 && ngay < 30 ) {
        var ngayTiepTheo = ngay + 1;
        var thangTiepTheo = thang;
        var namTiepTheo = nam ;
    }   else if (  nam % 4 !== 0 && thang == 4 || thang == 6 || thang == 9 || thang == 11 && ngay == 30 ) {
        var ngayTiepTheo = 1;
        var thangTiepTheo = thang + 1;
        var namTiepTheo = nam ;
    }   else if ( nam % 4 !== 0 && thang == 2 && ngay < 28 ) {
        var ngayTiepTheo = ngay + 1 ;
        var thangTiepTheo = thang;
        var namTiepTheo = nam ;
    }   else if ( nam % 4 !== 0 && thang == 2 && ngay == 28 ) {
        var ngayTiepTheo = 1 ;
        var thangTiepTheo = thang + 1;
        var namTiepTheo = nam ;
    }   else if ( nam % 4 == 0 && thang == 2 && ngay < 29 ) {
        var ngayTiepTheo = ngay + 1 ;
        var thangTiepTheo = thang;
        var namTiepTheo = nam ;
    }   else {
        var ngayTiepTheo = 1 ;
        var thangTiepTheo = thang + 1;
        var namTiepTheo = nam ;
    }

    
    var ketQuaTT = "ngày tiếp theo là" + " " + ngayTiepTheo + "/" + thangTiepTheo + "/" + namTiepTheo ;

    //Dom tới thẻ div#thongbao để ra kết quả
    document.getElementById("thongbaobt1tieptheo").innerHTML = ketQuaTT;
}
/* Ngày Tháng Năm Trước*/
document.getElementById("xuatNHQ").onclick = function () {

    //Đầu Vào : DOM tới thẻ input lấy value
    var ngay = document.getElementById("nhapNgay").value * 1;
    var thang = document.getElementById("nhapThang").value * 1;
    var nam = document.getElementById("nhapNam").value * 1;

    //Xử Lý Dữ Kiện
    if ( nam % 4 !== 0 && thang == 3 && ngay == 1 ) {
        var ngayTruoc = 28 ;
        var thangTruoc = thang - 1 ;
        var namTruoc = nam ;
    }   else if ( nam % 4 == 0 && thang == 3 && ngay == 1 ) {
        var ngayTruoc = 29 ;
        var thangTruoc = thang + 1 ;
        var namTruoc = nam ;
    }   else if ( thang == 1 && ngay == 1) {
        var ngayTruoc = 31 ;
        var thangTruoc =  12 ;
        var namTruoc  = nam - 1 ;
    }   else if ( thang == 2 || thang == 4 || thang == 6 || thang == 9 || thang == 11 && ngay == 1 ) {
        var ngayTruoc = 31 ;
        var thangTruoc =  thang -1 ;
        var namTruoc  = nam ;
    }   else if ( thang == 3 || thang == 5 || thang == 7 || thang ==8 || thang == 10 || thang == 12  && ngay == 1 ) {
        var ngayTruoc = 30 ;
        var thangTruoc =  thang - 1 ;
        var namTruoc  = nam ;
    }   else {
        var ngayTruoc = ngay - 1 ;
        var thangTruoc =  thang;
        var namTruoc  = nam ;
    }

    
    var ketQuaHQ = "ngày hôm qua là" + " " + ngayTruoc + "/" + thangTruoc + "/" + namTruoc ;

    //Dom tới thẻ div#thongbao để ra kết quả
    document.getElementById("thongbaobt1homqua").innerHTML = ketQuaHQ ;
}

/* BT 2 - Viết chương trình nhập  tháng năm  xuất ra bao nhiêu ngày*/
document.getElementById("xuatBNN").onclick = function () {

    //Đầu Vào : DOM tới thẻ input lấy value
    var thangBT2 = document.getElementById("nhapThangBT2").value * 1;
    var namBT2 = document.getElementById("nhapNamBT2").value * 1;

    //Xử Lý Dữ Kiện
    if ( namBT2 % 4 !== 0 && thangBT2 == 2) {
        var ngayBT2 = "Số Ngày Là" + " " + 28;
    }  else if ( namBT2 % 4 == 0 && thangBT2  == 2) {
        var ngayBT2 = "Số Ngày Là" + " " + 29;
    }  else if ( thangBT2 = 4 || thangBT2 == 6 || thangBT2 == 9 || thangBT2 == 11 ) {
        var ngayBT2 = "Số Ngày Là" + " " + 30;
    }   else {
        var ngayBT2 = "Số Ngày Là" + " " + 31;
    }

    //Dom tới thẻ div#thongbao để ra kết quả
    document.getElementById("thongBaoBNN").innerHTML = ngayBT2 ;
}

/* BT 3 - Nhập Số Nguyên 3 Chữ Số Xuất Ra cách Đọc*/
document.getElementById("xuatCD").onclick = function () {

    //Đầu Vào : DOM tới thẻ input lấy value
    var SN3CS = document.getElementById("nhapSN3CS").value * 1;

    //Xử Lý Dữ Kiện 
    var hangTram = Math.floor(SN3CS / 100);
    var hangChuc = Math.floor((SN3CS - hangTram*100) / 10 ) ;
    var hangDonvi = SN3CS - hangTram*100 - hangChuc*10;
    var cachDoc = hangTram + " " + "Trăm" + " " + hangChuc + " " + "Mươi" + " " + hangDonvi;

    //Dom tới thẻ div#thongbao để ra kết quả
    document.getElementById("thongBaocd").innerHTML = cachDoc ;
}  

/* BT 4 - Tìm sinh viên có nhà xa nhất */
/* Công Thức Tính Khoảng Cách */
document.getElementById("xuatKC").onclick = function () {

    //Đầu Vào : DOM tới 4 thẻ input lấy value
    var trucX1 = document.getElementById("XDD1").value * 1;
    var trucY1 = document.getElementById("YDD1").value * 1;
    var trucX2 = document.getElementById("XDD2").value * 1;
    var trucY2 = document.getElementById("YDD2").value * 1;

    //Công Thức Tính Khoảng Cách Khi biết tọa độ
    var khoangCach = Math.floor(Math.sqrt((trucX2*trucX2 - 2*trucX1*trucX2 + trucX1*trucX1)
                            +  (trucY2*trucY2 - 2*trucY1*trucY2 + trucY1*trucY1)));

    // Xuất ra giá trị khoảng cách 
    document.getElementById("thongBaokc").innerHTML = khoangCach ;
}
/* So Sánh Khoảng Cách Nhà của 3 bạn với trường đại học */
document.getElementById("xuatSoSanh").onclick = function () {

    //Đầu Vào : DOM tới 4 thẻ input lấy value
    var TT1 = document.getElementById("KCTT1").value * 1;
    var TT2 = document.getElementById("KCTT2").value * 1;
    var TT3 = document.getElementById("KCTT3").value * 1;

    //So Sanh Khoảng cách 3 nhà với trường.
    if ( TT1 > TT2 && TT1 > TT3 ) {
        var ketQuaCuoi = "Nhà Bạn Hắc Xa Nhất";
    }   else if ( TT2 > TT1 &&  TT2 > TT3) {
        var ketQuaCuoi = "Nhà Bạn Bờ Xa Nhất";
    }   else if ( TT3 > TT1 &&  TT3 > TT2) {
        var ketQuaCuoi = "Nhà Bạn Lê Xa Nhất";
    }   else if ( TT1 == TT2 && TT3 > TT2) {
        var ketQuaCuoi = "Nhà Bạn Lê Xa Nhất"; 
    }   else if ( TT1 == TT2 && TT3 < TT2) {
        var ketQuaCuoi = "Nhà Bạn Bờ và Hắc Xa Nhất"; 
    }   else if ( TT1 == TT3 && TT2 > TT3) {
        var ketQuaCuoi = "Nhà Bạn Bờ Xa Nhất"; 
    }   else if ( TT1 == TT3 && TT3 > TT2) {
        var ketQuaCuoi = "Nhà Bạn hắc và Lê Xa Nhất"; 
    }   else if ( TT2 == TT3 && TT2 < TT1) {
        var ketQuaCuoi = "Nhà Bạn Hắc Xa Nhất"; 
    }   else  {
        var ketQuaCuoi = "Nhà Bạn Bờ và Lê Xa Nhất"; 
    }  
    
    // Xuất ra giá trị khoảng cách 
    document.getElementById("thongBaoss").innerHTML = ketQuaCuoi ;
}