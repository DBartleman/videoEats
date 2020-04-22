document.addEventListener('DOMContentLoaded', async () => {
	const reviewForm = document.querySelector('.create-review');
	// Not using the business Search at this time **4/22/2020**
	// const businessSearch = document.getElementById('businessName');

	// Declare vairables for url
	const url = location.href;
	const urlSplit = url.split('/');
	const id = urlSplit[4];

	reviewForm.addEventListener('submit', async (e) => {
		// prevents the default of the submit button
		e.preventDefault();

		// Declare varibles to store and be parsed as a post method for the buisness
		const formData = new FormData(reviewForm);
		// const businessName = formData.get('businessName');
		const reviewText = formData.get('reviewText');
		// const bizRatings = formData.get('bizRatings');
		const body = {
			review: {
				businessId: id,
				reviewText,
				userId: 1,
				typeId: 2,
				upVoteCount: 0,
				downVoteCount: 0,
				businessRating: 4.5
			}
		};

		// TODO: Create the event listener keyup for the business name search. this is a stretch goal.

		// Need to somehow get the id
		try {
			const res = await fetch(`http://localhost:8080/businesses/${id}/reviews`, {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `${localStorage.getItem('VIDEO_EATS_ACCESS_TOKEN')}`
				}
			});
			if (!res.ok) {
				throw res;
			}

			window.location.href = `/businesses/${id}`;
		} catch (err) {
			if (err.status === 401) {
				window.location.href = '/log-in';
			}
			if (err.status >= 400 && err.status < 600) {
				const errorJSON = await err.json();
				const errorsContainer = document.querySelector('.errors-container');
				let errorsHtml = [
					`
                    <div class="alert alert-danger">
                        Something went wrong. Please try again.
                    </div>
                `
				];
				const { errors } = errorJSON;
				if (errors && Array.isArray(errors)) {
					errorsHtml = errors.map(
						(message) => `
                        <div class="alert alert-danger">
                            ${message.message}
                        </div>
                        `
					);
				}
				errorsContainer.innerHTML = errorsHtml.join('');
			} else {
				alert('Something went wrong. Please check your internet connection and try again!');
			}
		}
	});
});
