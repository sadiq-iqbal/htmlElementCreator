let buttons = document.querySelectorAll('button');
let main = document.querySelector('.main');
let selected;
console.log(buttons)

Array.from(buttons).forEach((button) => {
    if (button.disabled === true) {
        button.disabled = false
    }
    button.addEventListener('click', (e) => {
        Array.from(buttons).forEach(button => {
            if (button.disabled === true) {
                button.disabled = false;
            }
        })
        e.target.disabled = true;
        e.target.tagName;
        createElement(e.target.innerText.toString().toLowerCase());

    })
})
function createElement(tagName) {
    let ele = document.createElement(tagName);
    let eleText = document.createTextNode(`hello from ${tagName}`)
    ele.append(eleText);
    document.body.append(ele);

}