import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../Utility/addToDB";

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
const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  console.log(data);

  const { bookName, image, author, category, totalPages } = singleBook;

  const handleMarkAsRead = (id) => {
    //store with id
    //Where to Store
    //array or like collection
    // if book already exist show an alart
    // if book dose not exist push in the collection or array
    addToStoreDB(id);
  };
  return (
    <div className=" w-2/3 mx-auto">
      <img className="w-48" src={image} alt="" />
      <div>
        <h1>{bookName}</h1>
        <p>By: {author}</p>
        <p>Page: {totalPages}</p>
        <p>{category}</p>
        <button
          onClick={() => handleMarkAsRead(id)}
          className="btn btn-accent m-2"
        >
          Mark As Read
        </button>
        <button className="btn btn-info m-2">Add To WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
