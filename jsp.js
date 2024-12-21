// Prevent two-finger touchpad scrolling
document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

function showCategory(category) {
    // Hide all lists
    document.querySelectorAll('.lesson-list').forEach(list => {
        list.classList.remove('active-list');
    });
    
    // Show selected category
    document.getElementById(`${category}-list`).classList.add('active-list');
}

function toggleLesson(button) {
    const lessonContent = button.parentElement.nextElementSibling;
    const isHidden = lessonContent.style.display === 'none' || lessonContent.style.display === '';
    
    lessonContent.style.display = isHidden ? 'block' : 'none';
    button.textContent = isHidden ? 'Hide' : 'Show';
}

function toggleCorrection(button) {
    const correction = button.nextElementSibling;
    const isHidden = !correction.classList.contains('show');
    
    correction.classList.toggle('show');
    button.textContent = isHidden ? 'Hide Solution' : 'Show Solution';
    button.style.background = isHidden ? '#27ae60' : '#2ecc71';
}