import { Box } from "@mui/material";
import React from "react";

const Picture = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                aliginItems: "center",
            }}
        >
            <Box sx={{ width: "90%" }}>
                <Box>
                    <img
                        style={{ width: "100%", height: "600px" }}
                        src="https://keramstroi.ru/a5ff2cdf87b24124d9bdfae367b36bbe.jpg"
                        alt="erorr"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Picture;
