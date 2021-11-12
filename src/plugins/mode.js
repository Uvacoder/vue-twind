export const load = () => {
  const filled = localStorage.theme.length
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const dark = filled ? localStorage.theme === 'dark' : prefersDark

  if (dark) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
