function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.getElementById("dynamic-paragraph");

    const sentence = "Subhakar Maurya";
    const words = sentence.split(" ");
    let index = 0;

    const updateWord = () => {
        paragraph.textContent = words[index];
        index = (index + 1) % words.length; // Loop back to the first word
    };

    // Display the first word and update every 1 second
    updateWord();
    setInterval(updateWord, 2000);
});


document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});


setInterval(() => {
    const devtools = /./;
    devtools.toString = () => 'devtools';
    console.log('%c ', devtools, 'color: red; font-size: 20px;');
}, 1000);


