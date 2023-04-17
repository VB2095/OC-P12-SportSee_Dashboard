import axios from "axios";

export const getUserInfos = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${id}`);
    console.log("User From GetData.js :", typeof response.data, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserActivities = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/activity`
    );
    console.log("Activity From GetData.js :", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserAverage = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    console.log("Average From GetData.js :", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserPerformance = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/performance`
    );
    console.log("Performance From GetData.js :", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
