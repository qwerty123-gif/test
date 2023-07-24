//Một form đăng ký sẽ bao gồm 3 thành phần chính là: ô email(username) + ô password + nút button đăng ký. Vì vậy chúng ta sẽ khai báo cho mỗi thành phần một biến để lấy giá trị
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

//Tiến hành code chức năng chính
//Sự kiện khi bấm vào nút đăng ký
btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
//Nếu để trống 1 trong 2 ô username và password thì sẽ hiện lên thông báo "Vui lòng không để trống"
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  )
  {
  alert("Vui lòng không để trống");
//Nếu 2 ô username và password đã có giá trị nhập vào thì hiện lên thông báo "Đăng ký thành công" và sau đó lưu dữ liệu vào localstorage
  } 
  else {
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
//Vì dữ liệu lưu vào local storage dạng object nên phải dùng JSON.stringify
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
//Sau khi đăng ký thành công thì chuyển sang trang đăng nhập
    window.location.href = "login.html";
  }
});