function animate() {
    const logo = document.querySelector('.header__logo');
    let logoAnimation;

    logoAnimation = logo.animate([
        {transform: 'translateY(0)',
         filter: 'opacity(100%)'
        },
        {transform: 'translateY(5px)',
         filter: 'opacity(40%)'
        },
        {transform: 'translateY(-5px)',
         filter: 'opacity(70%)'
        },
        {transform: 'translateY(0)',
         filter: 'opacity(100%)'
        },
    ], {
        duration: 2000,
        iterations: Infinity
    });

    logo.addEventListener('click', () => {
        if(logoAnimation.playState === 'running') {
            logoAnimation.pause();
        } else if (logoAnimation.playState === 'paused') {
            logoAnimation.play();
        } else {
            logoAnimation.pause();
        }
    });
}

export default animate;