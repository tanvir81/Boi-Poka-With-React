import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);
  //   useEffect(() => {
  //     fetch("/booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAllBooks(data);
  //       });
  //   }, []);
  //   const bookPromise = fetch("./booksData.json").then((res) => res.json());
  return (
    <div className="px-4 md:px-8 lg:px-16 overflow-x-hidden">
      <h1 className="text-3xl text-center p-6 font-semibold">Books</h1>

      <Suspense>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
