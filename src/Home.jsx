import { useNavigate } from "react-router-dom";

function Home({ products, search, setSearch, category, setCategory, user, deleteProduct }) {
  const navigate = useNavigate();

  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <nav className="navbar">
  <h2 className="logo">OLX Clone</h2>

  {user ? (
    <>
      <span style={{ marginRight: "15px" }}>Hello, {user.email}</span>
      <button
        className="login-btn"
        onClick={() => setUser(null)} 
      >
        Logout
      </button>
    </>
  ) : (
    <button
      className="login-btn"
      onClick={() => navigate("/")} 
    >
      Login
    </button>
  )}

  <button className="sell-btn" onClick={() => navigate("/post")}>
    Sell
  </button>
</nav>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="categories">
        <span onClick={() => setCategory("All")}>All</span>
        <span onClick={() => setCategory("Cars")}>Cars</span>
        <span onClick={() => setCategory("Bikes")}>Bikes</span>
        <span onClick={() => setCategory("Mobiles")}>Mobiles</span>
        <span onClick={() => setCategory("Furniture")}>Furniture</span>
        <span onClick={() => setCategory("Electronics")}>Electronics</span>
      </div>

      <h3 className="section-title">Fresh Recommendations</h3>

      <div className="product-grid">
        {filteredProducts.map((item) => (
          <div
            className="card"
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img src={item.image} alt={item.title} />
            <h4>{item.price}</h4>
            <p>{item.title}</p>
            <span>{item.location}</span>

            {user && item.user === user.email && (
              <div style={{ marginTop: "10px" }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/edit/${item.id}`);
                  }}
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    marginRight: "5px",
                    cursor: "pointer"
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteProduct(item.id);
                  }}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer"
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <h3 style={{ textAlign: "center" }}>No products found</h3>
        )}
      </div>
    </div>
  );
}

export default Home;