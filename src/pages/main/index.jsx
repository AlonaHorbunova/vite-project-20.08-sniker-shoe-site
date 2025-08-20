import { useState, useEffect } from "react";
import { BASE_URL } from "../../context/cartContext";
import axios from "axios";

function Main() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchProducts() {
    try {
      const response = await axios.get(`${BASE_URL}/productData`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error occured when fetching products: ", error);
      setError("Не удалось загрузить товары.");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <h1>Товары</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {products.map(({ id, name, image, price }) => (
          <div key={id}>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <h2>Цена: {price}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
