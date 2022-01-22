let button_color = "#FFAA00";
let button_default = "#ffffff";

(function() {
    setSwitchEventListener();
})();

window.onload = function() {
    document.getElementById("projects").style.cssText = `border-color: ${button_color}; color: ${button_color};`;
};

/* Switch options */
function setSwitchEventListener() {
    Array.from(document.getElementsByTagName("button")).forEach(e => {
        e.addEventListener("click", textSwitch);
    });
}

function textSwitch(e) {
    let option = e.target;
    let color = button_color;

    // set buttons colors 
    Array.from(document.getElementsByTagName("button")).forEach(butt => {
        butt.style.borderColor = button_default;
        butt.style.color = button_default;
    });
    
    option.style.cssText = `border-color: ${color}; color: ${color};`;

    // hidde div and show the selected option
    Array.from(document.getElementsByClassName("ver")).forEach(e => {
        e.classList.remove("ver");
        e.classList.add("esconder");
    });

    let div_name = option.id + '_d'

    document.getElementById(div_name).classList.remove("esconder")
    document.getElementById(div_name).classList.add("ver")
}