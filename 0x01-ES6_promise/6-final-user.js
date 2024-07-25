import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(filename);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise])
    .then((results) => {
      const formattedResults = results.map((result) => {
        if (result.status === 'fulfilled') {
          return { status: 'success', value: result.value };
        }
        return { status: 'error', reason: result.reason.message };
      });
      return formattedResults;
    });
}
