////Một form đăng nhập sẽ bao gồm 3 thành phần chính là: ô email(username) + ô password + nút button đăng ký. Vì vậy chúng ta sẽ khai báo cho mỗi thành phần một biến để lấy giá trị
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");
const login__container = document.querySelector('.login__container');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
//Tiến hành code chức năng chính
//Sự kiện khi bấm vào nút đăng nhập
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
//Nếu để trống cả 2 ô username và password thì sẽ hiện lên thông báo "Vui lòng không để trống"
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
//Nếu đã nhập dữ liệu vào cả 2 ô username và password thì sẽ tiếp tục lấy dữ liệu từ trong localstorage mà mình vừa lưu lúc đăng ký ra
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
//Nếu cả 2 ô username và password trùng dữ liệu trong local storage thì sẽ hiện lên thông báo "Đăng nhập thành công và tự động nhảy sang trang chủ"
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "index.html";
//Nếu cả 2 ô username và password không trùng dữ liệu trong local storage thì sẽ hiện lên thông báo "Đăng nhập thất bại"
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});
btnPopup.addEventListener('click',()=>{
  login__container.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
  login__container.classList.remove('active-popup');
});
