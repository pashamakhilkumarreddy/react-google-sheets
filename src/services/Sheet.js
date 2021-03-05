import Api from './Api';

const addRow = ({ sheetId, data }) => {
  return Api().post(sheetId, data);
}

export {
  addRow,
}