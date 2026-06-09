let isUrdu = false;

function toggleLanguage() {
    const title = document.getElementById("hero-title");
    const button = document.querySelector(".language-btn");

    if (isUrdu === false) {
        title.innerText = "پاکستان کے لیے محفوظ اور خودکار ادائیگیوں کا جدید نظام";
        button.innerText = "English";
        document.body.style.direction = "rtl";
        isUrdu = true;
    } else {
        title.innerText = "Secure Recurring Payments for a Digital Pakistan.";
        button.innerText = "اردو";
        document.body.style.direction = "ltr";
        isUrdu = false;
    }
}