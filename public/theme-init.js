// Theme initialization script to prevent FOUT (Flash of Unstyled Theme)
// This script runs before React loads to set the correct theme immediately

(function() {
  try {
    const storageKey = 'aura-theme'
    const html = document.documentElement
    
    // Get stored theme or system preference
    const storedTheme = localStorage.getItem(storageKey)
    let theme = 'dark' // default
    
    if (storedTheme === 'light' || storedTheme === 'dark') {
      theme = storedTheme
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      theme = 'light'
    }
    
    // Apply theme immediately
    html.setAttribute('data-theme', theme)
    
    // Set color-scheme meta tag
    const meta = document.createElement('meta')
    meta.name = 'color-scheme'
    meta.content = theme
    document.head.appendChild(meta)
    
    console.log(`Theme initialized: ${theme}`)
  } catch (error) {
    console.warn('Theme initialization failed:', error)
    // Fallback to dark theme
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})()