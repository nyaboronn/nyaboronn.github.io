
let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];

(function() {
    setRandomLinkColor();
    setColorHoverListener();
    setSwitchEventListener();

    setInterval(() => {
    setRandomLinkColor();
    }, 5000);
})();


/* Colors */

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
    Array.from(document.getElementsByTagName("a")).forEach(e => {
       e.style.color = getRandomColor();
       //e.style.classList.add("")
    });
}

function setColorHoverListener() {
    Array.from(document.querySelectorAll("a, button")).forEach(e => {
        e.addEventListener("mouseover", setRandomLinkColor);
    });
}


/* Switch options */

function setSwitchEventListener() {
    Array.from(document.getElementsByTagName("button")).forEach(e => {
        e.addEventListener("click", textSwitch);
    });
}

function textSwitch(e) {
    let option = e.target;
    let color = getRandomColor();

    Array.from(document.getElementsByTagName("button")).forEach(butt => {
        butt.style.borderColor = "#96979c";
        butt.style.color = "#96979c";
    });
    Array.from(document.getElementsByClassName("option-text")).forEach(e => {
        e.classList.remove("show");
    });

    option.style.cssText = `border-color: ${color}; color: ${color};`;
    Array.from(document.getElementsByClassName(option.id)).forEach(e => {
        e.classList.add("show");
    });
}