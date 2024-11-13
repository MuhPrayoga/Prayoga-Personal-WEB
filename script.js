AOS.init({
    duration: 800,          // Durasi animasi dalam milidetik (0.8 detik)
    easing: 'ease-in-out',  // Efek easing yang halus
    once: false,            // Animasi diputar setiap kali elemen muncul
    mirror: true,           // Memungkinkan animasi berfungsi saat scroll ke atas
    offset: 100             // Mulai animasi saat elemen lebih dekat ke viewport
});

document.querySelectorAll(".drawer__content a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("drawer-checkbox").checked = false;
    });
});

document.getElementById("refreshLink").addEventListener("click", function(event) {
    event.preventDefault();  // Mencegah scroll otomatis ke #home
    window.location.href = "#home"; // Mengarah ke #home
    window.location.reload();  // Me-refresh halaman
});
