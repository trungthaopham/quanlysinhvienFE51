var Validation = function(){
    this.kiemTraRong = function (value,name,selectorError){
        if(value.trim()===''){
            document.querySelector(selectorError).innerHTML= `${name} không hợp lệ!`;
            return false;
        }
        document.querySelector(selectorError).innerHTML =``;
        return true;
    }
    this.kiemTraChu =function(value,name,selectorError){
        var regexAllLetters = /^[a-z A-Z]+$/;
        if(regexAllLetters.test(value)){
            document.querySelector(selectorError).innerHTML='';
            return true;
        }
        document.querySelector(selectorError).innerHTML=`${name} phải là chữ!`;
        return false;
    }
    this.kiemTraEmail = function(value,name,selectorError){
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(value)){
            document.querySelector(selectorError).innerHTML='';
            return true;
        }
        document.querySelector(selectorError).innerHTML=`${name} không hợp lệ!`;
        return false;
    }
    this.kiemTraSo =function(value,name,selectorError){
        var regexAllNumber = /^[0-9]+$/;
        if(regexAllNumber.test(value)){
            document.querySelector(selectorError).innerHTML='';
            return true;
        }
        document.querySelector(selectorError).innerHTML=`${name} phải là số!`;
        return false;
    }
    
    this.kienTraDoDai = function(value,name,selectorError,minlength,maxlength){
        if(value.trim().length > maxlength || value.trim().length < minlength){
            document.querySelector(selectorError).innerHTML=`${name} từ ${minlength} đến ${maxlength} ký tự!`;
            return false;
        }
        document.querySelector(selectorError).innerHTML='';
        return true;
    }
    this.kiemTraGiaTri = function(value,name,selectorError,minvalue,maxvalue){
        if(Number(value)> maxvalue || Number(value)< minvalue){
            document.querySelector(selectorError).innerHTML = `${name} từ ${minvalue} đến ${maxvalue}!`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
}