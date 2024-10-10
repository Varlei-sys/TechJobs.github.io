/*Destaca a seção ativa no menu*/
    const menuLinks = document.querySelectorAll('nav a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });