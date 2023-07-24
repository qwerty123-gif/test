//Khởi tạo các biến để lấy giá trị từ các thẻ được gắn class vào ở bên html
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

//Khi nút bấm giỏ hàng được kích hoạt vào thì sẽ xảy ra sự kiện thêm sản phẩm vào giỏ hàng
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
//Khi nút bấm xóa giỏ hàng thì sản phẩm sẽ bị xóa ra khỏi giỏ hàng
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

//list các danh sách sản phẩm được hiển thị lên trên trang web
let products = [
    {
        id: 1,
        name: 'GÀ NƯỚNG HUN KHÓI',
        image: '1 (2).PNG',
        price: 120000
    },
    {
        id: 2,
        name: 'ĐÙI GÀ NƯỚNG CAY',
        image: '2 (2).PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'SALAD CÁ HỒI NAUY ÁP CHẢO',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'SÚP BÍ',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'SALAD',
        image: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'PIZZA MARGHERITA',
        image: '6.PNG',
        price: 128000
    }
];

//Lấy các giá trị từ các trường mà mình đã khai báo ở bên trên
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        //Khởi tạo thành phần lấy từng giá trị của sản phẩm vào từng div (từng ô đồ ăn)
        let newDiv = document.createElement('div');
        //Thêm sản phẩm được lấy tía trị vào div
        newDiv.classList.add('item');
        //Lấy các giá trị như image, title và price từ dữ liệu
        newDiv.innerHTML = `
            <img src="/image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">THÊM VÀO GIỎ HÀNG</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
//Chức năng thanh giỏ hàng
function reloadCard(){
    listCard.innerHTML = '';
    //Đếm các sản phẩm trong giỏ hàng
    let count = 0;
    //Tính tổng các sản phẩm trong giỏ hàng
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            //Lấy các sản phẩm mà mình đã bấm thêm vào giỏ hàng vào trong phần thanh giỏ hàng
            newDiv.innerHTML = `
                <div><img src="/./../image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
//Thay đổi số lượng sản phẩm trong giỏ hàng
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}