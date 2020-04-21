document.addEventListener('DOMContentLoaded', async () => {
	// await the fetch call from the api backend
	try {
		const res = await fetch(`http://localhost:8080/businesses/1`);
		const { business } = await res.json();
		console.log(business);
	} catch (e) {
		console.error(e);
	}
});
