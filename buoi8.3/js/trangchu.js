//Khởi tạo các biến để lấy giá trị từ các thẻ html đã được gắn class
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
//Khởi tạo chúc năng bấm vào chuyển sang các trang sau
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
//Khởi tạo chức năng bấm vào chuyển sang các trang trước
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
//Khởi tạo chức năng cập nhật slider về trạng và trang đầu
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // khởi tạo chức năng khi bấm vào các chấm tròn sẽ chuyển đến hình ảnh của trang chấm tròn đó
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

