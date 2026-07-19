const ticketSelect = document.getElementById('tickets');
const payButton = document.getElementById('payButton');

// Update button text when ticket quantity changes
if (ticketSelect && payButton) {
    ticketSelect.addEventListener('change', (e) => {
        const quantity = e.target.value;
        const total = quantity * 25;
        payButton.textContent = `Pay Now ($${total})`;
    });

    // Simulate payment click and redirect to the questions page
    payButton.addEventListener('click', () => {
        payButton.textContent = "Processing Payment...";
        payButton.disabled = true;

        setTimeout(() => {
            // Redirects to your questionnaire file
            window.location.href = 'questions.html';
        }, 1500); 
    });
}
