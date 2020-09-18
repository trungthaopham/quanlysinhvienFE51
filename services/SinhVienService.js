var SinhVienServices = function(){
    // Phuong thuc giao tiep Backend qua api => lay thong tin sinh vien tu server ve
    this.layDanhSachSinhVien = function(){
        var promise = axios({
            url:'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', // duong dan BE cung cap
            method: 'GET' // giao thức phía backend
        })
        return promise;
    }
    this.xoaSinhVien = function (maSinhVien){
        var promise = axios({
            url:`http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`, // duong dan BE cung cap
            method: 'DELETE' // giao thức phía backend
        })
        return promise;
    }
    this.layThongTinSinhVien = function (maSinhVien){
        var promise = axios({
            url:`http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSinhVien}`, // duong dan BE cung cap
            method: 'GET' // giao thức phía backend
        })
        return promise;
    }
    this.capNhatSinhVien = function (maSinhVien,sinhVienUpdate){
        var promise = axios({
            url:`http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${maSinhVien}`, // duong dan BE cung cap
            method: 'PUT', // giao thức phía backend
            data:sinhVienUpdate
        })
        return promise;
    }
}