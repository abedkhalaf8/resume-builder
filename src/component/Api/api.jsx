import axios from "axios";

const DownloadsStats = axios.create({
  baseURL: "https://629e63a88b939d3dc28112e1.mockapi.io/counter",
});

export default DownloadsStats;