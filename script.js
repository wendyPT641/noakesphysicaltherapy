(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  function setTheme(nextTheme) {
    theme = nextTheme;
    root.setAttribute('data-theme', theme);
    if (toggle) {
      toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      toggle.querySelector('span').textContent = theme === 'dark' ? '☼' : '◐';
    }
  }

  setTheme(theme);

  if (toggle) {
    toggle.addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const form = document.querySelector('[data-contact-form]');
  const status = document.querySelector('[data-form-status]');
  const destinationEmail = 'wendy@noakesphysicaltherapy.com';

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent('Recovery planning appointment request');
      const body = encodeURIComponent(
        `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCare type: ${data.get('care-type')}\n\nMessage:\n${data.get('message')}`
      );
      if (status) {
        status.textContent = 'Opening an email draft so you can send your request.';
      }
      window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
    });
  }
})();
