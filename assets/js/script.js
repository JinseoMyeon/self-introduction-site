const text = document.getElementById("accent-description")

const letters = [
    "개발자",
    "디자이너",
    "학생",
];

const speed = 150;
let i = 0;

const typing = async() => {
    const letter = letters[i].split("");

    while (letter.length > 0) {
        await wait(speed);
        text.innerHTML += letter.shift();
    }

    await wait(3000);

    remove();
}

const remove = async() => {
    const letter = letters[i].split("");

    while (letter.length > 0) {
        await wait(speed);
        letter.pop();
        text.innerHTML = letter.join("");
    }

    if (i === letters.length - 1) {
        i = 0;
    } else {
        i++;
    }

    typing();
}

function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

setTimeout(remove, 3000);