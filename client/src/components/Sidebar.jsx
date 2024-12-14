// Sidebar.jsx
import React, { useEffect, useState } from 'react';
import { Exam, ClockCounterClockwise, ChartDonut, BellSimple, Rss, CaretUpDown } from "@phosphor-icons/react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [whereIsLocated, setWhereIsLocated] = useState("dashboard");
    const [settingsVisible, setSettingsVisible] = useState(false);

    useEffect(() => {
        if (location.pathname.startsWith("/testy")) {
            setWhereIsLocated("testy");
        } else if (location.pathname.startsWith("/historie")) {
            setWhereIsLocated("historie");
        } else if (location.pathname.startsWith("/statistiky")) {
            setWhereIsLocated("statistiky");
        } else if (location.pathname.startsWith("/notifikace")) {
            setWhereIsLocated("notifikace");
        } else if (location.pathname.startsWith("/novinky")) {
            setWhereIsLocated("novinky");
        } else if (location.pathname.startsWith("/nastaveni")) {
            setWhereIsLocated("nastaveni");
        } else if (location.pathname.startsWith("/navody")) {
            setWhereIsLocated("navody");
        } else {
            setWhereIsLocated("dashboard");
        }
    }, [location.pathname]);

    return (
        <div
        className="fixed top-0 left-0 md:w-[20vw] sm:w-[30vw] lg:w-[17.5vw] xl:w-[17vw] 2xl:w-[12vw] w-screen bg-[#F8F6FF] h-screen p-5 border-r-2 overflow-y-auto overflow-x-hidden z-10"
        >
            <div className="my-4">
                <h2 className="text-gray-600 inter text-lg">Procvičování </h2>
            </div>
            <div>
                <div className={`w-full h-8 ${whereIsLocated === "testy" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                    onClick={() => navigate("/testy")}
                >
                    <Exam size={20} />
                    <p className="inter text-sm">Testy</p>
                </div>
                <div className={`w-full h-8 ${whereIsLocated === "historie" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                    onClick={() => navigate("/historie")}
                >
                    <ClockCounterClockwise size={20} />
                    <p className="inter text-sm">Historie testů</p>
                </div>
                <div className={`w-full h-8 ${whereIsLocated === "statistiky" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                    onClick={() => navigate("/statistiky")}
                >
                    <ChartDonut size={20} />
                    <p className="inter text-sm">Statistiky</p>
                </div>
            </div>
            <div className="my-4">
                <h2 className="text-gray-600 inter text-lg">Nástroje </h2>
            </div>
            <div className={`w-full h-8 ${whereIsLocated === "notifikace" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                onClick={() => navigate("/notifikace")}
            >
                <BellSimple size={20} />
                <p className="inter text-sm">Notifikace</p>
            </div>
            <div className={`w-full h-8 ${whereIsLocated === "novinky" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                onClick={() => navigate("/novinky")}
            >
                <Rss size={20} />
                <p className="inter text-sm">Novinky</p>
            </div>
            <div className="absolute bottom-6 w-full h-16 flex gap-x2">
                <div className="relative flex w-[80%]">
                    <div className="w-10 h-10 rounded-full mr-4">
                        <img src="https://via.placeholder.com/40" alt="User Avatar" />
                    </div>
                    <div>
                        <p className="inter font-semibold text-md">Váš profil</p>
                        <p className="text-sm text-gray-500 inter">user@561</p>
                    </div>
                    <div className="absolute right-0 top-0"
                        onClick={() => setSettingsVisible(!settingsVisible)}
                    >
                        <CaretUpDown size={16} />
                    </div>
                    {settingsVisible && (
                        <div className="w-full h-8 absolute -top-28 right-0">
                            <div className={`w-full h-8 ${whereIsLocated === "nastaveni" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                                onClick={() => navigate("/nastaveni")}
                            >
                                <ChartDonut size={20} />
                                <p className="inter text-sm">Nastaveni</p>
                            </div>
                            <div className={`w-full h-8 ${whereIsLocated === "navody" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                                onClick={() => navigate("/navody")}
                            >
                                <ChartDonut size={20} />
                                <p className="inter text-sm">Pomoc a návody</p>
                            </div>
                            <div className={`w-full h-8 flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                                onClick={() => console.log("logout funkce")}
                            >
                                <ChartDonut size={20} />
                                <p className="inter text-sm">Odhlásit se</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
