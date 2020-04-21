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
		console.log(reviews);

		// render the reviews
		const reviewSection = document.querySelector('.review-section');

		const reviewCardsHTML = reviews.map(
			(review) => `
			<div class="card mt-2" id="review-${review.id}">
				<div class="card-body">
					<p class="card-text">${review.reviewText}</p>
					<p class="card-text">${review.userId}</p>
				</div>
			</div>
		`
		);

		reviewSection.innerHTML = reviewCardsHTML.join('');
	} catch (err) {
		console.error(err);
	}
});
