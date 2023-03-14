import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import "../Navbar/Navbar.css";
import userLogo from "../../media/219983.png";
import navLogo from "../../media/logo-removebg-preview.png";
import proger from "../../media/proger.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { width } from "@mui/system";
import Sidebar from "../SideBar/Sidebar";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#31b787"),
    backgroundColor: "#31b787",
    "&:hover": {
        backgroundColor: "#27a378",
    },
}));

function Navbar() {
    const navigate = useNavigate();
    const {
        emailState,
        user: { email },
        password,
        emailError,
        passwordError,
        hasAccount,
        setPassword,
        setEmail,
        setHasAccount,
        handleLogin,
        handleSignup,
        handleLogout,
    } = useAuth();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [activeLog, setActiveLog] = useState(true);
    const [activeReg, setActiveReg] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [openMenu, setOpenMenu] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // console.log(email);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ pt: "10px ", pb: "10px" }}>
            {openMenu && <Sidebar setOpenMenu={setOpenMenu} />}
            <AppBar position="static" className="header">
                <Container
                    className="container"
                    maxWidth="xl"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                    }}
                >
                    <Toolbar
                        className="toolbar"
                        disableGutters
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            className="burgerMenu"
                            sx={{
                                display: { xs: "block", md: "none" },
                                margin: 0,
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={() => {
                                    // handleOpenNavMenu();
                                    setOpenMenu(true);
                                }}
                                color="inherit"
                                sx={{ display: { xs: "block", md: "none" } }}
                            >
                                <MenuIcon sx={{ color: "black" }} />
                            </IconButton>

                            {/* <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                <li
                                    className="headerLi"
                                    sx={{
                                        mx: 7,
                                    }}
                                >
                                    Контакты
                                </li>
                                <li
                                    className="headerLi"
                                    sx={{
                                        mx: 7,
                                    }}
                                >
                                    Вакансии
                                </li>
                                <li
                                    className="headerLi"
                                    sx={{
                                        mx: 7,
                                    }}
                                >
                                    О нас
                                </li>
                            </Menu> */}
                        </Box>

                        {/* <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            className="logo"
                            sx={{
                                display: { xs: "flex", md: "flex" },
                                fontWeight: 700,
                                fontSize: "28px",
                                color: "#31B787",
                                fontFamily: "Amaranth",
                                textDecoration: "none",
                                width: "30%",
                            }}
                        >
                            <img
                                style={{ width: "150px", height: "150px" }}
                                src={navLogo}
                                alt=""
                            />
                        </Typography> */}
                        <Box>
                            <img
                                style={{
                                    width: "130px",
                                    height: "130px",
                                    marginTop: "10px",
                                }}
                                onClick={() => navigate("/")}
                                src={navLogo}
                                alt=""
                            />
                        </Box>
                        <Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                className="logo"
                                sx={{
                                    fontSize: "20px",
                                    color: "gray",
                                    textDecoration: "none",
                                    width: "50px",
                                    fontFamily: "revert-layer",
                                }}
                            >
                                Завод по изготовлению брусчатки
                            </Typography>
                        </Box>

                        <ul
                            className="headerUl"
                            sx={{
                                width: "630px",
                                display: "flex",
                                pl: 12,
                            }}
                        >
                            <li
                                className="headerLi"
                                sx={{
                                    mx: 7,
                                }}
                                onClick={() => navigate("/product")}
                            >
                                Наши Продукты
                            </li>
                            <li
                                className="headerLi"
                                sx={{
                                    mx: 7,
                                }}
                                onClick={() => navigate("/contacts")}
                            >
                                Контакты
                            </li>
                            <li
                                className="headerLi"
                                sx={{
                                    mx: 7,
                                }}
                                onClick={() => navigate("/aboutus")}
                            >
                                О нас
                            </li>
                            <li
                                className="headerLi"
                                sx={{
                                    mx: 7,
                                }}
                                onClick={() => navigate("/certificate")}
                            >
                                Сертификаты
                            </li>
                        </ul>
                        <div
                            style={{
                                width: "48px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={email ? proger : userLogo}
                                alt="#"
                                onClick={email ? handleMenu : handleOpen}
                                style={{ cursor: "pointer" }}
                                width="50px"
                            />
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseMenu}
                            >
                                <MenuItem
                                    onClick={() => {
                                        handleCloseMenu();
                                        handleLogout();
                                    }}
                                >
                                    logout
                                </MenuItem>
                            </Menu>
                        </div>
                        <Tooltip title="Open settings">
                            <h3
                                onClick={handleOpenUserMenu}
                                style={{ display: "none" }}
                            >
                                Salam
                            </h3>
                        </Tooltip>
                        <Box sx={{ flexGrow: 0, display: "none" }}>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem
                                        key={setting}
                                        onClick={handleCloseUserMenu}
                                    >
                                        <Typography textAlign="center">
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* modal started --------------------------------------------- */}
            <Modal
                disableAutoFocus={true}
                open={open}
                sx={{ textAlign: "center" }}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal_content"
            >
                <Box className="navbarBox" sx={style}>
                    <span
                        className="modalTitle"
                        style={{
                            borderBottom: activeLog ? "2px solid #31b787" : "",
                            color: activeLog ? "#31b787" : "",
                        }}
                        onClick={() => {
                            setActiveLog(true);
                            setActiveReg(false);
                        }}
                    >
                        Вход
                    </span>
                    <span
                        className="modalTitle"
                        style={{
                            borderBottom: activeReg ? "2px solid #31b787" : "",
                            color: activeReg ? "#31b787" : "",
                        }}
                        onClick={() => {
                            setActiveReg(true);
                            setActiveLog(false);
                        }}
                    >
                        Регистрация
                    </span>
                    <Box
                        className="box-1 "
                        style={{
                            marginTop: "20px",
                            display: activeLog ? "block" : "none",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                // alignItems: "flex-end",
                                justifyContent: "center",
                                marginBottom: "20px",
                            }}
                        >
                            <AccountCircle
                                className="modalIcon"
                                sx={{ marginTop: "20px" }}
                            />
                            <TextField
                                label="Enter email"
                                variant="standard"
                                helperText={emailError}
                                value={emailState}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                sx={{ width: "100%" }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                // alignItems: "flex-end",
                                justifyContent: "center",
                                marginBottom: "20px",
                            }}
                        >
                            <VpnKeyIcon
                                className="modalIcon"
                                sx={{ marginTop: "20px" }}
                            />
                            <TextField
                                type="password"
                                label="Enter your password"
                                variant="standard"
                                value={password}
                                helperText={passwordError}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                sx={{ width: "100%" }}
                            />
                        </Box>
                        <ColorButton
                            variant="contained"
                            sx={{ color: "white", width: "60%" }}
                            onClick={() => {
                                handleLogin();
                            }}
                        >
                            Вход
                        </ColorButton>
                        <div style={{ marginTop: "20px" }}>
                            <p
                                style={{ color: "#0000EE", cursor: "pointer" }}
                                className="forgot-text"
                                onClick={() => {
                                    handleClose();
                                }}
                            >
                                Забыли пароль?
                            </p>
                        </div>
                    </Box>
                    <Box
                        className="box-2"
                        style={{
                            marginTop: "20px",
                            display: activeReg ? "block" : "none",
                        }}
                    >
                        {/* <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "center",
                                marginBottom: "20px",
                            }}
                        >
                            <AccountCircle className="modalIcon" />
                            <TextField
                                label="Enter username"
                                variant="standard"
                            />
                        </Box> */}
                        <Box
                            sx={{
                                display: "flex",
                                // alignItems: "flex-end",
                                justifyContent: "center",
                                marginBottom: "20px",
                            }}
                        >
                            <EmailIcon
                                className="modalIcon"
                                sx={{ marginTop: "20px" }}
                            />
                            <TextField
                                label="Enter your email"
                                variant="standard"
                                helperText={emailError}
                                value={emailState}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                sx={{ width: "100%" }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                // alignItems: "flex-end",
                                justifyContent: "center",
                                marginBottom: "20px",
                            }}
                        >
                            <VpnKeyIcon
                                className="modalIcon"
                                sx={{ marginTop: "20px" }}
                            />
                            <TextField
                                type="password"
                                label="Enter password"
                                variant="standard"
                                value={password}
                                helperText={passwordError}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                sx={{ width: "100%" }}
                            />
                        </Box>
                        {/* <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "center",
                                marginBottom: "20px",
                            }}
                        >
                            <VpnKeyIcon className="modalIcon" />
                            <TextField
                                type="password"
                                label="Confirm password"
                                variant="standard"
                            />
                        </Box> */}
                        <ColorButton
                            variant="contained"
                            sx={{ color: "white", width: "60%" }}
                            onClick={() => {
                                handleSignup();
                            }}
                        >
                            Регистрация
                        </ColorButton>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
export default Navbar;
