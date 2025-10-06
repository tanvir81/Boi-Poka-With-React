// const getStoredBook = () => {
//   const storedBookSTR = localStorage.getItem("readList");

//   if (storedBookSTR) {
//     const storedBookData = JSON.parse(storedBookSTR);
//     return storedBookData;
//   } else {
//     return [];
//   }
// };

// const addToStoreDB = (id) => {
//   const storedBookData = getStoredBook();

//   if (storedBookData.includes(id)) {
//     alert("This Id Already exist");
//   } else {
//     storedBookData.push(id);
//     const data = JSON.stringify(storedBookData);
//     localStorage.setItem("readList", data);
//   }
// };

// export { addToStoreDB, getStoredBook };
// Update
// src/Utility/addToDB.js

// 🟩 Existing functions (you already have)
const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    alert("This book is already in your Read List!");
  } else {
    storedBookData.push(id);
    localStorage.setItem("readList", JSON.stringify(storedBookData));
    alert("Book added to Read List!");
  }
};

// 🟨 New functions for WishList
const getStoredWishList = () => {
  const storedWishListSTR = localStorage.getItem("wishList");
  if (storedWishListSTR) {
    return JSON.parse(storedWishListSTR);
  } else {
    return [];
  }
};

const addToWishListDB = (id) => {
  const storedWishList = getStoredWishList();

  if (storedWishList.includes(id)) {
    alert("This book is already in your Wish List!");
  } else {
    storedWishList.push(id);
    localStorage.setItem("wishList", JSON.stringify(storedWishList));
    alert("Book added to Wish List!");
  }
};

export { addToStoreDB, getStoredBook, addToWishListDB, getStoredWishList };
