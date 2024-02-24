import userRepository from "../repositories/user.repository";

const gatAllUsers = async () => {
  try {
    const result = await userRepository.gatAllUsers();
    return {
      status: 200,
      data: result,
    };
  } catch (error) {
    return {
      status: 500,
      data: "error",
    };
  }
};

export default { gatAllUsers };
