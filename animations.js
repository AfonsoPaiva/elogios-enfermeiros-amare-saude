(function () {
    'use strict';

    function q(sel, scope) { return (scope || document).querySelector(sel); }
    function qa(sel, scope) { return [...(scope || document).querySelectorAll(sel)]; }

    gsap.defaults({ ease: 'power2.out', duration: 0.55 });

    function animLanding() {
        const page = q('.landing');
        if (!page) return;

        // Reset imediato para garantir que estão visíveis antes de animar
        gsap.set(['.landing .date', '.landing h1', '.landing .subtitle', '.landing .btn-continue', '.landing .illustration'], { opacity: 1, y: 0, scale: 1 });

        const tl = gsap.timeline();
        tl.from('.landing .date', { opacity: 0, y: -20 })
          .from('.landing h1', { opacity: 0, y: 20 }, '-=0.4')
          .from('.landing .subtitle', { opacity: 0, y: 20 }, '-=0.4')
          .from('.landing .btn-continue', { opacity: 0, scale: 0.9, y: 10 }, '-=0.3')
          .from('.landing .illustration', { opacity: 0, y: 30 }, '-=0.3');
    }

    function animHome() {
        const page = q('.home');
        if (!page) return;
        
        gsap.set(['.home .header', '.home .content'], { opacity: 1, y: 0 });
        
        const tl = gsap.timeline();
        tl.from('.home .header', { opacity: 0, y: -30 })
          .from('.home .content', { opacity: 0, y: 50 }, '-=0.3');
    }

    function animGenericPage(className) {
        const page = q(className);
        if (!page) return;

        const header = q(className + ' .header-title') || q(className + ' .profile-circle-outer');
        const panel = q(className + ' .content-panel');

        gsap.set([header, panel], { opacity: 1, y: 0 });

        const tl = gsap.timeline();
        if (header) tl.from(header, { opacity: 0, y: -20 });
        if (panel) tl.from(panel, { opacity: 0, y: 40 }, '-=0.3');
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
        animGenericPage('.escolha-enf');
        animGenericPage('.elogio-page');
        animGenericPage('.equipa-page');
        animGenericPage('.insp-page');
        animGenericPage('.sabe-page');
        animGenericPage('.obg-page');

        bindMicroInteractions();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();