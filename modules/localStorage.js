// add data to local storage

function addToLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

export default addToLocalStorage;