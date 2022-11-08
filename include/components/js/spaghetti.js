//on page loads, changing theme
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefer-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
}
else {
    document.documentElement.classList.remove('dark')
}

// whenever the user explicity chooses light mode
localStorage.theme = 'light'

// whenever the iser explicity chooses dark mode
localStorage.theme = 'dark'

// whenever the user explicity chooses to respect OS Preferences
localStorage.removeItem('theme')

