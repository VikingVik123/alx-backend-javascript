import { uploadPhoto, createUser } from './utils';

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
