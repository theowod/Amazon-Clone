import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase functions(local)(frontend)
  // baseURL: "http://127.0.0.1:5001/clone-2024-52d0c/us-central1/api",
  // deployed version of firebase function(backend with function)
  baseURL: "https://api-bqsjeew4ga-uc.a.run.app",
  //deployed version of amazon server on render.com(backend with render)
  // baseURL: "https://amazon-api-deploy-ibq0.onrender.com/",
  //deployed on netlify
  // baseURL:"https://amazon-clone-frontend-new.netlify.app/",
});

export { axiosInstance };