
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({ products, deleteProduct, user }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <h2>Product Not Found</h2>;

  const handleDelete = () => {
    deleteProduct(product.id);
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <img src={product.image} width="300" />
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
      <p>Location: {product.location}</p>

      {user && product.user === user.email && (
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handleDelete}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Delete Product
          </button>

          <button
            onClick={() => navigate(`/edit/${product.id}`)}
            style={{
              backgroundColor: "orange",
              color: "white",
              border: "none",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            Edit Product
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;