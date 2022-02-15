// add data to local storage

const addToLocalStorage = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

export default addToLocalStorage;