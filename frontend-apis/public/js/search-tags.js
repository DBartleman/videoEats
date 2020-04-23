document.addEventListener('DOMContentLoaded', async (e) => {
	const searchTagsField = document.getElementById('reviewTags');
	const tagResults = document.querySelector('.tags-results');
	const tagItems = document.querySelector('.tag-item');
	const selectedTags = document.querySelector('.selected-tags');
	function autoComplete(array, input) {
		return array.filter((tag) => {
			return tag.toLowerCase().includes(input.toLowerCase());
		});
	}
	try {
		// grabs all the tags from the backend
		const res = await fetch('http://localhost:8080/businesses/tags');
		const { tags } = await res.json();
		console.log(tags);
		let tagsArray = [];
		tags.forEach((tag) => {
			tagsArray.push(tag.type);
		});
		console.log(tagsArray);
		searchTagsField.addEventListener('keyup', (e) => {
			let data = autoComplete(tagsArray, e.target.value);
			if (!e.target.value) {
				tagResults.innerHTML = '';
				return;
			}
			const listOfTags = data.map(
				(element) => `
                <li class="tag-item">${element}</li>
            `
			);
			tagResults.innerHTML = listOfTags.join('');
		});
	} catch (err) {
		console.error(err);
	}
});
