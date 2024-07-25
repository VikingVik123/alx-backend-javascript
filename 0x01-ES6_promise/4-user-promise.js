export default function signUpUser(firstName, lastName) {
  firstName = firstName;
  lastName = lastName;

  return Promise.resolve({ firstName, lastName });
}
