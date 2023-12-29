document.addEventListener("DOMContentLoaded", function() {
});

document.getElementById('contactFormButton').addEventListener('click', function() {
    var form = document.getElementById('contactFormPopOut');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
});  
