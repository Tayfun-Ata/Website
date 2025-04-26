document.querySelectorAll('.image-container img').forEach((img, index) => {
    img.style.setProperty('--index', index); 
    img.style.animationDelay = `0s`; 
});

document.getElementById('button1').addEventListener('click', () => {
    window.location.href = './page2_button1.html'; 
});

document.getElementById('button2').addEventListener('click', () => {
    window.location.href = './page2_button2.html'; 
});

document.getElementById('button3').addEventListener('click', () => {
    window.location.href = './page2_button3.html'; 
});

document.getElementById('button4').addEventListener('click', () => {
    window.location.href = './page2_button4.html'; 
});

document.getElementById('button5').addEventListener('click', () => {
    window.location.href = './page2_button5.html'; 
});
