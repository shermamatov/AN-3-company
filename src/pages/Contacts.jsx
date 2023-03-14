import React from "react";
import "./Contacts.scss";
const Contacts = () => {
    return (
        <div>
            <h1 className="contact_header">контакты</h1>
            <div className="contact_main_block">
                <div className="contact_body">
                    <h2> +7 (700) 500 91 71</h2>
                    <h2> г. Астана, Промзона 6/2</h2>
                    <h2>an3company@mail.ru</h2>
                </div>
                <div style={{ position: "relative", overflow: "hidden" }}>
                    <a
                        href="https://yandex.ru/maps/163/astana/?utm_medium=mapframe&utm_source=maps"
                        style={{
                            color: "#eee",
                            fontSize: "12px",
                            position: "absolute",
                            top: "0px",
                        }}
                    >
                        Астана
                    </a>
                    <a
                        href="https://yandex.ru/maps/163/astana/stops/stop__10011159/?ll=71.493280%2C51.198778&tab=reviews&utm_medium=mapframe&utm_source=maps&z=15.53"
                        style={{
                            color: "#eee",
                            fontSize: "12px",
                            position: "absolute",
                            top: "14px",
                        }}
                    >
                        ЕЦ-166/10 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=71.493280%2C51.198778&masstransit%5BstopId%5D=stop__10011159&mode=masstransit&tab=reviews&z=15.53"
                        width="100%"
                        height="400"
                        frameborder="1"
                        allowfullscreen="true"
                        style={{ position: "relative" }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
