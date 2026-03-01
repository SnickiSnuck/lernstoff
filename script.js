function toggleCover(colIndex) {
    // Wir suchen alle td-Elemente, die an der Position colIndex in ihrer Zeile stehen
    const cells = document.querySelectorAll(`tbody td:nth-child(${colIndex})`);
    
    cells.forEach(td => {
        td.classList.toggle('covered');
    });
}