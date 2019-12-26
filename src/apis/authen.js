export const logIn = () => {
  return new Promise((resolve, reject) => {
    let result = {
      role: 0,
      isLoggedIn: true
    };
    resolve(result);
  });
};
