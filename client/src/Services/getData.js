import axios from "axios";
import { UserQueryType } from "./userQueryType";
import {
  USER_PERFORMANCE,
  USER_AVERAGE_SESSIONS,
  USER_ACTIVITY,
  USER_MAIN_DATA,
} from "../data/mockData";

export const apiUrl = import.meta.env.VITE_API_URL;
export const appMode = import.meta.env.VITE_APP_MODE;

export const getUser = async (id, type) => {
  if (appMode === "development") {
    return await getUserMockedData(id, type);
  } else {
    return await getUserAxios(id, type);
  }
};

export const getUserAxios = async (id, type) => {
  const typeMap = {
    [UserQueryType.INFOS]: "/",
    [UserQueryType.ACTIVITY]: "/activity",
    [UserQueryType.AVERAGE]: "/average-sessions",
    [UserQueryType.PERFORMANCE]: "/performance",
  };
  const response = await axios.get(`${apiUrl}/user/${id}${typeMap[type]}`);
  return response.data;
};

export const getUserMockedData = async (id, type) => {
  const typeMap = {
    [UserQueryType.INFOS]: USER_MAIN_DATA,
    [UserQueryType.ACTIVITY]: USER_ACTIVITY,
    [UserQueryType.AVERAGE]: USER_AVERAGE_SESSIONS,
    [UserQueryType.PERFORMANCE]: USER_PERFORMANCE,
  };
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      const parseUserId = parseInt(id);
      const user = typeMap[type].find((user) => {
        if (type === UserQueryType.INFOS) return user.id === parseUserId;
        return user.userId === parseUserId;
      });
      resolve({ data: user });
    }, 1000);
  });
  return response;
};
