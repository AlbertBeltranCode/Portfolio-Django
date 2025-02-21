document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    const themeToggle = document.getElementById('theme-toggle');
    const fontSizeSelect = document.getElementById('font-size');
    const lineHeightSelect = document.getElementById('line-height');
    const fontFamilySelect = document.getElementById('font-family');

    console.log("Theme Toggle Element:", themeToggle);
    console.log("Font Size Select Element:", fontSizeSelect);
    console.log("Line Height Select Element:", lineHeightSelect);
    console.log("Font Family Select Element:", fontFamilySelect);

    // Función para actualizar el tema
    function updateTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        console.log("Theme updated to:", theme);
    }

    // Función para actualizar el tamaño de fuente
    function updateFontSize(size) {
        document.documentElement.style.setProperty('--font-size', size);
        localStorage.setItem('fontSize', size);
        console.log("Font size updated to:", size);
    }

    // Función para actualizar la altura de línea
    function updateLineHeight(height) {
        document.documentElement.style.setProperty('--line-height', height);
        localStorage.setItem('lineHeight', height);
        console.log("Line height updated to:", height);
    }

    // Función para actualizar la familia de fuente
    function updateFontFamily(family) {
        document.documentElement.style.setProperty('--font-family', family);
        localStorage.setItem('fontFamily', family);
        console.log("Font family updated to:", family);
    }

    // Cargar ajustes guardados desde localStorage
    const savedTheme = localStorage.getItem('theme');
    const savedFontSize = localStorage.getItem('fontSize');
    const savedLineHeight = localStorage.getItem('lineHeight');
    const savedFontFamily = localStorage.getItem('fontFamily');

    console.log("Saved Theme:", savedTheme);
    console.log("Saved Font Size:", savedFontSize);
    console.log("Saved Line Height:", savedLineHeight);
    console.log("Saved Font Family:", savedFontFamily);

    if (savedTheme) {
        updateTheme(savedTheme);
    }
    if (savedFontSize) {
        updateFontSize(savedFontSize);
    }
    if (savedLineHeight) {
        updateLineHeight(savedLineHeight);
    }
    if (savedFontFamily) {
        updateFontFamily(savedFontFamily);
    }

    // Event listeners para cambios en los ajustes
    themeToggle.addEventListener('change', function() {
        const theme = themeToggle.value;
        console.log("Theme changed to:", theme);
        updateTheme(theme);
    });

    fontSizeSelect.addEventListener('change', function() {
        const fontSize = fontSizeSelect.value;
        console.log("Font size changed to:", fontSize);
        updateFontSize(fontSize);
    });

    lineHeightSelect.addEventListener('change', function() {
        const lineHeight = lineHeightSelect.value;
        console.log("Line height changed to:", lineHeight);
        updateLineHeight(lineHeight);
    });

    fontFamilySelect.addEventListener('change', function() {
        const fontFamily = fontFamilySelect.value;
        console.log("Font family changed to:", fontFamily);
        updateFontFamily(fontFamily);
    });

});
