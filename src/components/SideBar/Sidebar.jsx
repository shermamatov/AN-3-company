import { Menu, MenuItem } from "@mui/material";
import React from "react";
import "./Sidebar.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ setOpenMenu }) => {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <div className="close">
                <CloseIcon
                    fontSize="large"
                    onClick={() => setOpenMenu(false)}
                    sx={{ cursor: "pointer" }}
                />
            </div>
            <h3
                onClick={() => {
                    navigate("/");
                    setOpenMenu(false);
                }}
            >
                Главная
            </h3>
            <div className="line"></div>
            <h3
                onClick={() => {
                    navigate("/product");
                    setOpenMenu(false);
                }}
            >
                Наши Продукты
            </h3>
            <div className="line"></div>
            <h3
                onClick={() => {
                    navigate("/contacts");
                    setOpenMenu(false);
                }}
            >
                Контакты
            </h3>
            <div className="line"></div>
            <h3
                onClick={() => {
                    navigate("/aboutus");
                    setOpenMenu(false);
                }}
            >
                О нас
            </h3>
            <div className="line"></div>
            <h3
                onClick={() => {
                    navigate("/certificate");
                    setOpenMenu(false);
                }}
            >
                Сертификаты
            </h3>
        </div>
    );
};

export default Sidebar;
