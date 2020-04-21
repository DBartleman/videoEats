document.addEventListener('DOMContentLoaded', async () => {
	// get the url and split to get the business id
	const url = location.href;
	const urlSplit = url.split('/');
	const id = urlSplit[urlSplit.length - 1];

	try {
		// get a fetch request to the backend api for reviews
		const res = await fetch(`http://localhost:8080/businesses/${id}/reviews`);

		// destructure to get the reviews array of objects
		const { reviews } = await res.json();

		// render the reviews
		const reviewSection = document.querySelector('.review-section');

		const reviewCardsHTML = reviews.map(
			(review) => `
			<div class="card mt-2" id="review-${review.id}">
				<div class="card-body">
					<p class="card-text">${review.reviewText}</p>
					<p class="card-text">${review.User.userName}</p>
					<p class="card-text">${review.createdAt.slice(5, 10) + '-' + review.createdAt.slice(0, 4)}</p>
				</div>
			</div>
		`
		);
		// TODO: Ask Will to change some of the backend settings for createdAt so that it only shows the MM/DD/YYYY

		reviewSection.innerHTML = reviewCardsHTML.join('');
	} catch (err) {
		console.error(err);
	}
});
