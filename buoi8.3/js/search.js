//Khởi tạo chức năng tìm kiếm
function searchfunc(){
  //Khởi tạo các biến để lấy các giá trị nhập vào từ các thẻ html đã được gắn id 
    let menusearch= document.querySelector('#menu__search');
    let menuitems= Array.from (document.querySelectorAll('.menu__item'));
    //Chuyển các chữ cái in hoa về in thường mà người dùng nhập vào
    menusearch.value=menusearch.value.toLowerCase();
    //Tìm kiếm các nội dung có chữ cái tương tự như người dùng nhập vào bên ô html
    menuitems.forEach(function(el){
      let text=el.innerText;
      if(text.indexOf(menusearch.value)>-1)
      el.style.display="";
      else el.style.display="none";
    })
  }