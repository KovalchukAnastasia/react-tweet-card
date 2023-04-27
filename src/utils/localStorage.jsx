export const getLocalStorage = (localStorageOutput) => {
  return JSON.parse(localStorage.getItem(localStorageOutput));
};

export const setLocalStorage = (data, localStorageInput) =>
  localStorage.setItem(localStorageInput, JSON.stringify(data));
