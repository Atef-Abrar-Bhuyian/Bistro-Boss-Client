import React from "react";
import slide5 from "../../../assets/home/slide5.jpg";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const ItemsCard = ({ image, heading, details, item }) => {
  const { _id, name, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      // send Cart item to the database
      const cartItem = {
        menuID: _id,
        email: user.email,
        name,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "middel-center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You Are Not Logged In",
        text: "Please Login to Add to the Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#c7a169",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!",
        background: "#000",
        color: "#fff",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user To the Login Page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={slide5} alt={heading} className="rounded-xl w-full h-80" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{heading}</h2>
        <p>{details}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn text-yellow-600 border-0 border-b-2 border-white bg-transparent hover:border-b-2 hover:border-b-yellow-500"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
