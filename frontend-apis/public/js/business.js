document.addEventListener('DOMContentLoaded', async () => {
	const res = await fetch('http://localhost:8080/businesses/:id/reviews');

	const reviewSection = document.querySelector('.review-section');
});
