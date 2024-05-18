import { create } from "apisauce";
//192.168.77.12 192.168.81.12
const api = create({
  baseURL: "http://192.168.244.231:1337",
  headers: {
    "X-API-Key":
      "4dfe469f712da5b0c65a9e0a9658f06561a7c448dea2ea6dbfb6363925f4ffd7c2950ca8f4f465c312ea750202b7f97af64932cfd64cb8b5e0e7dd563ed3884346b491e2b3632f6b12221bb6740c8a6aed3c1cb16f34963f8c6909c304c20be8ef874d73e2050af39d085a84580252ce965f10a593c5511bf90724d79e78df21",
  },
});

const getUserInfoData = async () => {
  try {
    const response = await api.get("/api/datas");
    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  }
};

const setUser = async (user) => {
  try {
    await api.post("/api/datas", { data: user });
    console.log("hi")
  } catch (error) {
    console.error("Error setting user data:", error);
    throw error;
  }
};

const getTruckerInfoData = async () => {
  try {
    const response = await api.get("/api/truckers");
    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  }
};

const setTruckerInfo = async (info) => {
  try {
    await api.post("/api/truckers", { data: info }).then((response) => {
      console.log("Data posted successfully:", response.data);
    });
  } catch (error) {
    console.error("Error setting user data:", error);
    throw error;
  }
};

const getProvedTrucker = async () => {
  try {
    const response = await api.get("/api/aproved-truckers");
    return response.data;
  } catch (error) {
    console.error("Error setting user data:", error);
    throw error;
  }
};

export default {
  getUserInfoData,
  setUser,
  setTruckerInfo,
  getTruckerInfoData,
  getProvedTrucker,
};
