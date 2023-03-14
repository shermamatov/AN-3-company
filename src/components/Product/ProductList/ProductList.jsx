import { Box, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { productContext } from "../../../contexts/ProductContext";
import ProductCard from "./ProductCard";
import "./ProductList.scss";

const ProductList = () => {
    const {
        addProduct,
        getProduct,
        product,
        oneEvent,
        getOneProduct,
        editProduct,
        deleteProduct,
    } = useContext(productContext);
    const {
        user: { email },
    } = useAuth();
    const ADMIN = "sultan4ik2003@mail.ru";
    useEffect(() => {
        getProduct();
    }, []);
    const navigate = useNavigate();
    return (
        <div className="product_list">
            <h1>тротуарная плитка</h1>
            {email && (
                <Button onClick={() => navigate("/admin")} variant="contained">
                    new product
                </Button>
            )}
            <Box
                sx={{
                    display: "grid",
                    // flexWrap: "wrap",
                    justifyContent: "space-between",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridGap: "30px",
                }}
                className="product_list_block"
            >
                {product?.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </Box>
        </div>
    );
};

export default ProductList;
