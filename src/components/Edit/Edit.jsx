import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext";

const Edit = () => {
    const [title, setTitle] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [material, setMaterial] = useState("");
    const [color, setColor] = useState("");
    const [img, setImg] = useState("");
    const {
        addProduct,
        getProduct,
        product,
        oneProduct,
        getOneProduct,
        editProduct,
        deleteProduct,
    } = useContext(productContext);
    const { id } = useParams();
    useEffect(() => {
        getOneProduct(id);
    }, []);
    useEffect(() => {
        setTitle(oneProduct.title);
        setSize(oneProduct.size);
        setPrice(oneProduct.price);
        setMaterial(oneProduct.material);
        setColor(oneProduct.color);
        setImg(oneProduct.img);
    }, [oneProduct]);
    function handleData() {
        let obj = {
            title,
            size,
            price,
            material,
            color,
            img,
        };
        editProduct(id, obj);
    }

    return (
        <div className="admin_block">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "300px",
                    margin: "auto",
                }}
                className="input_block"
            >
                <h1>EDIT</h1>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="title"
                    value={title}
                />

                <input
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="price"
                    value={price}
                />
                <input
                    type="text"
                    onChange={(e) => setMaterial(e.target.value)}
                    placeholder="material"
                    value={material}
                />
                <input
                    type="text"
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="color"
                    value={color}
                />
                <input
                    type="text"
                    onChange={(e) => setImg(e.target.value)}
                    placeholder="image"
                    value={img}
                />
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value="200*100*40мм">200*100*40мм</option>
                    <option value="200*100*60мм">200*100*60мм</option>
                    <option value="200*100*80мм">200*100*80мм</option>
                    <option value="200*100*100мм">200*100*100мм</option>
                </select>
                <button onClick={handleData}>edit</button>
            </div>
        </div>
    );
};

export default Edit;
