import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook, getStoredWishList } from "../../Utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  // worst case
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    // 🟩 Read List
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);

    // 🟨 Wish List
    const storedWishData = getStoredWishList();
    const ConvertedWishList = storedWishData.map((id) => parseInt(id));
    const myWishList = data.filter((book) =>
      ConvertedWishList.includes(book.bookId)
    );
    setWishList(myWishList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
      console.log(sortedByPage);
    }
    if (type === "ratings") {
      const sortedByrating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByrating);
    }
  };

  return (
    <div>
      <details className="dropdown ">
        <summary className="btn m-1">sort by : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read {readList.length}</h2>

          {readList.map((b) => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>My Wish List ({wishList.length})</h2>
          {wishList.map((b) => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
