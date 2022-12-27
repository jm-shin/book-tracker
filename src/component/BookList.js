import React, { useState, useEffect } from 'react';
import './BookList.css';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/v1/search/book.json?query=애자일&display=10&start=1', {
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID || "",
        "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET || "",
      }
    })
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="BookList">
      <h2>My Book Collection</h2>
      <ul>
        {books.items?.map(book => (
          <li key={book.isbn}>
            <h3>{book.title}</h3>
            <img src={book.image} alt="책 사진"/>
            <p>{book.author} | {book.publisher}</p>
            <p>도서가: {book.discount} 원</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
