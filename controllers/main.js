// tao mag sv
var mangSinhVien = []; 

var validate = new Validation();


document.querySelector('#btnThemSinhVien').onclick = function(){
    // Tạo đối tượng luu tru
    var sv = new SinhVien();
    sv.maSinhVien=document.getElementById('maSinhVien').value;
    sv.tenSinhVien=document.getElementById('tenSinhVien').value;
    sv.email=document.getElementById('email').value;
    sv.diemToan=document.getElementById('diemToan').value;
    sv.diemLy=document.getElementById('diemLy').value;
    sv.diemHoa=document.getElementById('diemHoa').value;
    sv.diemRenLuyen=document.getElementById('diemRenLuyen').value;
    sv.loaiSinhVien=document.getElementById('loaiSinhVien').value;
    // console.log(sv);
    // kiem tra
    // trim(): loai bo khoang trong dau va cuoi cua chuoi
    var valid=true;
    /* 
    if(sv.maSinhVien.trim() ===''){
        // alert('Ma sinh vien khong duoc bo trong');
        document.getElementById('err_maSinhVien_ktRong').innerHTML='Khong duoc bo trong';
        document.getElementById('maSinhVien').focus();
        valid=false;
    } else{
        document.getElementById('err_maSinhVien_ktRong').innerHTML='';
    }

    if(sv.tenSinhVien.trim() ===''){
        // alert('Ma sinh vien khong duoc bo trong');
        document.getElementById('err_tenSinhVien_ktRong').innerHTML='Khong duoc bo trong';
        document.getElementById('tenSinhVien').focus();
        valid=false;
        
    } else{
        document.getElementById('err_tenSinhVien_ktRong').innerHTML='';
    }
    if(sv.email.trim() ===''){
        // alert('Ma sinh vien khong duoc bo trong');
        document.getElementById('err_email_ktRong').innerHTML='Khong duoc bo trong';
        valid=false;
        
    } else{
        document.getElementById('err_email_ktRong').innerHTML='';
    }
    if(sv.diemToan.trim() ===''){
        // alert('Ma sinh vien khong duoc bo trong');
        document.getElementById('err_diemToan_ktRong').innerHTML='Khong duoc bo trong';
        valid=false;
        
    } else{
        document.getElementById('err_diemToan_ktRong').innerHTML='';
    }
    if(sv.diemLy.trim() ===''){
        // alert('Ma sinh vien khong duoc bo trong');
        document.getElementById('err_diemLy_ktRong').innerHTML='Khong duoc bo trong';
        valid=false;
        
    } else{
        document.getElementById('err_diemLy_ktRong').innerHTML='';
    }
    if(sv.diemHoa.trim() ===''){
        // alert('Ma sinh vien khong duoc bo trong');
        document.getElementById('err_diemHoa_ktRong').innerHTML='Khong duoc bo trong';
        valid=false;
        
    } else{
        document.getElementById('err_diemHoa_ktRong').innerHTML='';
    }
    // kiem tra dinh dang
    var regex= /^[A-Z a-z 0-9]+$/;
    // var inputString ='fontcyberlearn';
    
    // console.log(regex.test(inputString));
    if(!regex.test(sv.tenSinhVien)){
        document.getElementById('err_tenSinhVien_allLetters').innerHTML = "Ten sinh vien phai nhap chu";
        valid = false;
    } else{
        document.getElementById('err_tenSinhVien_allLetters').innerHTML='';
    }
 */
    
    valid &= validate.kiemTraRong(sv.maSinhVien,'Mã sinh viên','#err_maSinhVien_ktRong')& 
    validate.kiemTraRong(sv.tenSinhVien,'Tên sinh viên','#err_tenSinhVien_ktRong')&
    validate.kiemTraRong(sv.email,'Email','#err_email_ktRong')&
    validate.kiemTraRong(sv.diemToan,'Điểm toán','#err_diemToan_ktRong')&
    validate.kiemTraRong(sv.diemLy,'Điểm lý','#err_diemLy_ktRong')&validate.kiemTraRong(sv.diemHoa,'Điểm hóa','#err_diemHoa_ktRong')&validate.kiemTraRong(sv.diemRenLuyen,'Điểm rèn luyện','#err_diemRenLuyen_ktRong');
    // kiem tra chu
    valid &= validate.kiemTraChu(sv.tenSinhVien,'Tên sinh viên','#err_tenSinhVien_allLetters');
    // kiemtra email
    valid &= validate.kiemTraEmail(sv.email,'Email','#err_email_format');
    // kiem tra so
    valid &= validate.kiemTraSo(sv.maSinhVien,'Mã sinh viên','#err_maSinhVien_allNumber')& 
    validate.kiemTraSo(sv.diemToan,'Điểm Toán','#err_diemToan_allNumber')&
    validate.kiemTraSo(sv.diemLy,'Điểm Lý','#err_diemLy_allNumber')&
    validate.kiemTraSo(sv.diemHoa,'Điểm Hóa','#err_diemHoa_allNumber')&
    validate.kiemTraSo(sv.diemRenLuyen,'Điểm rèn luyện','#err_diemRenLuyen_allNumber');
    // kiem tra do dai chuoi
    valid &= validate.kienTraDoDai(sv.maSinhVien, 'Mã sinh viên','#err_maSinhVien_maxMinLength',3,5)
    // kiem tra gia tri
    valid &= validate.kiemTraGiaTri(sv.diemToan,'Điểm Toán','#err_diemToan_maxMinValue',0,10)&
    validate.kiemTraGiaTri(sv.diemLy,'Điểm Lý','#err_diemLy_maxMinValue',0,10)&
    validate.kiemTraGiaTri(sv.diemHoa,'Điểm Hóa','#err_diemHoa_maxMinValue',0,10)&
    validate.kiemTraGiaTri(sv.diemRenLuyen,'Điểm rèn luyện','#err_diemRenLuyen_maxMinValue',0,10)

    if(!valid){
        return;
    }




    // 
    mangSinhVien.push(sv);


    // goi ham tao bang
    taoBang(mangSinhVien);
    luuLocalStorage();


    console.log(mangSinhVien);




    // // tao the td chua noi dung ng dung nnhap vao
    // var tdMaSinhVien= document.createElement('td');
    // tdMaSinhVien.innerHTML= sv.maSinhVien;
    // var tdTenSinhVien =document.createElement('td');
    // tdTenSinhVien.innerHTML= sv.tenSinhVien;
    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sv.email;

    // var tdLoaiSinhVien = document.createElement('td');
    // tdLoaiSinhVien.innerHTML = sv.loaiSinhVien;
    
    // var tdDiemTB = document.createElement('td');
    // tdDiemTB.innerHTML =sv.diemTrungBinh().toFixed(2);
    // var tdDiemRenLuyen = document.createElement('td');
    // tdDiemRenLuyen.innerHTML = sv.diemRenLuyen;
    // // tao nut chuc nang
    // var tdChucNang = document.createElement('td');

    // // nut xoa
    // var btnXoaSinhVien = document.createElement('button');
    // btnXoaSinhVien.className = 'btn btn-danger';
    // btnXoaSinhVien.innerHTML= 'Xóa';
    // btnXoaSinhVien.onclick= function(){
    //     // this dai dien cho btn
    //     this.parentElement.parentElement.remove();
    // }
    // // them vao tdchucnag
    // tdChucNang.appendChild(btnXoaSinhVien);



    // // tao tr
    // var trSinhVien= document.createElement('tr');
    // // them the td vao tr
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdEmail);
    // trSinhVien.appendChild(tdLoaiSinhVien);
    // trSinhVien.appendChild(tdDiemTB);
    // trSinhVien.appendChild(tdDiemRenLuyen);
    // trSinhVien.appendChild(tdChucNang);



    // // 
    // var tbodySinhVien = document.getElementById('tblSinhVien');
    // tbodySinhVien.appendChild(trSinhVien);
}

var taoBang = function(arrSinhVien){
    var contentTable = "";
    // duyet mag sv tao tr
    for(var i = 0; i<arrSinhVien.length ; i++){
        // moi lan duyet lay ra mot sv trong mang
        var sv = arrSinhVien[i];

        // Tạo đối tượng
        var sinhVien = new SinhVien(sv.maSinhVien,sv.tenSinhVien,sv.email,sv.diemToan,sv.diemLy,sv.diemHoa,sv.diemRenLuyen,sv.loaiSinhVien);
        // sinhVien.maSinhVien = sv.maSinhVien;
        // sinhVien.tenSinhVien = sv.tenSinhVien;
        // sinhVien.email = sv.email;
        // sinhVien.diemHoa = sv.diemHoa;
        // sinhVien.diemLy = sv.diemLy;
        // sinhVien.diemToan = sv.diemToan;
        // sinhVien.diemRenLuyen = sv.diemRenLuyen;
        // sinhVien.loaiSinhVien = sv.loaiSinhVien;
        // tao the tr + don vao noi dung contenttable
        contentTable += `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.diemTrungBinh().toFixed(2)}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td><button class="btn btn-primary" onclick="chinhSuaSinhVien('${sinhVien.maSinhVien}')">Chỉnh sửa</button></td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xoa</button></td>
            </tr>
        `
        // console.log(contentTable);
    }
    document.getElementById('tblSinhVien').innerHTML = contentTable;

}
// 
var chinhSuaSinhVien = function(masv){
    document.getElementById('maSinhVien').disabled=true; //khoa ma khi chinh sua
    document.getElementById('btnThemSinhVien').disabled=true; //khoa ma khi chinh sua
    // Tìm sinh vien
    for (var i = 0; i< mangSinhVien.length; i++){
        // gán thong tin lên
        var sv = mangSinhVien[i];
        // Kiểm tra từng sv neu bằng gán lên control
        if(sv.maSinhVien === masv){
            document.getElementById('maSinhVien').value = sv.maSinhVien;
            document.getElementById('tenSinhVien').value = sv.tenSinhVien;
            document.getElementById('email').value = sv.email;
            document.getElementById('diemToan').value = sv.diemToan;
            document.getElementById('diemLy').value = sv.diemLy;
            document.getElementById('diemHoa').value = sv.diemHoa;
            document.getElementById('diemRenLuyen').value = sv.diemRenLuyen;
            document.getElementById('loaiSinhVien').value = sv.loaiSinhVien;
        }
    }

}
// xây dựng cập nhật
document.getElementById('btnCapNhatSinhVien').onclick =function(){
    // Lấy thông tin mới
    var svUpdate = new SinhVien();
    svUpdate.maSinhVien = document.getElementById('maSinhVien').value;
    svUpdate.tenSinhVien = document.getElementById('tenSinhVien').value;
    svUpdate.email = document.getElementById('email').value;
    svUpdate.diemToan = document.getElementById('diemToan').value;
    svUpdate.diemLy = document.getElementById('diemLy').value;
    svUpdate.diemHoa = document.getElementById('diemHoa').value;
    svUpdate.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    svUpdate.loaiSinhVien = document.getElementById('loaiSinhVien').value;

    console.log(svUpdate);
    // Tim svUpdate co trùng vs maSV trong mảng => gán dữ liệu cho sv đó
    for(var i=0;i<mangSinhVien.length;i++){
        var sv = mangSinhVien[i];
        if(sv.maSinhVien === svUpdate.maSinhVien){
            sv.tenSinhVien = svUpdate.tenSinhVien;
            sv.email = svUpdate.email;
            sv.diemToan = svUpdate.diemToan;
            sv.diemLy = svUpdate.diemLy;
            sv.diemHoa = svUpdate.diemHoa;
            sv.diemRenLuyen = svUpdate.diemRenLuyen;
            sv.loaiSinhVien = svUpdate.loaiSinhVien;
        }
    }
    taoBang(mangSinhVien);
    luuLocalStorage();
    document.getElementById('maSinhVien').disabled=false;
    document.getElementById('btnThemSinhVien').disabled=false;
    var mangInput = document.querySelectorAll('input');
    for(var i = 0 ; i<mangInput.length;i++){
        var tagInput = mangInput[i];
        tagInput.value = '';
    }
}

//  
var xoaSinhVien = function(masv){
    alert(masv);
    for( var i = mangSinhVien.length -1; i>=0; i--){
        // moi lan duyet lay ra mot
        var sv = mangSinhVien[i];
        // kiem tra tung phan tu
        if(sv.maSinhVien === masv){
            mangSinhVien.splice(i,1); //ham xoa
        }
        // sau khi xoa tao lai bang = mang du lieu da xoa
    }
    taoBang(mangSinhVien);
    // luu vao local
    luuLocalStorage();

}

// 
var luuLocalStorage = function(){
    // các bc lưu trữ mảng sv xuống localstorage
    var sMangSinhVien = JSON.stringify(mangSinhVien); // chuyen thanh chuoi
    console.log(sMangSinhVien);
    localStorage.setItem('mangSinhVien',sMangSinhVien);
}

var layDuLieuLocalStorage = function(){
    if(localStorage.getItem('mangSinhVien')){
        // Lấy dữ liệu localstorage (Dữ liệu dạng chuổi)
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        // chuyển sang du liệu sang mảng va gán vào mảng SV
        mangSinhVien = JSON.parse(sMangSinhVien); 
        
        // Tạo bảng => tạo Html
        taoBang(mangSinhVien);

    }
}
// Gọi hàm khi load lại trình duyet
layDuLieuLocalStorage();