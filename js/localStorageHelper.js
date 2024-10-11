window.localStorageHelper = {
    saveData: function (key, value) {
        localStorage.setItem(key, value);
    },
    getData: function (key) {
        return localStorage.getItem(key);
    },
    removeData: function (key) {
        localStorage.removeItem(key);
    }
};
