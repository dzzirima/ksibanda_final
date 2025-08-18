//function to get current login user from local storage

export const getCurrentLoginUser = async () => {
  try {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error retrieving user from local storage:", error);
    return null;
  }
}