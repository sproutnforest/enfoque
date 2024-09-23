
const choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener("click", ({ target }) => {
        const bgUrl = target.src; // Ambil URL dari src
        document.body.style.backgroundImage = `url('${bgUrl}')`;
    });
});
