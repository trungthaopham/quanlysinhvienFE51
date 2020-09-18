<<<<<<< HEAD
var SinhVien = function(masv,tensv,email,diemtoan,diemly,diemhoa,diemrenluyen,loaisv){
    this.maSinhVien=masv;
    this.tenSinhVien=tensv;
    this.email=email;
    this.diemToan=diemtoan;
    this.diemLy=diemly;
    this.diemHoa=diemhoa;
    this.diemRenLuyen=diemrenluyen;
    this.loaiSinhVien=loaisv;
    this.xeploai = function(){
        return "yếu";
    }
    this.diemTrungBinh= function(){
        return((Number(this.diemToan)+Number(this.diemLy)+Number(this.diemHoa))/3);
    }    

}
=======
var SinhVien = function (
  masv,
  tensv,
  email,
  diemtoan,
  diemly,
  diemhoa,
  diemrenluyen,
  loaisv
) {
  this.maSinhVien = masv;
  this.tenSinhVien = tensv;
  this.email = email;
  this.diemToan = diemtoan;
  this.diemLy = diemly;
  this.diemHoa = diemhoa;
  this.diemRenLuyen = diemrenluyen;
  this.loaiSinhVien = loaisv;
  this.diemTrungBinh = function () {
    return (
      (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3
    );
  };
  this.xepLoai = function () {
    return "trung binh";
  };
};
>>>>>>> ffc86b1f46eba32b12eafb2b38a5d5a9e22ff23a
