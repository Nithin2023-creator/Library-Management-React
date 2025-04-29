import React, { useState } from 'react';

const CustomerLibraryPage = () => {
  const [books] = useState([
    { id: 1, title: 'Introduction to Algorithms', author: 'Cormen', price: 700 },
    { id: 2, title: 'Operating Systems Concepts', author: 'Silberschatz', price: 650 },
  ]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
  };

  const totalPrice = cart.reduce((sum, book) => sum + book.price, 0);

  return (
    <div className="customer-library-page">
      <h2>Customer - Library</h2>

      <h3>Available Books</h3>
<ul>
  {books.map(book => (
    <li key={book.id} className="book-card">
      <div className="book-details">
        <strong>{book.title}</strong><br/>
        <small>{book.author}</small><br/>
        <small>₹{book.price}</small>
      </div>
      <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
    </li>
  ))}
</ul>

<h3>Your Cart</h3>
<ul>
  {cart.length > 0 ? (
    cart.map((book, index) => (
      <li key={index} className="cart-item">
        <div className="book-details">
          {book.title}
        </div>
        ₹{book.price}
      </li>
    ))
  ) : (
    <div className="empty-cart">Cart is empty</div>
  )}
</ul>

<div className="total-price">Total: ₹{totalPrice}</div>

    </div>
  );
};

export default CustomerLibraryPage;
