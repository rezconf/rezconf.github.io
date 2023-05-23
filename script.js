console.clear();

feather.replace();

const toggleButtons = document.querySelectorAll('.c-toggle__item');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('c-toggle__item--active')) {
      button.parentNode.querySelector('.c-toggle__item--active').
      classList.remove('c-toggle__item--active');
      button.classList.add('c-toggle__item--active');
      const theme = button.dataset.theme;
      if (theme == 'dark') {
        document.documentElement.classList.add('theme--dark');
      } else {
        document.documentElement.classList.remove('theme--dark');
      }
    }
  });
});

const changeTheme = type => {
  document.documentElement.style.setProperty('--primary', `var(--${type})`);
  document.documentElement.style.setProperty('--primary-light', `var(--${type}-transparent)`);
};