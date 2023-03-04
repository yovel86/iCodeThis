const inputs = document.querySelectorAll('.code-input input');
const code = document.querySelector('.code p');
const copyAlert = document.querySelector('.copy-alert');
const generateBtn = document.querySelector('.generate-btn');

code.addEventListener('click', () => {
    navigator.clipboard.writeText(code.textContent);
    copyAlert.textContent = 'Code copied';
    copyAlert.style.display = 'block';
    setTimeout(() => {
        copyAlert.style.display = 'none';
    }, 3000);
});

inputs.forEach(input => {
    input.addEventListener('paste', () => {
        navigator.clipboard.readText().then(c => {
            let code = c.split('');
            for (let i = 0; i < code.length; i++) {
                inputs[i].value = code[i];
            }
        });
    });
});

generateBtn.addEventListener('click', () => {
    clearTimeout();
    const generatedCode = Math.floor(1000 + Math.random() * 9000);
    code.textContent = generatedCode;
    copyAlert.textContent = 'OTP Generated';
    copyAlert.style.display = 'block';
    setTimeout(() => {
        copyAlert.style.display = 'none';
    }, 3000);
});

