

let button_color = "#FFAA00";
let button_default = "#222222";

(function() {
    setSwitchEventListener();
})();

/* Switch options */

function setSwitchEventListener() {
    Array.from(document.getElementsByTagName("button")).forEach(e => {
        e.addEventListener("click", textSwitch);
    });
}

function textSwitch(e) {
    let option = e.target;
    let color = button_color;

    Array.from(document.getElementsByTagName("button")).forEach(butt => {
        butt.style.borderColor = button_default;
        butt.style.color = button_default;
    });

    Array.from(document.getElementsByClassName("option-text")).forEach(e => {
        e.classList.remove("show");
    });

    option.style.cssText = `border-color: ${color}; color: ${color};`;
    Array.from(document.getElementsByClassName(option.id)).forEach(e => {
        e.classList.add("show");
    });
}