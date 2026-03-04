import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import PostProduct from "./PostProduct";
import EditProduct from "./EditProduct";
import Home from "./Home"; 
import iphone from "./assets/iphone.jpg";
import bike from "./assets/bike.jpg";
import sofa from "./assets/sofa.jpg";
import laptop from "./assets/laptop.jpg";
import bullet from "./assets/bullet.jpg";
import car from "./assets/car.jpg";
import tv from "./assets/tv.jpg";
import table from "./assets/tabel.jpg";
import hplaptop from "./assets/hplaptop.jpg";
import phone from "./assets/pnone.jpg";
import AuthPage from "./AuthPage"; 

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, title: "iPhone 13", price: "₹45,000", location: "Chennai", image: iphone, category: "Mobiles" },
    { id: 2, title: "Honda Activa", price: "₹60,000", location: "Coimbatore", image: bike, category: "Bikes" },
    { id: 3, title: "Sofa Set", price: "₹12,000", location: "Madurai", image: sofa, category: "Furniture" },
    { id: 4, title: "Dell Laptop", price: "₹30,000", location: "Salem", image: laptop, category: "Electronics" },
    { id: 5, title: "Royal Enfield Classic 350", price: "₹1,20,000", location: "Trichy", image: bullet, category: "Bikes" },
    { id: 6, title: "Samsung LED TV 42 inch", price: "₹18,000", location: "Erode", image: tv, category: "Electronics" },
    { id: 7, title: "Wooden Dining Table", price: "₹15,000", location: "Vellore", image: table, category: "Furniture" },
    { id: 8, title: "HP Gaming Laptop", price: "₹55,000", location: "Tirunelveli", image: hplaptop, category: "Electronics" },
    { id: 9, title: "Maruti Swift 2018", price: "₹4,50,000", location: "Chennai", image: car, category: "Cars" },
    { id: 10, title: "Mi Note 12 Pro", price: "₹14,000", location: "Kanchipuram", image: phone, category: "Mobiles" }
  ]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const updateProduct = (id, updated) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  };

  return (
    <Routes>
  {!user && (
    <Route
      path="/*"
      element={<AuthPage setUser={setUser} users={users} setUsers={setUsers} />}
    />
  )}

  {user && (
    <>
      <Route
        path="/"
        element={user ? (
          <Home
            products={products}
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            user={user}
            setUser={setUser}
            deleteProduct={deleteProduct}
          />
        ) : (
          <Navigate to="/" replace /> 
        )}
      />

      <Route path="/post" element={<PostProduct addProduct={addProduct} user={user} />} />
      <Route path="/product/:id" element={<ProductDetails products={products} deleteProduct={deleteProduct} user={user} />} />
      <Route path="/edit/:id" element={<EditProduct products={products} updateProduct={updateProduct} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )}
</Routes>
  );
}

export default App;