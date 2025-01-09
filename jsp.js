// Toggle lesson content visibility
function toggleLesson(button) {
    const content = button.closest('.lesson-item').querySelector('.lesson-content');
    if (content.style.display === 'block') {
        content.style.display = 'none';
        button.textContent = 'Show';
    } else {
        content.style.display = 'block';
        button.textContent = 'Hide';
    }
}

// Toggle solution visibility
function toggleSolution(button, solutionId) {
    const solution = document.getElementById(solutionId);
    solution.classList.toggle('show');
    button.textContent = solution.classList.contains('show') ? 'Hide Solution' : 'Show Solution';
}

// PDF viewer fullscreen toggle
function toggleFullscreen() {
    const pdfViewer = document.getElementById('pdfViewer');
    if (!document.fullscreenElement) {
        pdfViewer.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}