const botao = document.getElementById('fugir-botao');

botao.addEventListener('click', () => {

    const posicaox = Math.random() * (window.innerWidth - botao.offsetWidth);
    const posicaoy = Math.random() * (window.innerHeight - botao.offsetHeight);

    botao.style.position = 'absolute';
    botao.style.left = `${posicaox}px`;
    botao.style.top = `${posicaoy}px`;
});