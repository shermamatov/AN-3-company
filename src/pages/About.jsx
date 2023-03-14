import { Typography } from "@mui/material";
import { Box, fontWeight, width } from "@mui/system";
import React from "react";

const About = () => {
    return (
        <div>
            <div className="welcome_block">
                <img
                    src="https://mobimg.b-cdn.net/v3/fetch/7f/7fb9fadc0caba88dcf4278165931debf.jpeg"
                    alt=""
                    className="welcome_img"
                />
                <div className="welcome_header">
                    <h2
                        style={{
                            fontSize: "32px",
                            fontWeight: "500",
                            backgroundColor: "rgb(120,219,226,0.5)",
                        }}
                    >
                        О КОМАНДЕ
                    </h2>
                    {/* <button>WhatsApp</button> */}
                </div>
            </div>
            <Box
                sx={{
                    pb: "50px",
                    pt: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
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
                    О Команде
                </Typography>

                <Typography
                    sx={{
                        pt: "20px",
                        color: "gray",
                        fontSize: "20px",
                        fontWeight: "400",
                        fontFamily: "revert-layer",
                    }}
                >
                    Гарантия качества с 2004 года - более 300 выполненных
                    проектов.
                </Typography>

                <Typography
                    sx={{
                        pt: "20px",
                        color: "gray",
                        fontSize: "16px",
                        width: { sm: "60%", xs: "80%" },
                        textAlign: "center",
                        fontFamily: "revert-layer",
                    }}
                >
                    Наша команда существует с 2022 года как AN-3 Company.
                    Опытные специалисты со своей зоной ответственности,
                    выполняющих руководящие функции. Они владеют управленческими
                    компетенциями и организуют производственные процессы/работу
                    на площадке, проектируют, подготавливают сметы, подбирают и
                    управляют командой.
                </Typography>
                <Typography
                    sx={{
                        fontSize: { md: "32px", xs: "26px" },
                        fontWeight: "700",
                        color: "#00899d;",
                        borderBottom: "2px solid #00899d;",
                        pt: "50px",
                    }}
                >
                    ПРЕИМУЩЕСТВО РАБОТЫ С НАМИ
                </Typography>
                <Box
                    sx={{
                        pt: "30px ",
                        width: { sm: "70%", xs: "90%" },
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                lg: "20%",
                                md: "30%",
                                sm: "45%",
                                xs: "90%",
                            },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: { sm: "30px", xs: "40px" },
                        }}
                    >
                        <img
                            src="http://pesticide.kg/wp-content/uploads/2021/07/img-1-3.png"
                            alt=""
                        />
                        <Typography sx={{ pt: "10px" }}>
                            Гибкие условия сотрудничества
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                lg: "20%",
                                md: "30%",
                                sm: "45%",
                                xs: "90%",
                            },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: { sm: "30px", xs: "40px" },
                        }}
                    >
                        <img
                            src="http://pesticide.kg/wp-content/uploads/2021/07/img-2-3.png"
                            alt=""
                        />
                        <Typography sx={{ pt: "10px" }}>
                            Приемлемые цены
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                lg: "20%",
                                md: "30%",
                                sm: "45%",
                                xs: "90%",
                            },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: { sm: "30px", xs: "40px" },
                        }}
                    >
                        <img
                            src="http://pesticide.kg/wp-content/uploads/2021/07/img-3-3.png"
                            alt=""
                        />
                        <Typography sx={{ pt: "10px" }}>
                            Индивидуальный подход к каждому клиенту
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                lg: "20%",
                                md: "30%",
                                sm: "45%",
                                xs: "90%",
                            },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: { sm: "30px", xs: "40px" },
                        }}
                    >
                        <img
                            src="http://pesticide.kg/wp-content/uploads/2021/07/img-4-3.png"
                            alt=""
                        />
                        <Typography sx={{ pt: "10px" }}>
                            Квалифицированная помощь клиентам
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                lg: "20%",
                                md: "30%",
                                sm: "45%",
                                xs: "90%",
                            },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: { sm: "30px", xs: "40px" },
                            marginTop: { md: "0px", xs: "30px" },
                        }}
                    >
                        <img
                            src="http://pesticide.kg/wp-content/uploads/2021/07/img-5-2.png"
                            alt=""
                        />
                        <Typography sx={{ pt: "10px" }}>
                            Постоянное расширение ассортимента
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "80%",
                    }}
                >
                    <img
                        style={{ width: "30%", pt: "20px" }}
                        src="https://krasivosti.pro/uploads/posts/2021-04/1618579272_34-krasivosti_pro-p-lev-na-dereve-lvi-krasivo-foto-40.jpg"
                        alt=""
                    />
                    <img
                        style={{ width: "30%" }}
                        src="https://krasivosti.pro/uploads/posts/2021-04/1618579272_34-krasivosti_pro-p-lev-na-dereve-lvi-krasivo-foto-40.jpg"
                        alt=""
                    />
                    <img
                        style={{ width: "30%", pt: "20px" }}
                        src="https://krasivosti.pro/uploads/posts/2021-04/1618579272_34-krasivosti_pro-p-lev-na-dereve-lvi-krasivo-foto-40.jpg"
                        alt=""
                    />
                </Box>
            </Box>
        </div>
    );
};

export default About;
