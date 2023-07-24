//Khởi tạo các biến để lấy giá trị từ các thẻ html đã được gắn id
let items = document.querySelectorAll('.slider .item');
let active = 3;
//Khởi tạo hiệu ứng trước và sau khi chuyển trang
function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    // show after
    let stt = 0;
    //Khởi tạo hiệu ứng các trang sau (bên phải)
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        //set thuộc tính style cho từng đối tượng như transform, zIndex, filter, opacity
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
     stt = 0;
     //Khởi tạo hiệu ứng các trang trước (bên trái)
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        //set thuộc tính style cho từng đối tượng như transform, zIndex, filter, opacity
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
//Khởi tạo sự kiện cho 2 nút bấm chuyển trang trước và sau
loadShow(); 
//Khởi tạo các biến để lấy giá trị từ các thẻ html đã được gắn các id
let next = document.getElementById('next');
let prev = document.getElementById('prev');
//Khởi tạo giá trị cho biến chuyển trang trước
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
//Khởi tạo giá trị cho biến chuyển về trang sau
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}