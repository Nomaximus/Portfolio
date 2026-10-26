import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { HashRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';

const HomePage = lazy(() => import('./Pages.jsx').then((module) => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./Pages.jsx').then((module) => ({ default: module.AboutPage })));
const SkillsPage = lazy(() => import('./Pages.jsx').then((module) => ({ default: module.SkillsPage })));
const ProjectsPage = lazy(() => import('./Pages.jsx').then((module) => ({ default: module.ProjectsPage })));
const JourneyPage = lazy(() => import('./Pages.jsx').then((module) => ({ default: module.JourneyPage })));
const ContactPage = lazy(() => import('./Pages.jsx').then((module) => ({ default: module.ContactPage })));

const navigation = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/skills', 'Skills'],
  ['/projects', 'Projects'],
  ['/journey', 'Journey'],
  ['/contact', 'Contact'],
];

function Icon({ name }) {
  return <i className={`fa-solid ${name}`} aria-hidden="true" />;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageReveals() {
  const { pathname } = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll(
      '.page-transition > .hero, .page-transition > .metrics, .page-transition > .content-section, .page-transition > .route-page > *, ' +
      '.hero-copy > *, .hero-visual, .metrics > div, .about-grid > *, .principles > *, ' +
      '.skill-card, .project-card, .timeline-item, .contact-copy > *, .contact-form > *, .social-link-card',
    );
    const delayCounts = new Map();

    targets.forEach((element) => {
      element.classList.add('motion-reveal');
      element.classList.remove('is-visible');
      const parent = element.parentElement;
      const delay = delayCounts.get(parent) || 0;
      element.style.setProperty('--reveal-delay', `${Math.min(delay * 65, 390)}ms`);
      delayCounts.set(parent, delay + 1);
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      targets.forEach((element) => element.classList.add('is-visible'));
      return () => {
        targets.forEach((element) => {
          element.classList.remove('motion-reveal', 'is-visible');
          element.style.removeProperty('--reveal-delay');
        });
      };
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    let frame = 0;
    const revealSkippedContent = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        targets.forEach((element) => {
          if (!element.classList.contains('is-visible') && element.getBoundingClientRect().bottom < 0) {
            element.classList.add('is-visible');
            observer.unobserve(element);
          }
        });
        frame = 0;
      });
    };
    window.addEventListener('scroll', revealSkippedContent, { passive: true });
    targets.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener('scroll', revealSkippedContent);
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
      targets.forEach((element) => {
        element.classList.remove('motion-reveal', 'is-visible');
        element.style.removeProperty('--reveal-delay');
      });
    };
  }, [pathname]);

  return null;
}

function NotFoundPage() {
  return (
    <section className="route-page section-wrap">
      <span className="section-index">404 / NOT FOUND</span>
      <h1>That page isn’t here.</h1>
      <p>Use the navigation to find your way around.</p>
      <NavLink className="button button-primary" to="/">Back home <Icon name="fa-arrow-right" /></NavLink>
    </section>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [customCursor, setCustomCursor] = useState(true);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: coarse)');
    const updateCursorForPointer = () => setCustomCursor(!pointerQuery.matches);
    updateCursorForPointer();
    pointerQuery.addEventListener('change', updateCursorForPointer);
    return () => pointerQuery.removeEventListener('change', updateCursorForPointer);
  }, []);

  useEffect(() => {
    if (!customCursor) return undefined;
    let frame = 0;
    let pointerX = -100;
    let pointerY = -100;

    const move = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursorDotRef.current?.classList.add('is-visible');
      cursorRingRef.current?.classList.add('is-visible');
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const position = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
        if (cursorDotRef.current) cursorDotRef.current.style.transform = position;
        if (cursorRingRef.current) cursorRingRef.current.style.transform = position;
        frame = 0;
      });
      const target = event.target;
      const interactive = target instanceof Element && target.closest('a, button, input, textarea, select, [role="button"]');
      cursorRingRef.current?.classList.toggle('is-interactive', Boolean(interactive));
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [customCursor]);

  return (
    <div className={customCursor ? 'app custom-cursor' : 'app'}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-texture" />
      {customCursor && (
        <>
          <span className="cursor-dot" ref={cursorDotRef} />
          <span className="cursor-ring" ref={cursorRingRef} />
        </>
      )}

      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="Abdul Khaliq, home">
          <span className="brand-mark">AK</span>
          <span className="brand-copy"><strong>Abdul Khaliq</strong><small>Information Systems · 2026</small></span>
        </NavLink>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {navigation.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button className="cursor-toggle" type="button" onClick={() => setCustomCursor((enabled) => !enabled)} aria-pressed={customCursor}>
            <Icon name="fa-arrow-pointer" /> <span>{customCursor ? 'System cursor' : 'Custom cursor'}</span>
          </button>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            <Icon name={menuOpen ? 'fa-xmark' : 'fa-bars'} />
          </button>
        </div>
      </header>

      <ScrollToTop />
      <main>
        <div className="page-transition" key={location.pathname}>
          <Suspense fallback={<div className="route-loading" role="status">Loading portfolio page…</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/journey" element={<JourneyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <PageReveals key={location.pathname} />
          </Suspense>
        </div>
      </main>

      <footer className="site-footer section-wrap">
        <NavLink to="/" className="brand">
          <span className="brand-mark">AK</span>
          <span className="brand-copy"><strong>Abdul Khaliq</strong><small>Information Systems · 2026</small></span>
        </NavLink>
        <span>© 2026 Abdul Khaliq. All rights reserved.</span>
        <NavLink className="back-top" to="/">Back home ↑</NavLink>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Portfolio />
    </HashRouter>
  );
}
