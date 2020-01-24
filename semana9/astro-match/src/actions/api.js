import axios from "axios";

const baseURL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Rafaela-Cazal`;

export default axios.create({ baseURL });
