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
		console.log(reviews);

		// Finds the average of the ratings
		let ratingsArray = [];
		reviews.forEach((review) => {
			ratingsArray.push(parseInt(review.businessRating));
		});
		const sumRating = ratingsArray.reduce((a, b) => {
			return a + b;
		}, 0);
		const averageRating = sumRating / ratingsArray.length;
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

		// const reviewCardsHTML = reviews.map(
		// 	(review) => `
		// 		<div class="card mt-2" id="review-${review.id}">
		// 			<div class="card-body">
		// 				<div class="stars" data-rating="${review.businessRating}">
		// 					<span class="star"></span>
		// 					<span class="star"></span>
		// 					<span class="star"></span>
		// 					<span class="star"></span>
		// 					<span class="star"></span>
		// 				</div>
		// 				<p class="card-text">${review.reviewText}</p>
		// 				<p class="card-text">${review.User.userName}</p>
		// 				<p class="card-text">${review.createdAt.slice(5, 10) + '-' + review.createdAt.slice(0, 4)}</p>
		// 			</div>
		// 		</div>
		// 		`
		// );
		// reviewSection.innerHTML = reviewCardsHTML.join('');

		let reviewCardsHTML;
		reviews.forEach((review) => {
			console.log(review.id, review.typeId);
			if (review.typeId === 1) {
				console.log("i'm inside of type 1", review.typeId);
				reviewCardsHTML = reviews.map(
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
						<div>
							<iframe width="560" height="315" src=${review.videoLink}></iframe>
						</div>
						<p class="card-text">${review.User.userName}</p>
						<p class="card-text">${review.createdAt.slice(5, 10) + '-' + review.createdAt.slice(0, 4)}</p>
					</div>
				</div>
				`
				);
			} else if (review.typeId === 2 && review.videoLink === '') {
				console.log("i'm inside of type 2", review.typeId);
				console.log(
					(reviewCardsHTML = reviews.map(
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
					))
				);
			} else {
				console.log("i'm inside of type 3", review.typeId);
				reviewCardsHTML = reviews.map(
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
						<div>
							<iframe width="560" height="315" src=${review.videoLink}></iframe>
						</div>
						<p class="card-text">${review.User.userName}</p>
						<p class="card-text">${review.createdAt.slice(5, 10) + '-' + review.createdAt.slice(0, 4)}</p>
					</div>
				</div>
				`
				);
			}
		});
		reviewSection.innerHTML = reviewCardsHTML.join('');

		// Individual ratings from reviews
		const reviewCard = document.querySelectorAll('.card');
		reviewCard.forEach((review) => {
			const stars = review.querySelectorAll('.star');
			const rating = review.querySelector('.stars').getAttribute('data-rating');
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
