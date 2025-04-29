// اختصار للوصول السريع للعناصر
const SE = (selector) => document.querySelector(selector);

// الثوابت العامة
const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

// عناصر DOM الثابتة
const time = SE(".time");
const sec = SE(".sec");
const type = SE(".AMPM");
const date = SE(".date");
const btn = SE(".btn");
const tog = SE(".tog");
const checkbox = SE("#checkbox");

// إعداد زر التبديل
btn.addEventListener("click", () => {
    tog.classList.toggle("show");
});

// حفظ حالة checkbox عند التغيير
checkbox.addEventListener("change", () => {
    localStorage.setItem("val", checkbox.checked.toString());
});

// تحديث الوقت على الشاشة
function updateTime() {
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const isPM = h >= 12;

    const val = localStorage.getItem("val");

    if (val === "true") {
        checkbox.checked = true;
        time.innerHTML = `${h} : ${String(m).padStart(2, "0")}`;
    } else {
        checkbox.checked = false;
        h = h % 12 || 12;
        time.innerHTML = `${String(h).padStart(2, "0")} : ${String(m).padStart(2, "0")}`;
    }

    sec.innerHTML = String(s).padStart(2, "0");
    type.innerHTML = isPM ? "PM" : "AM";
    date.innerHTML = `${Months[now.getMonth()]}, ${Days[now.getDay()]} ${now.getDate()}`;
}

// تشغيل التحديث كل ثانية
setInterval(updateTime, 1000);
updateTime();
