# thangkeky-salem.github.io
wedding-website/
│
├── index.html
├── css/
│   ├── style.css
│   ├── pink.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── scrollIt.min.js
├── images/
│   ├── anh1.jpg
│   ├── chure.jpg
│   ├── codau.jpg
│   ├── ...
├── audio/
│   └── Maimaibennhau-NooPhuocThinh.mp3
└── README.md
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wedding Invitation</title>

  <!-- CSS -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/pink.css">
  <link rel="stylesheet" href="css/responsive.css">

  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <!-- JS -->
  <script src="js/main.js" defer></script>

  <!-- Bootstrap Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="logo"><a href="index.html">HA</a></div>
    <nav class="nav">
      <ul>
        <li><a href="#home" class="active">Home</a></li>
        <li><a href="#couple">Cô dâu & Chú rể</a></li>
        <li><a href="#event">Sự kiện</a></li>
        <li><a href="#gallery">Album ảnh cưới</a></li>
        <li><a href="#rsvp">Tham gia</a></li>
        <li><a href="#gifts">Mừng cưới</a></li>
      </ul>
    </nav>
  </header>

  <!-- Home -->
  <section id="home">
    <h1>Nguyễn Hữu Hậu & Tạ Dương Ánh</h1>
    <p>Ngày 18/09/2024</p>
  </section>

  <!-- Couple -->
  <section id="couple">
    <h2>Cô dâu & Chú rể</h2>
    <!-- Thêm ảnh và thông tin -->
  </section>

  <!-- Event -->
  <section id="event">
    <h2>Sự kiện</h2>
    <!-- Thông tin sự kiện -->
  </section>

  <!-- Gallery -->
  <section id="gallery">
    <h2>Album ảnh cưới</h2>
    <!-- Gallery -->
  </section>

  <!-- RSVP -->
  <section id="rsvp">
    <h2>Xác nhận tham dự</h2>
    <form id="myForm">
      <input type="text" name="fullname" placeholder="Họ và tên" required>
      <input type="text" name="phone" placeholder="Số điện thoại" required>
      <button type="submit">Gửi</button>
    </form>
    <div id="responseMessage"></div>
  </section>

  <!-- Gifts -->
  <section id="gifts">
    <h2>Mừng cưới</h2>
    <p>Thông tin tài khoản ngân hàng, QR code...</p>
  </section>

  <!-- Footer -->
  <footer>
    <p>©2024 Designed by Hau & Anh</p>
  </footer>

  <!-- Audio -->
  <audio id="myAudio" loop src="audio/Maimaibennhau-NooPhuocThinh.mp3"></audio>
  <i class="bi-music-note-beamed pause"></i>
</body>
</html>
# Wedding Website 💒

Website thiệp cưới online (HTML/CSS/JS).

## Cấu trúc
- `index.html`: trang chính
- `css/`: chứa file CSS
- `js/`: chứa file JS
- `images/`: chứa ảnh
- `audio/`: nhạc nền

## Cách chạy
Chỉ cần mở file `index.html` trên trình duyệt.

