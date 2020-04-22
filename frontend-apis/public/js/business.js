document.addEventListener('DOMContentLoaded', async () => {
	// get the url and split to get the business id
	const url = location.href;
	const urlSplit = url.split('/');
	const id = urlSplit[urlSplit.length - 1];

	// Handling the click event for write a review
	const writeReview = document.getElementById('write-a-review-button');
	writeReview.addEventListener('click', () => {
		location.href = url + '/write-a-review';
	});

	try {
		// get a fetch request to the backend api for reviews
		const res = await fetch(`http://localhost:8080/businesses/${id}/reviews`);

		// destructure to get the reviews array of objects
		const { reviews } = await res.json();

		// Finds the average of the ratings
		let ratingsArray = [];
		reviews.forEach((review) => {
			ratingsArray.push(parseInt(review.businessRating));
		});
		console.log(ratingsArray);
		const sumRating = ratingsArray.reduce((a, b) => {
			return a + b;
		}, 0);
		const averageRating = sumRating / ratingsArray.length;
		console.log(averageRating);
		const businessStars = document.querySelectorAll('.business-star');
		businessStars.forEach((star, index) => {
			if (averageRating > index) {
				star.classList.add('rated');
			} else {
				star.classList.remove('rated');
			}
		});
		document.querySelector('.stars-business').setAttribute('data-rating', averageRating);

		// render the reviews in cards
		const reviewSection = document.querySelector('.review-section');

		const reviewCardsHTML = reviews.map(
			(review) => `
			<div class="card mt-2" id="review-${review.id}">
				<div class="card-body">
					<div class="stars" data-rating="${review.businessRating}">
						<span class="star"></span>
						<span class="star"></span>
						<span class="star"></span>
						<span class="star"></span>
						<span class="star"></span>
					</div>
					<p class="card-text">${review.reviewText}</p>
					<p class="card-text">${review.User.userName}</p>
					<p class="card-text">${review.createdAt.slice(5, 10) + '-' + review.createdAt.slice(0, 4)}</p>
				</div>
			</div>
			`
		);
		reviewSection.innerHTML = reviewCardsHTML.join('');

		// Individual ratings from reviews
		reviews.forEach((review, index) => {
			const stars = document.querySelectorAll('.star');
			const rating = document.querySelector('.stars').getAttribute('data-rating');
			stars.forEach((star, index) => {
				if (rating > index) {
					star.classList.add('rated');
				} else {
					star.classList.remove('rated');
				}
			});
			document.querySelector('.stars').setAttribute('data-rating', rating);
		});
	} catch (err) {
		console.error(err);
	}
});
