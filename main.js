const toggleButton = document.getElementById("botton1");
const toggleContent = document.getElementById("btn1");

if (toggleContent) {
    toggleContent.style.display = "none";
}

if (toggleButton) {
    toggleButton.addEventListener('click', function() {
        if (toggleContent.style.display === "none") {
            toggleContent.style.display = "block";
            toggleButton.textContent = "إخفاء المزايا (عرض أقل) ▲";
            toggleButton.classList.add('is-open');
        } else {
            toggleContent.style.display = "none";
            toggleButton.textContent = "لماذا نحن خيارك الصحيح؟ (عرض المزيد) ▼";
            toggleButton.classList.remove('is-open');
        }
    });
}
