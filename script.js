const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuButton?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

const projects = {
  walfinch: {
    kicker: 'SOCIAL CAMPAIGN / 01',
    title: 'Care, made visible.',
    description: 'Built and managed social content for Walfinch Waltham Forest, turning care and wellbeing themes into accessible, community-minded posts.',
    note: 'Focus areas: senior-friendly wellbeing content, community awareness, social media planning and short-form creative. Reported experience includes 120+ content assets, 34% higher engagement and 28% growth in local lead generation.'
  },
  organic: {
    kicker: 'CONTENT & COMMUNITY / 02',
    title: 'Culture with momentum.',
    description: 'A concept for trend-led content and short-form video that gives a cultural event a recognisable social identity.',
    note: 'The approach combines timely creative, audience relevance, clear visual consistency and platform-native content. Use this project to show your actual campaign examples and published assets.'
  },
  analytics: {
    kicker: 'REPORTING / 03',
    title: 'Numbers with purpose.',
    description: 'Campaign reporting that turns impressions, clicks, click-through rate and engagement into practical optimisation decisions.',
    note: 'A useful report should connect performance to the objective, compare results over time, identify the strongest creative or audience and recommend the next test.'
  },
  internship: {
    kicker: 'SEO & PAID SEARCH / 04',
    title: 'Make discovery count.',
    description: 'An overview of internship experience and learning across digital marketing, search, content and campaign reporting.',
    note: 'Keep any certificates, reports and campaign screenshots in the assets folder and link only to work you are comfortable sharing publicly.'
  }
};
const dialog = document.getElementById('project-dialog');
document.querySelectorAll('[data-project]').forEach(card => card.addEventListener('click', () => {
  const project = projects[card.dataset.project];
  if (!project) return;
  document.getElementById('dialog-kicker').textContent = project.kicker;
  document.getElementById('dialog-title').textContent = project.title;
  document.getElementById('dialog-description').textContent = project.description;
  document.getElementById('dialog-note').textContent = project.note;
  dialog.showModal();
}));
document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
document.querySelector('.dialog-done')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
const revealItems = document.querySelectorAll('.project-card, .metric, .approach-list article, .about-copy');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealItems.forEach(item => {
    item.classList.add('will-reveal');
    observer.observe(item);
  });
}
