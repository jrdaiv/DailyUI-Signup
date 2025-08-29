export const signupUser = async (data: { username: string; email: string; password: string }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "User created", user: data });
    }, 1000);
  });
};
