document.getElementById('scanButton').addEventListener('click', function () {
    const codeInput = document.getElementById('codeInput').value.trim();
    const message = document.getElementById('message');

    // Validate that the input is exactly 5 digits
    if (/^\d{5}$/.test(codeInput)) {
        const filePath = `pdfs/${codeInput}.pdf`;

        // Check if the PDF file exists (this will only work if running a local server)
        fetch(filePath, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    window.open(filePath, '_blank');
                    message.textContent = '';
                } else {
                    message.textContent = 'PDF not found for this code.';
                }
            })
            .catch(() => {
                message.textContent = 'Error accessing the PDF.';
            });
    } else {
        message.textContent = 'Please enter a valid 5-digit code.';
    }
});
