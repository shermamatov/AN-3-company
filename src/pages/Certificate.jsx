import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import snim from "../media/snim.png";
import snim2 from "../media/snim2.png";
import snim3 from "../media/snim3.png";
import snim4 from "../media/snim4.png";
import "./Contacts.scss";
const Certificate = () => {
    return (
        <div>
            <div className="welcome_block">
                <img
                    src="https://all.accor.com/magazine/imagerie/1-619b.jpg"
                    alt=""
                    className="welcome_img"
                />
                <div className="welcome_header">
                    <h2
                        style={{
                            fontSize: "35px",
                            fontWeight: "500",
                            backgroundColor: "rgb(120,219,226,0.5)",
                        }}
                    >
                        Сертификаты
                    </h2>
                </div>
            </div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    pt: "50px",
                    pb: "50px",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "35px",
                        fontWeight: "500",
                        color: "#00899d;",
                        borderBottom: "2px solid #00899d;",
                    }}
                >
                    Наши благодарности
                </Typography>
            </Box>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                    pb: "50px",
                }}
                className="cert_img_block"
            >
                <img
                    style={{
                        width: "24%",
                        border: "2px solid black",
                        boxSizing: "border-box",
                    }}
                    src={snim}
                    alt=""
                />
                <img
                    style={{
                        width: "24%",
                        border: "2px solid black",
                        boxSizing: "border-box",
                    }}
                    src={snim2}
                    alt=""
                />
                <img
                    style={{
                        width: "24%",
                        border: "2px solid black",
                        boxSizing: "border-box",
                    }}
                    src={snim3}
                    alt=""
                />
                <img
                    style={{
                        width: "24%",
                        border: "2px solid black",
                        boxSizing: "border-box",
                    }}
                    src={snim4}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Certificate;
