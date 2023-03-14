import React from "react";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { Link, List, ListItem, Typography, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { color } from "@mui/system";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1024,
            lg: 1200,
            xl: 1536,
        },
    },
});
const Footer = () => {
    return (
        <Box>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "#111114",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        width: "80%",
                        display: "flex",
                        pt: "50px",
                        margin: "auto",
                        justifyContent: "space-between",
                        [theme.breakpoints.down("sm")]: {
                            flexDirection: "column",
                        },
                        // pb: "50px",
                    }}
                >
                    <Box
                        sx={{
                            width: "55%",
                            [theme.breakpoints.down("sm")]: {
                                width: "100%",
                                marginBottom: "30px",
                            },
                            display: "flex",
                            flexDirection: "column",
                            // justifyContent: "center",
                            // alignItems: "",
                        }}
                    >
                        <Typography variant="h5" sx={{ color: "white" }}>
                            О Компании
                        </Typography>
                        <Typography
                            sx={{
                                color: "gray",
                                fontFamily: "revert-layer",
                                "&:hover": {
                                    color: "#0099ff",
                                },
                                fontSize: "18px",
                            }}
                        >
                            "AN-3 Company - Завод по производству бетонных
                            изделий"
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "40%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            // alignItems: "center",
                            pb: "20px ",
                            [theme.breakpoints.down("sm")]: {
                                width: "100%",
                            },
                        }}
                    >
                        <Typography variant="h5" sx={{ color: "white" }}>
                            Контакты
                        </Typography>

                        <Typography
                            sx={{
                                color: "gray",
                                fontFamily: "revert-layer",
                                "&:hover": {
                                    color: "#0099ff",
                                },
                                fontSize: "18px",
                            }}
                        >
                            г. Астана, Промзона 6/2
                        </Typography>
                        <Typography
                            sx={{
                                color: "gray",
                                fontFamily: "revert-layer",
                                "&:hover": {
                                    color: "#0099ff",
                                },
                                fontSize: "18px",
                            }}
                        >
                            Телефон: +7 (700) 500 91 71
                        </Typography>
                        {/* <Typography
                            sx={{
                                color: "gray",
                                fontFamily: "revert-layer",
                                "&:hover": {
                                    color: "#0099ff",
                                },
                                fontSize: "18px",
                            }}
                        ></Typography> */}
                        {/* <Typography
                            sx={{
                                color: "gray",
                                fontFamily: "revert-layer",
                                "&:hover": {
                                    color: "#0099ff",
                                },
                                fontSize: "18px",
                            }}
                        >
                            <WhatsAppIcon /> WhatsApp
                        </Typography> */}
                        <Typography
                            sx={{
                                color: "gray",
                                fontFamily: "revert-layer",
                                "&:hover": {
                                    color: "#0099ff",
                                },
                                fontSize: "18px",
                            }}
                        >
                            Email: an3company@mail.ru
                        </Typography>
                        {/* <Typography
                            sx={{
                                color: "gray",
                                fontFamily: "revert-layer",
                                "&:hover": {
                                    color: "#0099ff",
                                },
                                fontSize: "18px",
                            }}
                        ></Typography> */}
                        <Box>
                            <List
                                className="icons"
                                sx={{
                                    display: "flex",
                                    width: "30%",
                                    [theme.breakpoints.down("md")]: {
                                        width: "15%",
                                    },
                                }}
                            >
                                <ListItem>
                                    <Link
                                        className="icon-instagram"
                                        // href="https://www.instagram.com/an3companykz/"
                                    >
                                        <WhatsAppIcon
                                            sx={{
                                                color: "gray",
                                                "&:hover": {
                                                    color: "#0099ff",
                                                },
                                            }}
                                        />
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        className="icon-instagram"
                                        href="https://www.instagram.com/an3companykz/"
                                    >
                                        <InstagramIcon
                                            sx={{
                                                color: "gray",
                                                "&:hover": {
                                                    color: "#0099ff",
                                                },
                                            }}
                                        />
                                    </Link>
                                </ListItem>

                                <ListItem>
                                    <Link
                                        className="icon-twitter"
                                        href="https://twitter.com/EpicGamesRU"
                                    >
                                        <TwitterIcon
                                            sx={{
                                                color: "gray",
                                                "&:hover": {
                                                    color: "#0099ff",
                                                },
                                            }}
                                        />
                                    </Link>
                                </ListItem>

                                <ListItem>
                                    <Link
                                        className="icon-facebook"
                                        href="https://www.facebook.com/epicgames/"
                                    >
                                        <FacebookIcon
                                            sx={{
                                                color: "gray",
                                                "&:hover": {
                                                    color: "#0099ff",
                                                },
                                            }}
                                        />
                                    </Link>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "80px",
                    paddingBottom: "50px",
                    paddingTop: "40px",
                    // borderTopWidth: "1px",
                    borderColor: "white",
                    backgroundColor: "#0a0a0a",
                    color: "white",
                    // borderTop: "3px solid black",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ fontSize: "`7px" }}>
                        © All Rights Reserved by AN-3 Company TOO
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
