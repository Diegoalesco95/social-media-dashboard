const checkbox = document.querySelector('input[type=checkbox]');

const handleTheme = () => {
  if (checkbox.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

checkbox.addEventListener('change', handleTheme);
