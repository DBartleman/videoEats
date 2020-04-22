const reviewForm = document.querySelector('.create-review');

reviewForm.addEventListener('submit', async (e) => {
	// prevents the default of the submit button
	e.preventDefault();

	try {
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
