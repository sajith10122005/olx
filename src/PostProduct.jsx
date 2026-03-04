
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostProduct({ addProduct, user }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    category: "Mobiles",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  addProduct({ ...formData, user }); 
  navigate("/");
};

  return (
    <div className="post-container">
      <div className="post-card">
        <h2>Post New Product</h2>
        <form onSubmit={handleSubmit} className="post-form">
          <input name="title" placeholder="Title" onChange={handleChange} required />
          <input name="price" placeholder="Price" onChange={handleChange} required />
          <input name="location" placeholder="Location" onChange={handleChange} required />

          <select name="category" onChange={handleChange}>
            <option>Mobiles</option>
            <option>Bikes</option>
            <option>Cars</option>
            <option>Furniture</option>
            <option>Electronics</option>
          </select>

          <input name="image" placeholder="Image URL" onChange={handleChange} required />

          <button type="submit" className="post-btn">Post Product</button>
        </form>
      </div>
    </div>
  );
}

export default PostProduct;