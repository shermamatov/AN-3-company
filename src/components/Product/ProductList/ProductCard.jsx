import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { productContext } from "../../../contexts/ProductContext";
import "./ProductList.scss";
const ProductCard = ({ item }) => {
    const { deleteProduct } = useContext(productContext);
    const navigate = useNavigate();
    const {
        user: { email },
    } = useAuth();
    const ADMIN = "adik@mail.ru";
    return (
        <div className="prod_card">
            <div style={{ width: "100%" }}>
                <img src={item.img} alt="" width="100%" />
            </div>
            <div className="prod_card_body">
                <h3>{item.title}</h3>
                <div className="prod_card_body_info">
                    <p>размер: {item.size}</p>
                    <p>цвет: {item.color}</p>
                    <p>материал: {item.material}</p>
                </div>
                {email == ADMIN && (
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ marginRight: "10px" }}
                            onClick={() => navigate(`/edit/${item.id}`)}
                        >
                            edit
                        </Button>
                        <Button
                            color="error"
                            variant="contained"
                            onClick={() => deleteProduct(item.id)}
                        >
                            delete
                        </Button>
                    </div>
                )}
            </div>
            <Button color="primary">{item.price}/кв.м</Button>
            <button>{item.price} тенге/ кв.м</button>
        </div>
    );
};

export default ProductCard;
