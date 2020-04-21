document.addEventListener('DOMContentLoaded', async () => {
	const url = location.href;
	const urlSplit = url.split('/');
	const id = urlSplit[urlSplit.length - 1];
	const res = await fetch(`http://localhost:8080/businesses/${id}/reviews`);

	const { business } = await res.json();
	console.log(business);
	const reviewSection = document.querySelector('.review-section');
});
