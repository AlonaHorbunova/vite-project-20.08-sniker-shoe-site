import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../context/cartContext";
import axios from "axios";
import ProductCard from "../../components/productCard";
import styles from "./styles.module.css";
import bannerImage from "../../assets/Banner.png";

function Main() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchProducts() {
    try {
      const response = await axios.get(`${BASE_URL}/productData`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error occurred when fetching products: ", error);
      setError("Не удалось загрузить товары.");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.bannerContainer}>
        <img src={bannerImage} alt="Banner" className={styles.bannerImage} />
      </div>
      <h1 className={styles.title}>Товары</h1>
      <div className={styles.line}></div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className={styles.productsContainer}>
        {products.map(({ id, name, image, price }) => (
          <ProductCard key={id} name={name} image={image} price={price} />
        ))}
      </div>
    </main>
  );
}

export default Main;
