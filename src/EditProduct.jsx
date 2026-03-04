import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct({ products, updateProduct }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  const [form, setForm] = useState({
    title: product.title,
    price: product.price,
    location: product.location,
    image: product.image
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(product.id, form);
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="post-container">
      <div className="post-card">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit} className="post-form">
          <input name="title" value={form.title} onChange={handleChange} />
          <input name="price" value={form.price} onChange={handleChange} />
          <input name="location" value={form.location} onChange={handleChange} />
          <input name="image" value={form.image} onChange={handleChange} />
          <button type="submit" className="post-btn">Update Product</button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;