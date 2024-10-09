const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

// وقتی کاربر روی دکمه کلیک می‌کند، مدال باز می‌شود
btn.onclick = function() {
    modal.style.display = "block";
}

// وقتی کاربر روی دکمه بسته کلیک می‌کند، مدال بسته می‌شود
span.onclick = function() {
    modal.style.display = "none";
}

// وقتی کاربر خارج از مدال کلیک می‌کند، مدال بسته می‌شود
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// ارسال فرم (به صورت نمونه)
document.querySelector('form').onsubmit = function(event) {
    event.preventDefault(); // جلوگیری از ارسال فرم
    const email = document.getElementById("email").value;
    modal.style.display = "none"; // بستن مدال بعد از ارسال
};