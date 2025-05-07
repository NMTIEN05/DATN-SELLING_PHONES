function updateTimer() {
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  let hours = parseInt(hoursEl.textContent);
  let minutes = parseInt(minutesEl.textContent);
  let seconds = parseInt(secondsEl.textContent);

  // Giảm 1 giây
  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;

    if (minutes < 0) {
      minutes = 59;
      hours--;

      if (hours < 0) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        clearInterval(timerInterval); // Dừng khi hết thời gian
      }
    }
  }

  // Cập nhật lại DOM
  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');
}

// Cập nhật mỗi giây
const timerInterval = setInterval(updateTimer, 1000);


// Cập nhật đồng hồ mỗi giây
setInterval(updateTimer, 1000);
// Lắng nghe sự kiện click trên nút "Xem tất cả"
// Lắng nghe sự kiện click trên nút "Xem tất cả"
// Lắng nghe sự kiện click trên nút "Xem tất cả"
// Lắng nghe sự kiện click trên nút "Xem tất cả"
document.querySelectorAll('.showAllBtn').forEach((button, index) => {
    button.addEventListener('click', function() {
      const row = button.closest('.product-row'); // Tìm product-row chứa nút này
      const hiddenProducts = row.querySelectorAll('.container-product .product-card:nth-child(n+6)');
      
      // Hiển thị các sản phẩm từ thứ 6 trở đi trong dòng này
      hiddenProducts.forEach(product => product.style.display = 'block');
      
      // Ẩn nút "Xem tất cả" và hiển thị nút "Thu gọn"
      button.style.display = 'none';
      row.querySelector('.collapseBtn').style.display = 'inline-block';
    });
  });
  
  document.querySelectorAll('.collapseBtn').forEach((button, index) => {
    button.addEventListener('click', function() {
      const row = button.closest('.product-row'); // Tìm product-row chứa nút này
      const allProducts = row.querySelectorAll('.container-product .product-card');
      
      // Ẩn các sản phẩm từ thứ 6 trở đi trong dòng này
      allProducts.forEach((product, i) => {
        if (i >= 5) {
          product.style.display = 'none';
        }
      });
      
      // Đảm bảo 5 sản phẩm đầu tiên vẫn hiển thị
      for (let i = 0; i < 5; i++) {
        allProducts[i].style.display = 'block';
      }
      
      // Ẩn nút "Thu gọn" và hiển thị lại nút "Xem tất cả"
      button.style.display = 'none';
      row.querySelector('.showAllBtn').style.display = 'inline-block';
    });
  });
  // banner
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function changeSlide(n) {
    currentIndex = (currentIndex + n + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function autoSlide() {
    changeSlide(1);
  }

  // Tự động chạy mỗi 1.5 giây
  setInterval(autoSlide, 2000);



  // user
   // Lấy phần tử modal và button
   const modal = document.getElementById('modal');
   const userButton = document.getElementById('userButton');
   const closeModalButton = document.getElementById('closeModal');

   // Mở modal khi click vào nút "Tài khoản"
   userButton.addEventListener('click', (event) => {
       event.preventDefault();  // Ngăn chặn hành động mặc định của liên kết
       modal.style.display = 'flex';
   });

   // Đóng modal khi click vào nút Đóng
   closeModalButton.addEventListener('click', () => {
       modal.style.display = 'none';
   });

   // Bạn có thể thêm các sự kiện cho nút Đăng nhập và Đăng ký nếu cần
   document.getElementById('loginButton').addEventListener('click', () => {
       alert('Chuyển đến trang đăng nhập');
       modal.style.display = 'none';
   });

   document.getElementById('registerButton').addEventListener('click', () => {
       alert('Chuyển đến trang đăng ký');
       modal.style.display = 'none';
   });

