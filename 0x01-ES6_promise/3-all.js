export function uploadPhoto() {
	return Promise.resolve({
		status: 200,
		body: 'photo-profile-1',
	});
}

export function createUser() {
	return Promise.resolve({
		firstName: 'Guillaume',
		lastName: 'Salva',
	});
}

export default function  handleProfileSignup() {
	const promises = [uploadPhoto(), createUser()];
	Promise.all(promises)
		.then((results) => {
			const [photo, user] = results;
			console.log(photo.body, user.firstName, user.lastName);
		})
		.catch(() => {
			console.error('Signup system offline');
		});
}
