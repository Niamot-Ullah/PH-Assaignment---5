let colors = ["silver", "lightblue", "lightgreen", "lightpurple"];
let color = 0;
document.getElementById('colorTelesMati').addEventListener('click',function(){
    document.body.style.backgroundColor = colors[color];
    color = (color+1) % colors.length;
})