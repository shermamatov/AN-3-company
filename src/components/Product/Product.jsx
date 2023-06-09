import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Product.scss";

import ProductList from "./ProductList/ProductList";
const Product = () => {
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
                            fontSize: "35px",
                            fontWeight: "500",
                            backgroundColor: "rgb(120,219,226,0.5)",
                        }}
                    >
                        ПРОДАЖА ТРОТУАРНОЙ ПЛИТКИ
                    </h2>
                    <button>WhatsApp</button>
                </div>
            </div>
            <div>
                <ProductList />
            </div>
            <div className="about_product_image">
                <h1>о нашей продукции</h1>
            </div>

            <div className="main_about_block">
                <Box
                // sx={{ width: "100%", backgroundColor: "rgb(02,02,02,0.2)" }}
                >
                    <div className="about_block1">
                        <div className="block1_img">
                            <img
                                src="https://azbi.kz/images/articles/12.jpg"
                                alt=""
                            />
                        </div>
                        <div className="block1_info">
                            <h2>Производство тротуарной плитки</h2>
                            <p>
                                Завод по производству мелкоштучных бетонных
                                изделий располагается 30 км от МКАД по
                                Калужскому шоссе. Он выпускает тротуарную плитку
                                – в каталоге более 10 форм и широкая палитра
                                цветов. Плитка применяется в собственных
                                проектах и реализуется под заказ. Мы осваиваем
                                крупные масштабы и производим маленькие партии в
                                уникальных цветах. Продукцию используют для
                                мощения тротуаров, площадей, автостоянок,
                                подъездных дорожек, тропинок в парках. Наша
                                плитка украшает несколько улиц в Москве и
                                области. Цена за м2 зависит от материла,
                                толщины, размера плитки. Продукция доставляется
                                спецтехникой из нашего автопарка или отгружается
                                для самовывоза.
                            </p>
                        </div>
                    </div>
                </Box>

                <div className="about_block2">
                    <h1>Преимущества плитки AN-3</h1>
                    <ul>
                        <li>точная геометрическая форма;</li>
                        <li>равномерные стыки после укладки;</li>
                        <li>простота монтажа;</li>
                        <li>простота ухода;</li>
                        <li>
                            высокая степень уплотнения бетонной смеси,
                            повышающая технические характеристики.
                        </li>
                    </ul>
                    <p>
                        Продукция соответствует ГОСТ 17608-2017 «Плиты бетонные
                        тротуарные. Технические условия» по показателям
                        прочности, морозостойкости, степени истираемости.
                        Качество плитки подтверждается сертификатами.
                        Ассортимент продукции регулярно пополняется и
                        расширяется. Мы умеем работать с крупными клиентами –
                        девелоперами, государственными организациями, районными
                        управами, муниципальными учреждениями. Оказываем
                        поддержку на всех этапах сотрудничества:
                    </p>
                    <ul>
                        <li>консультирование по выбору;</li>
                        <li>
                            расчет стоимости комплектации объекта материалами;
                        </li>
                        <li>
                            расчет сроков, планирование производства, логистика
                            поставок;
                        </li>
                        <li>техническое сопровождение процесса.</li>
                    </ul>
                    <p>
                        Мы предоставляем информационные материалы, техническое
                        описание продукции, сертификаты, рекомендации по
                        монтажу, образцы. Чтобы пройти первую консультацию,
                        позвоните по телефону или напишите на почту. Менеджер
                        свяжется с вами в тот же день.
                    </p>
                </div>
                <div className="about_block3"></div>
            </div>
        </div>
    );
};

export default Product;
