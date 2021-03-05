import axios from 'axios';

export default () => axios.create({
    baseURL: `https://sheet.best/api/sheets/`,
    headers: {
    },
  })
