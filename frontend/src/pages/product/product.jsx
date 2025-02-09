import React from "react";
import "./product.css";
import { useEffect } from "react";
import { useGetProductsMutation } from "../../../Services/Redux/APIServices/apiSlice";
import { useState } from "react";
import { Loader } from "../../common_components/loaderComponent/Loader";
import { addItemToCart } from "../../../Services/Redux/CartData/CartDataSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Product = () => {
  const [books, setBooks] = useState([]);
  const [getProductsApi, { isLoading }] = useGetProductsMutation();
  const dispatch = useDispatch();
  const getProducts = async () => {
    try {
      const data = await getProductsApi().unwrap();
      setBooks(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = (id) => {
    let book = books.find((x) => x?.id === id);
    console.log(book);
    dispatch(
      addItemToCart({
        id: book?.id,
        name: book?.name,
        price: book?.price,
        productImage: book?.productImage,
      })
    );
    toast.success("Product Added to Cart!!!");
  };

  useEffect(() => {
    getProducts();
  }, []);
  // const books = [
  //   {
  //     id: 1,
  //     title: "The Three-Body Problem",
  //     author: "Liu Cixin",
  //     price: 10.99,
  //     image: "https://m.media-amazon.com/images/I/816DcUDR5HL._SL1500_.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "THE 48 LAWS OF POWER",
  //     author: "Robert Greene",
  //     price: 8.99,
  //     image: "https://m.media-amazon.com/images/I/61F-bq53kOL._SL1500_.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Focus on What Matters",
  //     author: "Khashayar Forouzfar",
  //     price: 12.99,
  //     image: "https://m.media-amazon.com/images/I/71cjI4kaaZL._SL1500_.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "The Psychology of Money",
  //     author: "Morgan Housel",
  //     price: 14.5,
  //     image: "https://m.media-amazon.com/images/I/81Dky+tD+pL._SL1500_.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Don't Believe Everything You Think",
  //     author: "Joseph Nguyen",
  //     price: 18.75,
  //     image: "https://m.media-amazon.com/images/I/715qi-cIbML._SL1500_.jpg",
  //   },
  // ];

  return (
    <div className="book-grid">
      <Loader showLoader={isLoading} />
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <h2>{book.name}</h2>
          <p>{book.description}</p>
          <p>${book.price}</p>
          <img src={book.productImage} alt={book.name} />
          <button className="buy-button">Buy</button>
          <br />
          <button className="cart-button" onClick={() => addToCart(book?.id)}>
            Add to Cart
          </button>
          <button className="like-button">
            <i className="fas fa-heart"></i>Like
          </button>
        </div>
      ))}
    </div>
  );
};
export default Product;
