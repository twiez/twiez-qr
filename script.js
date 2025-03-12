document.getElementById('qrForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const qrInput = document.getElementById('qrInput');
    const qrImage = document.getElementById('qrImage');
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const qrValue = qrInput.value.trim();
    
    if (!qrValue) {
        alert('Please enter some text or URL');
        return;
    }
    
    qrCodeContainer.style.display = 'inline-block';
    qrImage.style.opacity = '0.5';

    
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&format=png&data=${encodeURIComponent(qrValue)}`;
    
    fetch(qrUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            const objectUrl = URL.createObjectURL(blob);
            qrImage.src = objectUrl;
            qrImage.style.opacity = '1';

            qrImage.onload = () => {
                URL.revokeObjectURL(objectUrl);
            };
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to generate QR code. Please try again.');
            qrCodeContainer.style.display = 'none';
        });
});

document.getElementById('twiez-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'https://github.com/twiez';
});

window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const textParam = urlParams.get('text');
    
    if (textParam) {
        const qrInput = document.getElementById('qrInput');
        qrInput.value = textParam;
        document.getElementById('qrForm').dispatchEvent(new Event('submit'));
    }
});
