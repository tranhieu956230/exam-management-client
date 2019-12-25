export const logIn = () => {
  return new Promise((resolve, reject) => {
    let result = {
      role: Math.floor(Math.random() * 2),
      isLoggedIn: true
    };
    resolve(result);
  });
};
