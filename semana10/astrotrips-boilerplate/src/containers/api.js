import axios from "axios";

const baseURL = `https://us-central1-missao-newton.cloudfunctions.net/futureX/rafacazal/`;

export default axios.create({ baseURL });
