import axios from 'axios';

export const api = axios.create({baseURL: "https://v3.football.api-sports.io"});