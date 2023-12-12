import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "5db3719e1c3c497db56bb1422b96fd88",
  },
});
