/* ============================================================
   animations.js  –  Animações GSAP subtis para o site de elogios
   Requer: gsap (CDN) carregado antes deste ficheiro
   ============================================================ */

(function () {
    'use strict';

    /* Utilitário: só anima se o elemento existir */
    function q(sel, scope) {
        return (scope || document).querySelector(sel);
    }
    function qa(sel, scope) {
        return [...(scope || document).querySelectorAll(sel)];
    }

    /* Defaults globais */
    gsap.defaults({ ease: 'power2.out' });

    /* ── Durations ─────────────────────────────────── */
    const DUR   = 0.55;   // duração base

    /* ══════════════════════════════════════════════════
       LANDING  (index.html)
       ══════════════════════════════════════════════════ */
    function animLanding() {
        const page = q('.landing');
        if (!page) return;

        const tl = gsap.timeline({ defaults: { duration: DUR } });

        tl.from(q('.landing .date'), { opacity: 0, y: -16 })
          .from(q('.landing h1'), { opacity: 0, y: 20 }, '-=0.3')
          .from(q('.landing .subtitle'), { opacity: 0, y: 16 }, '-=0.35')
          .from(q('.landing .btn-continue'), { opacity: 0, y: 12, scale: 0.96 }, '-=0.3')
          .from(q('.landing .illustration'), { opacity: 0, y: 18, duration: 0.6 }, '-=0.2');
    }

    /* ══════════════════════════════════════════════════
       HOME  (home.html)
       ══════════════════════════════════════════════════ */
    function animHome() {
        const page = q('.home');
        if (!page) return;

        const tl = gsap.timeline({ defaults: { duration: DUR } });

        tl.from(q('.home .header'), { opacity: 0, y: -20 })
          .from(q('.home .content'), { opacity: 0, y: 40, borderRadius: '48px 48px 0 0' }, '-=0.25');
    }

    /* ══════════════════════════════════════════════════
       ESCOLHA ENFERMEIRO  (escolha-enf.html)
       ══════════════════════════════════════════════════ */
    function animEscolha() {
        const page = q('.escolha-enf');
        if (!page) return;

        const tl = gsap.timeline({ defaults: { duration: DUR } });

        tl.from(q('.escolha-enf .header-title'), { opacity: 0, y: -18 })
          .from(q('.escolha-enf .content-panel'), { opacity: 0, y: 36 }, '-=0.25');
    }

    /* ══════════════════════════════════════════════════
       ELOGIO  (elogio.html / enf-ang.html)
       ══════════════════════════════════════════════════ */
    function animElogio() {
        const page = q('.elogio-page');
        if (!page) return;

        const tl = gsap.timeline({ defaults: { duration: DUR } });

        tl.from(q('.elogio-page .profile-circle-outer'), { opacity: 0, scale: 0.80, ease: 'back.out(1.4)' })
          .from(q('.elogio-page .content-panel'), { opacity: 0, y: 40 }, '-=0.25');

        /* Etiqueta com nome (se existir) */
        const label = q('.nurse-label');
        if (label) {
            gsap.from(label, { opacity: 0, y: 6, delay: 0.3, duration: 0.4 });
        }
    }

    /* ══════════════════════════════════════════════════
       EQUIPA  (equipa.html)
       ══════════════════════════════════════════════════ */
    function animEquipa() {
        const page = q('.equipa-page');
        if (!page) return;

        const tl = gsap.timeline({ defaults: { duration: DUR } });

        tl.from(q('.equipa-page .header-title'), { opacity: 0, y: -18 })
          .from(q('.equipa-page .content-panel'), { opacity: 0, y: 36 }, '-=0.25');
    }

    /* ══════════════════════════════════════════════════
       INSPIRAÇÃO  (Insp.html)
       ══════════════════════════════════════════════════ */
    function animInsp() {
        const page = q('.insp-page');
        if (!page) return;

        const tl = gsap.timeline({ defaults: { duration: DUR } });

        tl.from(q('.insp-page .header-title'), { opacity: 0, y: -18 })
          .from(q('.insp-page .content-panel'), { opacity: 0, y: 36 }, '-=0.25');
    }

    /* ══════════════════════════════════════════════════
       SABE MAIS  (sabemais.html)
       ══════════════════════════════════════════════════ */
    function animSabe() {
        const page = q('.sabe-page');
        if (!page) return;

        const tl = gsap.timeline({ defaults: { duration: DUR } });

        tl.from(q('.sabe-page .header-title'), { opacity: 0, y: -18 })
          .from(q('.sabe-page .content-panel'), { opacity: 0, y: 36 }, '-=0.25');
    }

    /* ══════════════════════════════════════════════════
       OBRIGADO  (obg.html)
       ══════════════════════════════════════════════════ */
    function animObg() {
        const page = q('.obg-page');
        if (!page) return;

        const tl = gsap.timeline({ defaults: { duration: DUR } });

        tl.from(q('.obg-page .date'), { opacity: 0, y: -14 })
          .from(q('.obg-page h1'), { opacity: 0, y: 18, ease: 'back.out(1.2)' }, '-=0.25')
          .from(q('.obg-page .message'), { opacity: 0, y: 14 }, '-=0.25')
          .from(q('.obg-page .btn-again'), { opacity: 0, y: 10, scale: 0.96 }, '-=0.2')
          .from(q('.obg-page .illustration'), { opacity: 0, y: 20, duration: 0.6 }, '-=0.15');
    }

    /* ══════════════════════════════════════════════════
       MICRO-INTERAÇÕES  (globais)
       Hover lift suave nos botões / cards via GSAP
       ══════════════════════════════════════════════════ */
    function bindHoverLift(selector, yAmount) {
        qa(selector).forEach(function (el) {
            el.addEventListener('mouseenter', function () {
                gsap.to(el, { y: yAmount, duration: 0.22, ease: 'power1.out' });
            });
            el.addEventListener('mouseleave', function () {
                gsap.to(el, { y: 0, duration: 0.22, ease: 'power1.out' });
            });
        });
    }

    function bindMicroInteractions() {
        bindHoverLift('.home .card',               -3);
        bindHoverLift('.escolha-enf .nurse-card',  -3);
        bindHoverLift('.equipa-page .team-card',   -3);
        bindHoverLift('.landing .btn-continue',    -2);
        bindHoverLift('.btn-enviar',               -2);
        bindHoverLift('.btn-elogio',               -2);
        bindHoverLift('.btn-again',                -2);
        bindHoverLift('.btn-important',            -2);
        bindHoverLift('.btn-outline',              -2);
    }

    /* ══════════════════════════════════════════════════
       INIT  –  detecta a página e corre a animação certa
       ══════════════════════════════════════════════════ */
    function init() {
        /* Impede flash de conteúdo não animado */
        gsap.set('.page', { visibility: 'visible' });

        animLanding();
        animHome();
        animEscolha();
        animElogio();
        animEquipa();
        animInsp();
        animSabe();
        animObg();

        bindMicroInteractions();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();