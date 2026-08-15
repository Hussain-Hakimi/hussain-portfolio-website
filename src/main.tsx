import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

type Project = {
  n: string;
  title: string;
  kicker: string;
  summary: string;
  image: string;
  tech: string[];
  live?: string;
  repo: string;
  problem: string;
  approach: string;
  outcome: string;
};

const projects: Project[] = [
  {
    n: '01', title: 'MH Mega Mall', kicker: 'Frontend / E-Commerce',
    summary: 'A multi-category storefront for electronics, groceries, and fashion, focused on clear browsing and responsive layouts.',
    image: '/assets/megamall.png', tech: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://hussain-hakimi.github.io/SEMESTER-1-PROJECT/', repo: 'https://github.com/Hussain-Hakimi/SEMESTER-1-PROJECT',
    problem: 'Create a practical shopping experience that keeps multiple product categories easy to browse while remaining usable on smaller screens.',
    approach: 'Structured the storefront around clear category navigation, reusable visual patterns, product-focused sections, and responsive layouts.',
    outcome: 'A complete semester project that demonstrates foundational frontend implementation and product-oriented UI thinking.'
  },
  {
    n: '02', title: 'Developer Portfolio', kicker: 'Frontend / Personal Brand',
    summary: 'A personal portfolio built to present my work, learning journey, and contact information in a straightforward way.',
    image: '/assets/portfolio.png', tech: ['HTML5', 'CSS Grid', 'Responsive UI'],
    live: 'https://hussainhakimi.netlify.app/', repo: 'https://github.com/Hussain-Hakimi',
    problem: 'Create a clear online home for my projects, skills, learning journey, and professional links.',
    approach: 'Used semantic sections, CSS Grid, responsive layouts, and a simple content hierarchy to keep the portfolio easy to navigate.',
    outcome: 'The previous portfolio that this new site replaces, kept here as part of my development journey.'
  },
  {
    n: '03', title: 'Road Accident Dashboard', kicker: 'Data Analytics / Excel',
    summary: 'An Excel dashboard using pivot tables, formulas, and slicers to explore accident severity, causes, and trends.',
    image: '/assets/road-accident-dashboard.png', tech: ['Microsoft Excel', 'Pivot Tables', 'Formulas', 'Slicers'],
    repo: 'https://github.com/Hussain-Hakimi/Road_Accident-Dashboard/blob/main/README.md',
    problem: 'Turn a raw road-accident dataset into information that can be explored and understood quickly.',
    approach: 'Organized the data and used Excel analysis features to surface severity, causes, and trends through an interactive dashboard.',
    outcome: 'A data-analysis project demonstrating practical spreadsheet modeling and dashboard-building skills.'
  }
];

const skillGroups: [string, string[]][] = [
  ['Languages', ['C#', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS']],
  ['Database', ['SQL Server']], ['Tools', ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Excel']],
  ['Focus', ['Excel Specialist', 'Power BI']]
];

const Arrow = () => <span aria-hidden="true">↗</span>;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => { document.body.style.overflow = selectedProject ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [selectedProject]);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="nav-wrap">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Hussain Hakimi home"><img src="/assets/hussain-logo.png" alt="Hussain Hakimi" /><span>HH.</span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}><span /><span /></button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Primary navigation"><a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#contact" onClick={closeMenu}>Contact</a></nav>
      <a className="nav-cta" href="mailto:hussain.hakimi216@gmail.com">Let’s talk <Arrow /></a>
    </header>
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title"><div className="hero-noise" /><div className="hero-lines" /><div className="hero-inner"><p className="eyebrow"><span className="status-dot" /> Software Engineering · UET Lahore · 2025—2029</p><h1 id="hero-title">I build software<br /><em>that matters.</em></h1><div className="hero-bottom"><p className="hero-copy">I’m Hussain Hakimi, a Software Engineering student and frontend developer building responsive web applications, relational databases, and data-driven solutions while growing into backend and full-stack engineering.</p><div className="hero-actions"><a className="button button-primary" href="#work">View selected work <span>↓</span></a><a className="button button-ghost" href="https://github.com/Hussain-Hakimi" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></div></div><div className="hero-index" aria-hidden="true"><b>01</b><span>BUILD</span><span>LEARN</span><span>IMPROVE</span></div></section>
      <section className="work section" id="work" aria-labelledby="work-title"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2 id="work-title">Proof, not<br /><em>promises.</em></h2></div><p className="section-intro">A selection of projects from my journey across frontend development and data analytics. Open any project to see the problem, approach, and outcome.</p></div><div className="project-stack">{projects.map(project => <article className="project-card" key={project.n} onClick={() => setSelectedProject(project)} tabIndex={0} onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setSelectedProject(project)}><div className="project-visual"><img src={project.image} alt={`${project.title} project screenshot`} onError={e => { e.currentTarget.style.display = 'none'; }} /><div className={`visual-screen visual-${project.n}`}><span className="visual-label">{project.n} / {project.kicker}</span><strong>{project.title}</strong><div className="visual-bars"><i /><i /><i /><i /></div></div></div><div className="project-content"><div className="project-meta"><span>{project.n}</span><span>{project.kicker}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-row">{project.tech.map(t => <span key={t}>{t}</span>)}</div><button className="text-link" type="button" onClick={e => { e.stopPropagation(); setSelectedProject(project); }}>View case study <Arrow /></button></div><div className="project-mark" aria-hidden="true"><Arrow /></div></article>)}</div></section>
      <section className="statement" aria-label="Portfolio statement"><p>GOOD SOFTWARE STARTS WITH<br /><em>GOOD QUESTIONS.</em></p></section>
      <section className="about section" id="about" aria-labelledby="about-title"><div className="about-title"><p className="eyebrow dark-eyebrow">About me</p><h2 id="about-title">From business<br />to <em>building.</em></h2></div><div className="about-copy"><p className="about-lead">I did not start out in software. I first studied Business Administration, then found that I enjoyed solving problems with code much more.</p><p>I am now studying Software Engineering at UET Lahore, where I am learning frontend development, databases, and data analysis. I like building something useful, finding what is not working, and making it better.</p><p>Right now, I am working toward becoming a dependable full-stack developer.</p><div className="facts"><div><strong>03+</strong><span>Featured builds</span></div><div><strong>06</strong><span>Core languages</span></div><div><strong>2029</strong><span>Expected graduation</span></div></div></div></section>
      <section className="capabilities section" id="skills" aria-labelledby="skills-title"><div className="section-heading"><div><p className="eyebrow">Toolkit</p><h2 id="skills-title">What I’m<br /><em>working with.</em></h2></div><p className="section-intro">I prefer learning technologies by using them to solve real problems. These are the tools currently shaping my engineering foundation.</p></div><div className="skill-grid">{skillGroups.map(([name, items], index) => <div className="skill-group" key={name}><span className="skill-index">0{index + 1}</span><h3>{name}</h3><div className="tag-row">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>
      <section className="timeline section" id="experience" aria-labelledby="experience-title"><div><p className="eyebrow">Experience</p><h2 id="experience-title">Learning by<br /><em>doing.</em></h2></div><div className="timeline-list"><article className="timeline-item"><span className="timeline-year">3 YEARS</span><div><h3>Volunteer Instructor</h3><p className="timeline-org">Winter Courses & School Programs</p><p>During three winter breaks, I taught school students with Hassan Hakimi and Mohammad Hussain. It taught me how to explain ideas clearly and stay patient when someone needs more time.</p></div></article><article className="timeline-item"><span className="timeline-year">2025—2029</span><div><h3>Bachelor of Software Engineering</h3><p className="timeline-org">University of Engineering & Technology (UET), Lahore</p><p>Building foundations across programming, object-oriented development, databases, web development, and software engineering.</p></div></article></div></section>
      <section className="contact section" id="contact" aria-labelledby="contact-title"><p className="eyebrow contact-eyebrow">Let’s connect</p><h2 id="contact-title">Have an idea?<br /><em>Let’s build it.</em></h2><a className="email-link" href="mailto:hussain.hakimi216@gmail.com">hussain.hakimi216@gmail.com <Arrow /></a><div className="contact-bottom"><p>Open to learning, collaboration, freelance opportunities, and conversations about software.</p><div className="socials"><a href="https://github.com/Hussain-Hakimi" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/hussain-hakimi/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="https://hussain-blog.netlify.app/" target="_blank" rel="noreferrer">Blog <Arrow /></a></div></div></section>
    </main>
    <footer><span>Hussain Hakimi © 2026</span><span>Designed & built with intention.</span><a href="#top">Back to top ↑</a></footer>
    {selectedProject && <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelectedProject(null)}><article className="case-study" role="dialog" aria-modal="true" aria-labelledby="case-title" onMouseDown={e => e.stopPropagation()}><button className="close-modal" aria-label="Close case study" onClick={() => setSelectedProject(null)}>×</button><div className="case-head"><span>{selectedProject.n} / {selectedProject.kicker}</span><h2 id="case-title">{selectedProject.title}</h2><p>{selectedProject.summary}</p></div><img className="case-image" src={selectedProject.image} alt={`${selectedProject.title} screenshot`} /><div className="case-grid"><div><span>01 — Problem</span><p>{selectedProject.problem}</p></div><div><span>02 — Approach</span><p>{selectedProject.approach}</p></div><div><span>03 — Outcome</span><p>{selectedProject.outcome}</p></div><div><span>04 — Stack</span><div className="tag-row">{selectedProject.tech.map(t => <span key={t}>{t}</span>)}</div></div></div><div className="case-actions">{selectedProject.live && <a className="button button-primary" href={selectedProject.live} target="_blank" rel="noreferrer">Live demo <Arrow /></a>}<a className="button button-dark" href={selectedProject.repo} target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></article></div>}
  </div>;
}

createRoot(document.getElementById('root')!).render(<App />);
