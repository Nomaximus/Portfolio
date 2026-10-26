import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

const skills = [
  {
    icon: 'fa-sitemap',
    title: 'ERP & process design',
    summary: 'Modeling business processes, ERP modules, and operational workflows.',
    tags: ['SAP S/4HANA', 'Odoo', 'Camunda', 'BPMN 2.0'],
  },
  {
    icon: 'fa-database',
    title: 'Data architecture',
    summary: 'Designing relational structures, queries, and information flows.',
    tags: ['PostgreSQL', 'MySQL', 'ERD Modeling', 'Redis'],
  },
  {
    icon: 'fa-shield-halved',
    title: 'Governance & risk',
    summary: 'Applying practical controls and governance frameworks to systems.',
    tags: ['ITIL v4', 'ISO 27001', 'COBIT 2019', 'AWS IAM'],
  },
  {
    icon: 'fa-chart-pie',
    title: 'Business intelligence',
    summary: 'Turning operational data into useful reporting and indicators.',
    tags: ['Power BI', 'SQL', 'Python', 'KPI Metrics'],
  },
  {
    icon: 'fa-clipboard-check',
    title: 'Systems analysis',
    summary: 'Clarifying requirements, use cases, and delivery priorities.',
    tags: ['FRS', 'UML', 'Agile', 'Jira'],
  },
  {
    icon: 'fa-plug',
    title: 'Integration',
    summary: 'Connecting services with clear API contracts and data exchange.',
    tags: ['REST API', 'JSON', 'Postman', 'Webhooks'],
  },
];

const projects = [
  {
    id: 'unireserve',
    title: 'UniReserve',
    category: 'Facility booking',
    icon: 'fa-volleyball',
    summary: 'A university sports booking platform for browsing facilities and equipment, checking venue details, and following a sign-in and approval-based reservation flow.',
    highlights: ['Sports facility catalog with venue and capacity details', 'Facility availability and reservation workflow', 'Sports equipment listings with available quantities', 'University sign-in and staff approval flow'],
    tags: ['Facility Booking', 'Reservation Workflow', 'Equipment Lending'],
    link: 'https://unireserve.lamanrasmi.com',
    gallery: [
      { src: publicAsset('Img/Project2.webp'), label: 'Homepage overview' },
      { src: publicAsset('Img/unireserve-availability.jpg'), label: 'Live availability' },
      { src: publicAsset('Img/unireserve-facilities.jpg'), label: 'Featured facilities' },
      { src: publicAsset('Img/unireserve-equipment.jpg'), label: 'Sports equipment' },
      { src: publicAsset('Img/unireserve-how-it-works.jpg'), label: 'Booking steps' },
      { src: publicAsset('Img/unireserve-student-dashboard.jpg'), label: 'Student dashboard' },
      { src: publicAsset('Img/unireserve-analytics.jpg'), label: 'Dashboard booking overview' },
      { src: publicAsset('Img/unireserve-calendar.jpg'), label: 'Booking calendar' },
      { src: publicAsset('Img/unireserve-booking.jpg'), label: 'Facility booking selection' },
      { src: publicAsset('Img/unireserve-student-facilities.jpg'), label: 'Student facilities' },
      { src: publicAsset('Img/unireserve-report-issue.jpg'), label: 'Maintenance issue report' },
      { src: publicAsset('Img/unireserve-contact.jpg'), label: 'Contact information' },
    ],
  },
  {
    id: 'student-hub',
    title: 'Student Hub',
    category: 'Student services',
    icon: 'fa-users',
    summary: 'A student information portal bringing campus updates and resources together, with a latest-articles carousel and a student sign-in entry point.',
    highlights: ['Centralized student information', 'Campus article carousel', 'Academic support resources'],
    tags: ['Student Services', 'Academic Support', 'Web Platform'],
    link: 'https://nomaximus.github.io/IMS566-ABDUL-KHALIQ-BIN-ABDUL-RAHMAN/',
    gallery: [
      { src: publicAsset('Img/Project1.webp'), label: 'Student Hub homepage' },
      { src: publicAsset('Img/Project1_2.png'), label: 'Student dashboard' },
      { src: publicAsset('Img/Project1_3.png'), label: 'Course Registration' },
      { src: publicAsset('Img/Project1_4.jpeg'), label: 'Mobile view', orientation: 'portrait' },
    ],
  },
];

const journey = [
  {
    period: '2025 — 2027',
    title: 'B.Sc. Information System Management',
    place: 'Universiti Teknologi MARA,Cawangan Selangor',
    detail: "Focusing on enterprise resource planning, database design, IT service management, and business process modeling. Dean's List honors.",
  },
  {
    period: '2023 — 2024',
    title: 'Diploma in Information Management',
    place: 'Universiti Teknologi MARA,Cawangan Sarawak',
    detail: 'Studied information management and contributed to enterprise workflow mapping and ERP integration exercises.',
  },
];

function Icon({ name }) {
  return <i className={`fa-solid ${name}`} aria-hidden="true" />;
}

const socialProfiles = [
  { name: 'LinkedIn', handle: 'linkedin.com', url: 'https://www.linkedin.com/', icon: 'fa-linkedin-in', signal: 'PROFESSIONAL NETWORK' },
  { name: 'TikTok', handle: 'tiktok.com', url: 'https://www.tiktok.com/', icon: 'fa-tiktok', signal: 'SHORT-FORM VIDEO' },
  { name: 'Instagram', handle: '@aaliiiqq_', url: 'https://www.instagram.com/aaliiiqq_?stkn=bThwY28wcm1yb3E1&utm_source=qr', icon: 'fa-instagram', signal: 'PHOTO & STORY FEED' },
];

function SocialLinks({ compact = false }) {
  if (compact) {
    return (
      <div className="hero-socials" aria-label="Social links">
        <span className="hero-social-label">FIND ME ONLINE</span>
        <div className="hero-social-links">
          {socialProfiles.map((profile) => (
            <a href={profile.url} key={profile.name} target="_blank" rel="noopener noreferrer" aria-label={`Open ${profile.name}`}>
              <i className={`fa-brands ${profile.icon}`} aria-hidden="true" />
              <span>{profile.name}</span>
              <Icon name="fa-arrow-up-right-from-square" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="social-console">
      <div className="social-console-heading">
        <span><span className="status-dot" /> SOCIAL UPLINK</span>
        <span>3 CHANNELS ONLINE</span>
      </div>
      <div className="social-link-grid">
        {socialProfiles.map((profile, index) => (
          <a
            className="social-link-card"
            href={profile.url}
            key={profile.name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${profile.name}`}
          >
            <span className="social-card-index">0{index + 1}</span>
            <span className="social-card-icon"><i className={`fa-brands ${profile.icon}`} aria-hidden="true" /></span>
            <span className="social-card-copy"><strong>{profile.name}</strong><small>{profile.handle}</small></span>
            <span className="social-card-open"><Icon name="fa-arrow-up-right-from-square" /></span>
            <span className="social-card-signal">{profile.signal}</span>
          </a>
        ))}
      </div>
      <p className="social-console-note">OPEN A CHANNEL <span>↗</span> LINKS OPEN IN A NEW TAB</p>
    </div>
  );
}

function PageHeading({ index, eyebrow, title, accent, description }) {
  return (
    <div className="section-heading section-heading-row">
      <div><span className="section-index">{index} / {eyebrow}</span><h1>{title} <em>{accent}</em></h1></div>
      <p>{description}</p>
    </div>
  );
}

function SkillGrid({ limit }) {
  const items = limit ? skills.slice(0, limit) : skills;
  return (
    <div className="skill-grid">
      {items.map((skill, index) => (
        <article className="skill-card panel" key={skill.title}>
          <div className="skill-top"><span className="skill-icon"><Icon name={skill.icon} /></span><span className="skill-number">0{index + 1}</span></div>
          <h3>{skill.title}</h3><p>{skill.summary}</p>
          <div className="tag-list">{skill.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </article>
      ))}
    </div>
  );
}

function ProjectGrid({ items, onSelect, onPreview }) {
  return (
    <div className="project-grid">
      {items.map((project, index) => (
        <article className="project-card panel" key={project.id}>
          <div className="project-gallery">
            <button type="button" className="project-cover" onClick={() => onPreview(project, 0)} aria-label={`Open ${project.title} screenshot gallery, starting with ${project.gallery[0].label}`}>
              <span className="cover-browser" aria-hidden="true">
                <span className="cover-browser-bar">
                  <span className="browser-dots"><i /><i /><i /></span>
                  <span className="browser-address"><Icon name="fa-lock" /> {new URL(project.link).hostname}</span>
                  <span className="browser-status"><span className="status-dot" /> SCREEN CAPTURE</span>
                </span>
                <span className="cover-screen">
                  {project.gallery[0].src
                    ? <img src={project.gallery[0].src} alt="" loading="lazy" decoding="async" />
                    : <span className="cover-empty"><Icon name="fa-image" /> Homepage screenshot coming soon</span>}
                  <span className="cover-hover"><span><Icon name="fa-up-right-and-down-left-from-center" /> EXPLORE PROJECT</span></span>
                </span>
              </span>
              <span className="cover-caption">
                <span><strong>{project.gallery[0].label}</strong><small>HOMEPAGE PREVIEW</small></span>
                <span className="cover-count"><Icon name="fa-images" /> {project.gallery.filter((item) => item.src).length} / {project.gallery.length} SCREENS</span>
              </span>
            </button>
          </div>
          <div className="project-content">
            <div className="project-meta"><span>0{index + 1} / STUDENT SYSTEM</span><Icon name={project.icon} /></div>
            <h2>{project.title}</h2><p>{project.summary}</p>
            <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <button type="button" className="project-detail-link" onClick={() => onSelect(project)}>Explore project <Icon name="fa-arrow-right" /></button>
          </div>
        </article>
      ))}
      {items.length === 0 && <p className="empty-state" role="status">No projects match your search. Try a different term.</p>}
    </div>
  );
}

function ProjectDialog({ project, imageViewer, onClose, onImageChange }) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [drag, setDrag] = useState(null);
  const [slidePhase, setSlidePhase] = useState('idle');
  const [slideDirection, setSlideDirection] = useState(-1);
  const wheelPhaseRef = useRef('idle');
  const slideTimerRef = useRef(0);
  const swipeStartRef = useRef(null);
  const galleryItem = imageViewer?.project.gallery[imageViewer.index];
  const tapeCards = imageViewer?.project.gallery.map((item, index) => {
    const count = imageViewer.project.gallery.length;
    const offset = index === imageViewer.index ? 0 : index === (imageViewer.index - 1 + count) % count ? -1 : index === (imageViewer.index + 1) % count ? 1 : null;
    return { item, index, offset };
  }).filter((card) => card.offset !== null) ?? [];

  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [imageViewer?.project.id, imageViewer?.index]);

  useEffect(() => () => window.clearTimeout(slideTimerRef.current), []);

  useEffect(() => {
    if (!project && !imageViewer) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [project, imageViewer, onClose, onImageChange]);

  if (!project && !imageViewer) return null;

  function zoomBy(amount) {
    setZoom((current) => {
      const nextZoom = Math.min(3, Math.max(0.75, current + amount));
      if (nextZoom <= 1) setPan({ x: 0, y: 0 });
      return nextZoom;
    });
  }

  function transitionGallery(direction) {
    const count = imageViewer.project.gallery.length;
    const nextIndex = (imageViewer.index + direction + count) % count;
    transitionToGallery(nextIndex, direction > 0 ? -1 : 1);
  }

  function transitionToGallery(nextIndex, direction) {
    if (nextIndex === imageViewer.index || wheelPhaseRef.current !== 'idle') return;

    wheelPhaseRef.current = 'exiting';
    setSlideDirection(direction);
    setSlidePhase('exiting');
    slideTimerRef.current = window.setTimeout(() => {
      onImageChange(nextIndex);
      setSlidePhase('entering');
      wheelPhaseRef.current = 'entering';
      slideTimerRef.current = window.setTimeout(() => {
        setSlidePhase('idle');
        wheelPhaseRef.current = 'idle';
      }, 380);
    }, 170);
  }

  function handleThumbnailSelect(index) {
    transitionToGallery(index, index > imageViewer.index ? -1 : 1);
  }

  function handleGalleryWheel(event) {
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (Math.abs(delta) >= 12) transitionGallery(delta > 0 ? 1 : -1);
  }

  function handleGalleryPointerDown(event) {
    if (event.pointerType === 'touch') swipeStartRef.current = { x: event.clientX, y: event.clientY };
  }

  function handleGalleryPointerUp(event) {
    if (event.pointerType !== 'touch' || swipeStartRef.current === null) return;
    const deltaX = event.clientX - swipeStartRef.current.x;
    const deltaY = event.clientY - swipeStartRef.current.y;
    swipeStartRef.current = null;
    if (zoom <= 1 && Math.abs(deltaX) >= 36 && Math.abs(deltaX) > Math.abs(deltaY)) transitionGallery(deltaX < 0 ? 1 : -1);
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className={imageViewer ? 'modal image-modal' : 'modal'} role="dialog" aria-modal="true" aria-label={imageViewer ? `${imageViewer.project.title} screenshot gallery` : `${project.title} project details`}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close dialog"><Icon name="fa-xmark" /></button>
        {imageViewer ? (
          <div className="gallery-dialog-content">
            <div className="gallery-dialog-heading">
              <div className="gallery-title">
                <span className="gallery-eyebrow"><span className="status-dot" /> PROJECT SHOWCASE <span>/</span> {imageViewer.project.category.toUpperCase()}</span>
                <h2>{imageViewer.project.title}</h2>
                <p>{galleryItem.label}</p>
              </div>
              <div className="gallery-count-card"><span>SCREEN</span><strong>{String(imageViewer.index + 1).padStart(2, '0')}<i> / {String(imageViewer.project.gallery.length).padStart(2, '0')}</i></strong></div>
            </div>
            <div className="gallery-progress" role="progressbar" aria-label="Gallery position" aria-valuemin="1" aria-valuemax={imageViewer.project.gallery.length} aria-valuenow={imageViewer.index + 1}>
              {imageViewer.project.gallery.map((item, index) => <span key={`progress-${item.label}`} className={index <= imageViewer.index ? 'is-filled' : ''} />)}
            </div>
            <div
              className={`image-stage-wrap slide-${slidePhase}`}
              onWheel={handleGalleryWheel}
              onPointerDown={handleGalleryPointerDown}
              onPointerUp={handleGalleryPointerUp}
              onPointerCancel={() => { swipeStartRef.current = null; }}
              style={{
                '--slide-shift': `${slideDirection * 100}px`,
                '--slide-rotate': `${slideDirection * -12}deg`,
                '--entry-shift': `${slideDirection * -90}px`,
                '--entry-rotate': `${slideDirection * 12}deg`,
              }}
            >
              <div className="image-stage">
                <div className="tape-track" aria-label="Project screenshot carousel">
                  {tapeCards.map(({ item, index, offset }) => offset === 0 ? (
                    <div className={`tape-card tape-card-center${item.orientation === 'portrait' ? ' is-portrait' : ''}`} key={`${imageViewer.project.id}-${index}`} aria-current="true">
                      <div className="image-slide-card">
                        <div className="slide-card-topline"><span><i /> SCREEN {String(index + 1).padStart(2, '0')}</span><span>{item.label}</span><Icon name="fa-expand" /></div>
                        <div className="slide-card-image">
                          {item.src ? (
                            <img
                              className={`zoomed-image${zoom > 1 ? ' is-zoomed' : ''}`}
                              src={item.src}
                              alt={`${imageViewer.project.title}: ${item.label}`}
                              decoding="async"
                              style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}
                              onPointerDown={(event) => {
                                if (zoom <= 1) return;
                                event.currentTarget.setPointerCapture(event.pointerId);
                                setDrag({ x: event.clientX - pan.x, y: event.clientY - pan.y });
                              }}
                              onPointerMove={(event) => {
                                if (drag) setPan({ x: event.clientX - drag.x, y: event.clientY - drag.y });
                              }}
                              onPointerUp={() => setDrag(null)}
                              onPointerCancel={() => setDrag(null)}
                              draggable="false"
                            />
                          ) : (
                            <div className="empty-gallery-slot">
                              <span className="empty-slot-icon"><Icon name="fa-image" /></span>
                              <span className="tiny-label">SCREENSHOT SLOT {String(index + 1).padStart(2, '0')}</span>
                              <strong>{item.label}</strong>
                              <p>Add an image to this gallery slot in <code>src/Pages.jsx</code>.</p>
                              <span className="slot-file-hint">Place the file in <code>public/Img</code>, then add its path.</span>
                            </div>
                          )}
                        </div>
                        <div className="slide-card-footer"><span>{imageViewer.project.title}</span><span>INTERACTIVE PREVIEW <Icon name="fa-arrow-up-right-from-square" /></span></div>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className={`tape-card ${offset < 0 ? 'tape-card-prev' : 'tape-card-next'}`}
                      key={`${imageViewer.project.id}-${index}`}
                      onClick={() => transitionToGallery(index, offset < 0 ? 1 : -1)}
                      aria-label={`Show ${item.label}`}
                      disabled={slidePhase !== 'idle'}
                    >
                      <span className="tape-side-count">{String(index + 1).padStart(2, '0')} <i>/ {String(imageViewer.project.gallery.length).padStart(2, '0')}</i></span>
                      {item.src ? <img src={item.src} alt="" loading="lazy" decoding="async" /> : <span className="tape-side-empty"><Icon name="fa-image" /></span>}
                      <span className="tape-side-label">{item.label}</span>
                      <span className="tape-side-action"><Icon name="fa-hand-pointer" /></span>
                    </button>
                  ))}
                </div>
              </div>
              <span className="gallery-scroll-cue"><Icon name="fa-computer-mouse" /> SCROLL OR SWIPE TO SLIDE</span>
            </div>
            <div className="gallery-dialog-tools">
              <div className="zoom-controls" aria-label="Image zoom controls">
                <button type="button" onClick={() => zoomBy(-0.25)} aria-label="Zoom out" disabled={zoom <= 0.75}><Icon name="fa-minus" /></button>
                <span>{Math.round(zoom * 100)}%</span>
                <button type="button" onClick={() => zoomBy(0.25)} aria-label="Zoom in" disabled={zoom >= 3}><Icon name="fa-plus" /></button>
                <button type="button" onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} aria-label="Reset zoom"><Icon name="fa-arrows-rotate" /> Reset</button>
              </div>
              <span className="gallery-help"><Icon name="fa-wand-magic-sparkles" /> Scroll or swipe to slide <i /> Zoom with controls <i /> Drag image to pan</span>
            </div>
            <div className="gallery-thumbnails" aria-label="Choose a screenshot">
              {imageViewer.project.gallery.map((item, index) => (
                <button type="button" key={`${imageViewer.project.id}-thumb-${index}`} className={imageViewer.index === index ? 'gallery-thumbnail is-current' : 'gallery-thumbnail'} onClick={() => handleThumbnailSelect(index)} aria-label={`${item.src ? 'View' : 'Empty slot:'} ${item.label}`} disabled={slidePhase !== 'idle'}>
                  {item.src ? <img src={item.src} alt="" loading="lazy" decoding="async" /> : <span className="thumbnail-empty"><Icon name="fa-plus" /></span>}
                  <span className="thumbnail-copy"><i>0{index + 1}</i><span>{item.label}</span></span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <span className="section-index">{project.category.toUpperCase()}</span>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <h3>Project highlights</h3>
            <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <a className="button button-primary modal-project-link" href={project.link} target="_blank" rel="noreferrer">Visit project <Icon name="fa-arrow-up-right-from-square" /></a>
          </>
        )}
      </section>
    </div>
  );
}

function ProjectBrowser({ compact = false }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageViewer, setImageViewer] = useState(null);
  const visibleProjects = useMemo(() => {
    const search = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = category === 'all' || project.category.toLowerCase().includes(category);
      const searchable = [project.title, project.category, project.summary, ...project.tags].join(' ').toLowerCase();
      return matchesCategory && (!search || searchable.includes(search));
    });
  }, [category, query]);
  const closeDialog = () => {
    setSelectedProject(null);
    setImageViewer(null);
  };

  return (
    <>
      {!compact && (
        <div className="project-tools">
          <label className="search-box"><Icon name="fa-magnifying-glass" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects or skills" aria-label="Search projects" /></label>
          <div className="filter-group" aria-label="Filter projects by type">
            {[['all', 'All work'], ['student', 'Student systems']].map(([value, label]) => (
              <button type="button" key={value} onClick={() => setCategory(value)} className={category === value ? 'filter-button selected' : 'filter-button'} aria-pressed={category === value}>{label}</button>
            ))}
          </div>
        </div>
      )}
      <ProjectGrid
        items={compact ? projects.slice(0, 2) : visibleProjects}
        onSelect={setSelectedProject}
        onPreview={(project, index) => setImageViewer({ project, index })}
      />
      <ProjectDialog
        project={selectedProject}
        imageViewer={imageViewer}
        onClose={closeDialog}
        onImageChange={(index) => setImageViewer((current) => current ? { ...current, index } : current)}
      />
    </>
  );
}

function Timeline() {
  return (
    <div className="timeline">
      {journey.map((item) => (
        <article className="timeline-item" key={item.period}>
          <span className="timeline-period">{item.period}</span>
          <div className="timeline-card panel"><span className="tiny-label">EDUCATION</span><h2>{item.title}</h2><p className="timeline-place">{item.place}</p><p>{item.detail}</p></div>
        </article>
      ))}
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> BACHELOR OF INFORMATION SCIENCE · UiTM</div>
          <p className="hero-kicker">People, processes & technology.</p>
          <h1>Building systems that make <span data-text="work make sense.">work make sense.</span></h1>
          <p className="hero-description">I’m Abdul Khaliq, an Information System Management student interested in designing clear, connected, and reliable digital experiences.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">Explore my work <Icon name="fa-arrow-right" /></Link>
            <Link className="button button-quiet" to="/contact">Let’s connect <Icon name="fa-arrow-right" /></Link>
          </div>
          <SocialLinks compact />
          <div className="hero-note"><span>01 / 06</span><span>EXPLORE THE PORTFOLIO</span><span className="note-line" /></div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame"><img src={publicAsset('Img/Abdul_khaliq.webp')} alt="Portrait of Abdul Khaliq" width="1100" height="1556" fetchPriority="high" decoding="async" /><div className="portrait-caption"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div></div>
          <div className="floating-card"><span className="floating-index">CURRENT FOCUS</span><strong>From workflow<br />to wisdom.</strong><span>ERP · Data · Governance</span></div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        </div>
      </section>
      <section className="metrics section-wrap" aria-label="Portfolio highlights">
        <div><strong>2+</strong><span>Student projects</span></div><div><strong>12+</strong><span>BPMN workflows</span></div><div><strong>3.47</strong><span>Academic CGPA</span></div><div><strong>6</strong><span>Areas of practice</span></div>
      </section>
/* Little information section */
      <section className="content-section section-wrap">
        <div className="section-heading section-heading-row"><div><span className="section-index">A QUICK INTRODUCTION</span><h2>Curiosity became <em>a method.</em></h2></div><p>I make organizational processes visible, question the friction, and shape systems people can actually use.</p></div>
        <article className="about-statement panel"><span className="tiny-label">MY APPROACH</span><p>Every organization has a hidden architecture: handoffs, rules, records, and decisions. I’m interested in making them work better together.</p><Link className="text-link" to="/about">More about me <Icon name="fa-arrow-right" /></Link></article>
      </section>
      <section className="content-section section-wrap"><div className="section-heading section-heading-row"><div><span className="section-index">A FEW THINGS I’VE BUILT</span><h2>Selected <em>work.</em></h2></div><Link className="text-link" to="/projects">All projects <Icon name="fa-arrow-right" /></Link></div><ProjectBrowser compact /></section>
      <section className="content-section section-wrap"><div className="section-heading section-heading-row"><div><span className="section-index">A SNAPSHOT OF MY TOOLKIT</span><h2>Systems thinking, <em>practical tools.</em></h2></div><Link className="text-link" to="/skills">Explore skills <Icon name="fa-arrow-right" /></Link></div><SkillGrid limit={3} /></section>
    </>
  );
}
/* About page */
export function AboutPage() {
  return (
    <section className="route-page section-wrap">
      <PageHeading index="01" eyebrow="ABOUT" title="Curiosity became" accent="a method." description="I’m an Information System Management student interested in making the systems behind everyday work clearer, more connected, and easier to use." />
      <div className="about-grid">
        <article className="about-statement panel"><span className="tiny-label">MY APPROACH</span><p>I make organizational architecture visible: map the process, question the friction, and shape a system people can actually use.</p></article>
        <div className="principles">
          <article className="principle panel"><span className="principle-icon"><Icon name="fa-diagram-project" /></span><div><h2>Connected by design</h2><p>Bringing people, platforms, and information together into a cohesive experience.</p></div></article>
          <article className="principle panel"><span className="principle-icon"><Icon name="fa-database" /></span><div><h2>Data with purpose</h2><p>Protecting the meaning in data while making it useful for decisions and action.</p></div></article>
          <article className="principle panel"><span className="principle-icon"><Icon name="fa-shield-halved" /></span><div><h2>Reliable by practice</h2><p>Using governance to create clarity, accountability, and dependable systems.</p></div></article>
        </div>
      </div>
      <div className="about-photo panel"><img src={publicAsset('Img/Abdul_khaliq.webp')} alt="Abdul Khaliq" width="1100" height="1556" loading="lazy" decoding="async" /><div><span className="tiny-label">CURRENT FOCUS</span><h2>From workflow<br />to wisdom.</h2><p>ERP integration · BI data architecture · IT governance</p></div></div>
    </section>
  );
}

export function SkillsPage() {
  return <section className="route-page section-wrap"><PageHeading index="02" eyebrow="TOOLKIT" title="Systems thinking," accent="practical tools." description="Technical foundations and structured methods for designing and improving information systems." /><SkillGrid /></section>;
}

export function ProjectsPage() {
  return <section className="route-page section-wrap"><PageHeading index="03" eyebrow="SELECTED WORK" title="Built around" accent="real needs." description="Student projects exploring how thoughtful information systems can make everyday services easier to use." /><ProjectBrowser /></section>;
}

export function JourneyPage() {
  return <section className="route-page section-wrap"><PageHeading index="04" eyebrow="THE JOURNEY" title="Learning by" accent="connecting dots." description="Building a foundation in information management, enterprise systems, and service design." /><Timeline /></section>;
}

export function ContactPage() {
  const [toast, setToast] = useState('');

  useEffect(() => {
    if (!toast) return undefined;
    const timeout = window.setTimeout(() => setToast(''), 2600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('abdul.khaliq@ism.edu');
      setToast('Email copied to clipboard');
    } catch {
      setToast('Clipboard unavailable. Email: abdul.khaliq@ism.edu');
    }
  }

  return (
    <section className="contact-section route-page section-wrap">
      <div className="contact-copy">
        <span className="section-index">05 / GET IN TOUCH</span>
        <h1>Good systems start<br />with <em>a conversation.</em></h1>
        <p>Open to discussing information systems, collaborating on student projects, and exploring internship opportunities.</p>
        <button type="button" className="email-copy" onClick={copyEmail}><Icon name="fa-envelope" /><span>abdul.khaliq@ism.edu</span><Icon name="fa-copy" /></button>
        <div className="contact-location"><Icon name="fa-location-dot" /> Faculty of Information System Management</div>
        <SocialLinks />
      </div>
      <form className="contact-form panel" action="https://formspree.io/f/mgaonnek" method="POST">
        <div className="form-row"><label>Your name<input type="text" name="name" autoComplete="name" placeholder="Name" required /></label><label>Your email<input type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></label></div>
        <label>Subject<input type="text" name="_subject" placeholder="What would you like to discuss?" required /></label>
        <label>Message<textarea name="message" rows="4" placeholder="Tell me a little about it..." required /></label>
        <button className="button button-primary submit-button" type="submit">Send a message <Icon name="fa-arrow-up-right-from-square" /></button>
        <p className="form-note">This form is sent securely through Formspree.</p>
      </form>
      {toast && <div className="toast" role="status">{toast}</div>}
    </section>
  );
}
