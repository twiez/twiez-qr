document.getElementById('qrForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const qrInput = document.getElementById('qrInput');
    const qrImage = document.getElementById('qrImage');
    const qrValue = qrInput.value.trim();
    
    if (!qrValue) return;
    
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrValue)}`;
    qrImage.style.display = 'block';
});

document.getElementById('twiez-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'https://github.com/twiez';
});