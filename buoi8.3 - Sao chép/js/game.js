//Khởi tạo biến để lấy các giá trị từ các thẻ bên html đã được gắn class
let items = document.querySelectorAll('.item');
console.log(items);
items.forEach(item => {
    //Khi cho con trỏ chuột vào thì sẽ xảy ra sự kiện hành động đó chính là quay theo hướng mà con trỏ chuột đi quay bao nhiêu độ
    item.addEventListener('mousemove', (e)=>{
        let positionPx = e.x - item.getBoundingClientRect().left;
        let positionX = (positionPx / item.offsetWidth) * 100;
        console.log(positionX, positionPx);

        let positionPy = event.y - item.getBoundingClientRect().top;
        let positionY = (positionPy / item.offsetHeight) * 100;

        
        item.style.setProperty('--rX', (0.5)*(50 - positionY) + 'deg');
        item.style.setProperty('--rY', -(0.5)*(50 - positionX) + 'deg');
    })
    //Khi cho con trỏ chuột ra ngoài thì div đó sẽ về trạng thái ban đầu là x=0 độ, y= độ
    item.addEventListener('mouseout', ()=>{
        item.style.setProperty('--rX', '0deg');
        item.style.setProperty('--rY', '0deg');
    })
})