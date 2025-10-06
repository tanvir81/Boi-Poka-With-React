import React, { use } from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    image,
    bookName,
    category,
    review,
    author,
    rating,
    tags,
    yearOfPublishing,
    publisher,
    bookId,
    totalPages,
  } = singleBook;

  //   {
  //     "bookId": 6,
  //     "bookName": "The Hobbit",
  //     "author": "J.R.R. Tolkien",
  //     "image": "https://i.ibb.co.com/xS8YvxL/81m-CE-uclx-L-UF1000-1000-QL80.jpg",
  //     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
  //     "totalPages": 310,
  //     "rating": 4.9,
  //     "category": "Fantasy",
  //     "tags": [
  //         "Adventure",
  //         "Epic"
  //     ],
  //     "publisher": "Allen & Unwin",
  //     "yearOfPublishing": 1937
  // }
  //   const data = use(bookPromise);
  //   console.log(data);
  console.log(singleBook);
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-full max-w-sm shadow-sm border p-6">
        <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
          <img className="h-[166px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-9">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title w-full">{bookName}</h2>
          <div className="badge badge-secondary">{yearOfPublishing}</div>
          <p> By : {publisher}</p>
          <p> page : {totalPages}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating}
              <FaRegStarHalfStroke />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
