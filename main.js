const SE = (selector) => document.querySelector(selector)
function updatetime() {
    let Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let Mounth = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"]
    let [time, sec, type, date] = [SE(".time"), SE(".sec"), SE(".AMPM"), SE(".date")]
    let now = new Date();
    let [h, m, s, btn, tog, CX] =
        [now.getHours(), now.getMinutes(), now.getSeconds()
            , SE(".btn"), SE(".tog"), SE("#checkbox")]
    const isPM = h >= 12;
    btn.addEventListener("click", () => {
        tog.classList.toggle("show");
    });
    CX.addEventListener("change", () => {
        localStorage.setItem("val", CX.checked.toString());
    });

    let val = localStorage.getItem("val")
    if (val === "true") {
        time.innerHTML = `${h} : ${String(m).padStart(2, "0")}`
        CX.checked = true;
    } else if (val === "false") {
        h = h % 12 || 12;
        time.innerHTML = `${String(h).padStart(2, "0")} : ${String(m).padStart(2, "0")}`
        CX.checked = false;
    }

    sec.innerHTML = String(s).padStart(2, "0")
    type.innerHTML = isPM ? "PM" : "AM"
    date.innerHTML = `${Mounth[now.getMonth()]}, ${Days[now.getDay()]} ${now.getDate()}`
}
setInterval(updatetime, 1000)
updatetime()
// /////////////////////////////
