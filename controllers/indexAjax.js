// console.log(axios);
// Khai bao service
var svServices = new SinhVienServices();

var layThongTinSinhVien = function(){
    var promise = svServices.layDanhSachSinhVien();
    promise.then(function(result){
        var content='';
    for(var i = 0; i < result.data.length; i++){
        // Lấy sv từ kết quả trả về
        var sv = result.data[i];
        // Tạo đối tượng sinh viên chứa đối tượng đó
        var sinhVien = new SinhVien();
        sinhVien.maSinhVien = sv.maSinhVien;
        sinhVien.tenSinhVien = sv.tenSinhVien;
        sinhVien.email = sv.email;
        sinhVien.diemToan = sv.diemToan;
        sinhVien.diemLy = sv.diemLy;
        sinhVien.diemHoa = sv.diemHoa;
        sinhVien.diemRenLuyen = sv.diemRenLuyen;
        sinhVien.loaiSinhVien = sv.loaiSinhVien;
        content +=`
        <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.diemTrungBinh().toFixed(2)}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td><button class="btn btn-primary" onclick="chinhSuaSinhVien('${sinhVien.maSinhVien}')">Chỉnh sửa</button></td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xóa</button></td>
            </tr>
        `;
    }
    document.getElementById('tblSinhVien').innerHTML = content;


    }).catch(function(err){
        console.log(err.response.data);
    })
}

// Tao ra mot obj chua cac thong thing BE cung cap

// var objectGetSinhVien = {
//     url:'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', // duong dan BE cung cap
//     method: 'GET' // giao thức phía backend
// }

// dung thu vien axios gui yeu cau den server

// var promise = axios(objectGetSinhVien);

// var layDuLieuThanhCong = function (result){ //ham xy ly khi thanh cong
//     console.log(result.data);
//     var content='';
//     for(var i = 0; i < result.data.length; i++){
//         // Lấy sv từ kết quả trả về
//         var sv = result.data[i];
//         // Tạo đối tượng sinh viên chứa đối tượng đó
//         var sinhVien = new SinhVien();
//         sinhVien.maSinhVien = sv.maSinhVien;
//         sinhVien.tenSinhVien = sv.tenSinhVien;
//         sinhVien.email = sv.email;
//         sinhVien.diemToan = sv.diemToan;
//         sinhVien.diemLy = sv.diemLy;
//         sinhVien.diemHoa = sv.diemHoa;
//         sinhVien.diemRenLuyen = sv.diemRenLuyen;
//         sinhVien.loaiSinhVien = sv.loaiSinhVien;
//         content +=`
//         <tr>
//                 <td>${sinhVien.maSinhVien}</td>
//                 <td>${sinhVien.tenSinhVien}</td>
//                 <td>${sinhVien.email}</td>
//                 <td>${sinhVien.loaiSinhVien}</td>
//                 <td>${sinhVien.diemTrungBinh().toFixed(2)}</td>
//                 <td>${sinhVien.diemRenLuyen}</td>
//                 <td><button class="btn btn-primary" onclick="chinhSuaSinhVien('${sinhVien.maSinhVien}')">Chỉnh sửa</button></td>
//                 <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xoa</button></td>
//             </tr>
//         `;
//     }
//     document.getElementById('tblSinhVien').innerHTML = content;


// }
// var layDuLieuThatBai = function (err){// ham tra ve khi that bai
//     console.log(err.response.data);
// }

// Phương thức then(callback): nhận vào 1 hàm có tham số là kết quả trả về thành công từ phía server(Trả về dữ liệu)
// Phương thức cacth(callback): nhận vào 1 hàm có tham số là kết quả trả về thất bại từ phía server(Trả lỗi)
// promise.then(layDuLieuThanhCong).catch(layDuLieuThatBai);
layThongTinSinhVien();


//  POST chức năng thêm sinh viên
document.getElementById('btnThemSinhVien').onclick = function(){
    // Lấy thông tin người dùng nhập vào từ giao diện
    var sv = new SinhVien();
    sv.maSinhVien=document.getElementById('maSinhVien').value;
    sv.tenSinhVien=document.getElementById('tenSinhVien').value;
    sv.email=document.getElementById('email').value;
    sv.diemToan=document.getElementById('diemToan').value;
    sv.diemLy=document.getElementById('diemLy').value;
    sv.diemHoa=document.getElementById('diemHoa').value;
    sv.diemRenLuyen=document.getElementById('diemRenLuyen').value;
    sv.loaiSinhVien=document.getElementById('loaiSinhVien').value;
    console.log('Sinh Viên:', sv);
    // Tạo ra object Backend cần
    // var objectModel = {
    //     maSinhVien:sv.maSinhVien
    //     ....     
    // }

    axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',//link Backend
        method:'POST',//Phuong thuc cua BE
        data:sv //doi tuong giong BE
    }).then(function (result){
        console.log("Ket qua:", result.data);
        // window.reload => loai lai file script => lay lai ds new
        // location.reload();
        layThongTinSinhVien();
        // cach 2: Goi lai api layDanhSachVinhVien tai day

    }).catch(function (err){
        console.log("Ket qua:", err.response.data);
    })

}
// xoa SV
var xoaSinhVien = function(masv){
    alert(masv);
    var promise = svServices.xoaSinhVien(masv);
    // Dung promise xu ly thanh cong hoac that bai
    promise.then(function(result){
        console.log(result.data);
        // Load lai
        layThongTinSinhVien();
    }).catch(function(err){
        console.log(err.response.data);
    })

}
// chỉnh sửa
var chinhSuaSinhVien = function(masv){
    alert(masv);
    document.getElementById('maSinhVien').disabled=true; //khoa ma khi chinh sua
    document.getElementById('btnThemSinhVien').disabled=true; //khoa ma khi chinh sua
    var promise = svServices.layThongTinSinhVien(masv);
    promise.then(function(result){
        // lay thanh cong => gan du lieu len the
        var sinhVien = result.data;
        document.getElementById('maSinhVien').value = sinhVien.maSinhVien;
        document.getElementById('tenSinhVien').value = sinhVien.tenSinhVien;
        document.getElementById('email').value = sinhVien.email;
        document.getElementById('diemToan').value = sinhVien.diemToan;
        document.getElementById('diemLy').value = sinhVien.diemLy;
        document.getElementById('diemHoa').value = sinhVien.diemHoa;
        document.getElementById('diemRenLuyen').value = sinhVien.diemRenLuyen;
        document.getElementById('loaiSinhVien').value = sinhVien.loaiSinhVien;
    }).catch(function(err){
        console.log(err.response.data);
    })
    

}
// cap nhat sinh vien
document.getElementById('btnCapNhatSinhVien').onclick =function(){
    // Lay thong tin

    var sinhVienUpdate = new SinhVien();
    sinhVienUpdate.maSinhVien = document.getElementById('maSinhVien').value;
    sinhVienUpdate.tenSinhVien = document.getElementById('tenSinhVien').value;
    sinhVienUpdate.email = document.getElementById('email').value;
    sinhVienUpdate.diemToan = document.getElementById('diemToan').value;
    sinhVienUpdate.diemLy = document.getElementById('diemLy').value;
    sinhVienUpdate.diemHoa = document.getElementById('diemHoa').value;
    sinhVienUpdate.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    sinhVienUpdate.loaiSinhVien = document.getElementById('loaiSinhVien').value;
    // goi API từ BackEnd cung cấp
    var promise = svServices.capNhatSinhVien(sinhVienUpdate.maSinhVien,sinhVienUpdate);
    promise.then(function(result){
        console.log(result.data);
        // Load lai
        layThongTinSinhVien();
    }).catch(function(err){
        console.log(err.response.data);
    })
    
    document.getElementById('maSinhVien').disabled=false;
    document.getElementById('btnThemSinhVien').disabled=false;
    var mangInput = document.querySelectorAll('input');
    for(var i = 0 ; i<mangInput.length;i++){
        var tagInput = mangInput[i];
        tagInput.value = '';
    }
}
