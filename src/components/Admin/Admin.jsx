import React, { useContext, useState } from "react";
import { productContext } from "../../contexts/ProductContext";
import "./Admin.scss";
const Admin = () => {
    const [title, setTitle] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [material, setMaterial] = useState("");
    const [color, setColor] = useState("");
    const [img, setImg] = useState("");
    const { addProduct } = useContext(productContext);
    function handleData() {
        let obj = {
            title,
            size,
            price,
            material,
            color,
            img,
        };
        addProduct(obj);
    }

    return (
        <div className="admin_block">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "400px",
                    margin: "auto",
                }}
                className="input_block"
            >
                <h1>ADMIN</h1>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="title"
                />

                <input
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="price"
                />
                <input
                    type="text"
                    onChange={(e) => setMaterial(e.target.value)}
                    placeholder="material"
                />
                <input
                    type="text"
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="color"
                />
                <input
                    type="text"
                    onChange={(e) => setImg(e.target.value)}
                    placeholder="image"
                />
                <select onChange={(e) => setSize(e.target.value)}>
                    <option value="200*100*40мм">200*100*40мм</option>
                    <option value="200*100*60мм">200*100*60мм</option>
                    <option value="200*100*80мм">200*100*80мм</option>
                    <option value="200*100*100мм">200*100*100мм</option>
                </select>
                <button onClick={handleData}>add</button>
            </div>
        </div>
    );
};

export default Admin;
