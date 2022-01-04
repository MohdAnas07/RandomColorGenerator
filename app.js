const body = document.body;
const btn = document.querySelector('.container button');
const heading = document.querySelector('.container h1');


function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
}

btn.addEventListener("click", (e) => {
    const color = randomColor();
    // console.log(color);
    body.style.backgroundColor = color;
    heading.textContent = `Current Color : ${color}`
})