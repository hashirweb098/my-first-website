* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #070b14;
    color: #ffffff;
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    width: min(1120px, 92%);
    margin: auto;
}


/* NAVBAR */

.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(7, 11, 20, 0.92);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    backdrop-filter: blur(15px);
}

.nav-container {
    min-height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 28px;
    font-weight: 800;
}

.logo span,
footer span {
    color: #38bdf8;
}

nav {
    display: flex;
    gap: 28px;
}

nav a {
    color: #cbd5e1;
    font-size: 15px;
    transition: 0.3s;
}

nav a:hover {
    color: #38bdf8;
}

.menu-btn {
    display: none;
    border: 0;
    background: none;
    color: white;
    font-size: 28px;
    cursor: pointer;
}


/* HERO */

.hero {
    min-height: 90vh;
    display: flex;
    align-items: center;
    background:
        radial-gradient(circle at 80% 20%, rgba(56,189,248,0.15), transparent 30%),
        radial-gradient(circle at 10% 80%, rgba(99,102,241,0.13), transparent 30%);
}

.hero-content {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 60px;
    align-items: center;
}

.small-title {
    color: #38bdf8;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 15px;
}

.hero h1 {
    font-size: clamp(42px, 7vw, 76px);
    line-height: 1.05;
    margin-bottom: 20px;
}

.hero h1 span {
    color: #38bdf8;
}

.hero h2 {
    font-size: 28px;
    color: #e2e8f0;
    margin-bottom: 20px;
}

.hero-description {
    max-width: 600px;
    color: #94a3b8;
    font-size: 18px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    margin-top: 32px;
    flex-wrap: wrap;
}

.btn {
    display: inline-block;
    padding: 13px 23px;
    border-radius: 10px;
    font-weight: 700;
    transition: 0.3s;
}

.btn:hover {
    transform: translateY(-3px);
}

.primary {
    background: #38bdf8;
    color: #06111c;
}

.secondary {
    border: 1px solid #334155;
    color: white;
}

.secondary:hover {
    border-color: #38bdf8;
}


/* CODE CARD */

.hero-card {
    animation: floating 4s ease-in-out infinite;
}

.code-window {
    border: 1px solid #263449;
    border-radius: 18px;
    overflow: hidden;
    background: #0d1422;
    box-shadow: 0 30px 80px rgba(0,0,0,0.4);
}

.window-top {
    height: 45px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 18px;
    border-bottom: 1px solid #263449;
}

.window-top span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #475569;
}

.code {
    padding: 28px;
    font-family: Consolas, monospace;
    color: #dbeafe;
    font-size: 15px;
    line-height: 2;
}

.pink {
    color: #f472b6;
}

.green {
    color: #86efac;
}

@keyframes floating {
    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-12px);
    }
}


/* SECTIONS */

.section {
    padding: 110px 0;
}

.dark-section {
    background: #0b1120;
}

.section-title {
    text-align: center;
    margin-bottom: 60px;
}

.section-title p {
    color: #38bdf8;
    font-size: 13px;
    letter-spacing: 3px;
    font-weight: 700;
}

.section-title h2 {
    font-size: 42px;
    margin-top: 8px;
}


/* ABOUT */

.about-grid {
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    gap: 60px;
    align-items: center;
}

.about-card {
    background: linear-gradient(145deg, #111c31, #0c1423);
    border: 1px solid #263449;
    padding: 40px;
    border-radius: 20px;
}

.about-icon {
    font-size: 45px;
    margin-bottom: 20px;
}

.about-card h3 {
    font-size: 25px;
    margin-bottom: 10px;
}

.about-card p,
.about-text p {
    color: #94a3b8;
}

.about-text h3 {
    font-size: 30px;
    margin-bottom: 20px;
}

.about-text p {
    margin-bottom: 16px;
}

.info-list {
    margin-top: 25px;
    display: grid;
    gap: 12px;
}

.info-list div {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 13px 0;
    border-bottom: 1px solid #1e293b;
}

.info-list span {
    color: #94a3b8;
    text-align: right;
}


/* SKILLS */

.skills-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.skill-card {
    background: #101a2c;
    border: 1px solid #263449;
    border-radius: 16px;
    padding: 28px;
    transition: 0.3s;
}

.skill-card:hover {
    transform: translateY(-7px);
    border-color: #38bdf8;
}

.skill-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 58px;
    height: 58px;
    padding: 8px;
    border-radius: 12px;
    background: #17263c;
    color: #38bdf8;
    font-weight: 800;
    margin-bottom: 18px;
}

.skill-card h3 {
    margin-bottom: 8px;
}

.skill-card p {
    color: #94a3b8;
    font-size: 14px;
    margin-bottom: 18px;
}

.progress {
    height: 5px;
    background: #1e293b;
    border-radius: 10px;
    overflow: hidden;
}

.progress span {
    display: block;
    height: 100%;
    background: #38bdf8;
}


/* PROJECTS */

.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.project-card {
    overflow: hidden;
    background: #101827;
    border: 1px solid #263449;
    border-radius: 18px;
    transition: 0.3s;
}

.project-card:hover {
    transform: translateY(-8px);
    border-color: #38bdf8;
}

.project-image {
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 65px;
    background:
        radial-gradient(circle, rgba(56,189,248,0.18), transparent 60%),
        #0d1524;
}

.project-content {
    padding: 25px;
}

.project-content > span {
    color: #38bdf8;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
}

.project-content h3 {
    font-size: 22px;
    margin: 8px 0;
}

.project-content p {
    color: #94a3b8;
    font-size: 14px;
    margin-bottom: 20px;
}

.project-link {
    color: #38bdf8;
    font-weight: 700;
}


/* SERVICES */

.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.service-card {
    text-align: center;
    padding: 40px 28px;
    background: #101a2c;
    border: 1px solid #263449;
    border-radius: 18px;
    transition: 0.3s;
}

.service-card:hover {
    transform: translateY(-7px);
    border-color: #38bdf8;
}

.service-icon {
    font-size: 45px;
    margin-bottom: 18px;
}

.service-card h3 {
    margin-bottom: 12px;
}

.service-card p {
    color: #94a3b8;
}


/* CONTACT */

.contact-box {
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    background:
        linear-gradient(135deg, rgba(56,189,248,0.13), rgba(99,102,241,0.08)),
        #101827;
    border: 1px solid #263449;
    border-radius: 22px;
}

.contact-box h3 {
    font-size: 30px;
    margin-bottom: 10px;
}

.contact-box p {
    color: #94a3b8;
}

.contact-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.whatsapp {
    background: #22c55e;
    color: white;
}


/* FOOTER */

footer {
    background: #050811;
    border-top: 1px solid #1e293b;
    padding-top: 45px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding-bottom: 35px;
}

.footer-content h3 {
    font-size: 25px;
}

.footer-content p {
    color: #64748b;
}

.footer-links {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.footer-links a {
    color: #94a3b8;
}

.footer-links a:hover {
    color: #38bdf8;
}

.copyright {
    text-align: center;
    border-top: 1px solid #111827;
    padding: 20px;
    color: #64748b;
    font-size: 13px;
}


/* BACK TO TOP */

.top-btn {
    position: fixed;
    right: 22px;
    bottom: 22px;
    width: 45px;
    height: 45px;
    border: 0;
    border-radius: 50%;
    background: #38bdf8;
    color: #06111c;
    font-size: 22px;
    font-weight: 800;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
}

.top-btn.show {
    opacity: 1;
    visibility: visible;
}


/* MOBILE */

@media (max-width: 900px) {

    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-description {
        margin: auto;
    }

    .hero-buttons {
        justify-content: center;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .services-grid {
        grid-template-columns: 1fr;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }

    .contact-box {
        flex-direction: column;
        text-align: center;
    }

    .contact-buttons {
        justify-content: center;
    }
}


@media (max-width: 700px) {

    .menu-btn {
        display: block;
    }

    nav {
        position: absolute;
        top: 75px;
        left: 0;
        right: 0;
        display: none;
        flex-direction: column;
        gap: 0;
        background: #080d18;
        border-bottom: 1px solid #1e293b;
    }

    nav.active {
        display: flex;
    }

    nav a {
        padding: 15px 5%;
        border-bottom: 1px solid #172033;
    }

    .hero {
        min-height: auto;
        padding: 100px 0;
    }

    .section {
        padding: 80px 0;
    }

    .section-title h2 {
        font-size: 34px;
    }

    .hero h1 {
        font-size: 45px;
    }

    .hero h2 {
        font-size: 22px;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .info-list div {
        flex-direction: column;
        gap: 3px;
    }

    .info-list span {
        text-align: left;
    }

    .contact-box {
        padding: 35px 22px;
    }

    .footer-content {
        flex-direction: column;
        text-align: center;
    }

    .footer-links {
        justify-content: center;
    }

}
