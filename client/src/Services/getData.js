import axios from "axios";

export const getUserInfos = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${id}`);
    console.log("From GetData.js :", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
