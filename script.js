// Эффект печатающегося текста
const text = "студентка";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}
typeWriter();

// Кнопка мотивации
document.getElementById("motivateBtn").addEventListener("click", function() {
    const messages = [
        "Ты уже прошла большой путь!",
        "Ошибки — это топливо для роста",
        "Каждый эксперт был новичком",
        "У тебя получится! Я верю 💜"
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerHTML = randomMsg;
});