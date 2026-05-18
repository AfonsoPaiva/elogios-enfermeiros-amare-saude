(function () {
    'use strict';

    
    function q(sel, scope) { return (scope || document).querySelector(sel); }
    function qa(sel, scope) { return [...(scope || document).querySelectorAll(sel)]; }

    gsap.defaults({ ease: 'power2.out', duration: 0.55 });

    function animLanding() {
        const page = q('.landing');
        if (!page) return;

        // A opacidade inicial já começa a 0 no CSS! No JS definimos apenas a transformação inicial
        gsap.set('.landing .date', { y: -20 });
        gsap.set('.landing h1', { y: 20 });
        gsap.set('.landing .subtitle', { y: 20 });
        gsap.set('.landing .btn-continue', { scale: 0.95, y: 10 });
        gsap.set('.landing .illustration', { y: 30 });

        const tl = gsap.timeline();
        tl.to('.landing .date', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform' })
          .to('.landing h1', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform' }, '-=0.45')
          .to('.landing .subtitle', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform' }, '-=0.45')
          .to('.landing .btn-continue', { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform' }, '-=0.4')
          .to('.landing .illustration', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform' }, '-=0.4');
    }

    function animHome() {
        const page = q('.home');
        if (!page) return;
        
        gsap.set('.home .header', { y: -30 });
        gsap.set('.home .content', { y: 40 });
        
        const tl = gsap.timeline();
        tl.to('.home .header', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform' })
          .to('.home .content', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', clearProps: 'transform' }, '-=0.35');
    }

    function animGenericPage(className) {
        const page = q(className);
        if (!page) return;

        const header = q(className + ' .header-title') || q(className + ' .profile-circle-outer');
        const panel = q(className + ' .content-panel');

        // Determinar a direção de y para o header
        // Se for o círculo de perfil (profile-circle-outer), surge de baixo (y positivo)
        const isProfileCircle = header && header.classList.contains('profile-circle-outer');

        const tl = gsap.timeline();
        if (isProfileCircle && header && panel) {
            // Se for a página de elogio (profile circle), animamos ambos juntos como um único bloco
            gsap.set([header, panel], { y: 50 });
            tl.to([header, panel], { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out', clearProps: 'transform' });
        } else {
            // Caso contrário (outras páginas genéricas), animamos em cascata para um visual dinâmico
            const headerStartY = header ? -20 : 0;
            gsap.set(header, { y: headerStartY });
            gsap.set(panel, { y: 40 });
            if (header) tl.to(header, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform' });
            if (panel) tl.to(panel, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', clearProps: 'transform' }, '-=0.35');
        }
    }

    function animObg() {
        const page = q('.obg-page');
        if (!page) return;

        // Definir transformações iniciais (a opacidade já começa a 0 no CSS!)
        gsap.set('.obg-page .date', { y: -20 });
        gsap.set('.obg-page h1', { y: 20 });
        gsap.set('.obg-page .message', { y: 20 });
        gsap.set('.obg-page .btn-again', { scale: 0.95, y: 15 });
        gsap.set('.obg-page .illustration', { y: 30 });

        const tl = gsap.timeline();
        tl.to('.obg-page .date', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform' })
          .to('.obg-page h1', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform' }, '-=0.45')
          .to('.obg-page .message', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform' }, '-=0.45')
          .to('.obg-page .btn-again', { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform' }, '-=0.4')
          .to('.obg-page .illustration', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform' }, '-=0.4');
    }

    function bindMicroInteractions() {
        const targets = '.card, .nurse-card, .team-card, .btn-continue, .btn-enviar, .btn-elogio, .btn-again, .btn-important, .btn-outline';
        qa(targets).forEach(el => {
            el.addEventListener('mouseenter', () => gsap.to(el, { y: -3, duration: 0.2 }));
            el.addEventListener('mouseleave', () => gsap.to(el, { y: 0, duration: 0.2 }));
        });
    }

    function init() {
        // Força visibilidade de segurança
        gsap.set('.page', { visibility: 'visible', opacity: 1 });

        animLanding();
        animHome();
        animGenericPage('.escolha-med');
        animGenericPage('.elogio-page');
        animGenericPage('.equipa-page');
        animGenericPage('.insp-page');
        animGenericPage('.sabe-page');
        animObg();

        bindMicroInteractions();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
