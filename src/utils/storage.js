// Function to set an item in local storage
export const setLocalStorageItem = (value) => {
  localStorage.setItem("vastInfo", JSON.stringify(value));
};

// Function to get an item from local storage
export const getLocalStorageItem = () => {
  const item = localStorage.getItem("vastInfo");
  return item;
};

export const clearItemFromLocalStorage = () => {
  localStorage.removeItem("vastInfo");
};
