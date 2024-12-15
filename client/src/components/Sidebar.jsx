// Sidebar.jsx
import React, { useEffect, useState } from 'react';
import { Exam, ClockCounterClockwise, ChartDonut, BellSimple, Rss, CaretUpDown, List, CrownSimple, UserCircleGear, Lifebuoy, Power, Eyeglasses } from "@phosphor-icons/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../redux/userSlice';
import LoginScreen from './LoginScreen';



const Sidebar = ({ onVisibilityChange }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [whereIsLocated, setWhereIsLocated] = useState("dashboard");
    const [settingsVisible, setSettingsVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isLoginScreenActive, setIsLoginScreenActive] = useState(false)
    const user = useSelector((state) => state.user.user);
    const placeholderAvatar = "https://via.placeholder.com/40";

    useEffect(() => {
        if (onVisibilityChange) {
            onVisibilityChange(isVisible);
        }
    }, [isVisible, onVisibilityChange]);

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
        }
        else if (location.pathname.startsWith("/premium")) {
            setWhereIsLocated("premium");
        }
        else {
            setWhereIsLocated("dashboard");
        }
    }, [location.pathname]);

    const handleLogout = () => {
        dispatch(clearUser());
        window.location.href = 'http://localhost:3000/logout';
    };

    const truncateUsername = (username, maxLength = 10) => {
        if (!username) return "";
        return username.length > maxLength
            ? `${username.slice(0, maxLength - 2)}..`
            : username;
    };

    return (
        <>
            {!isVisible && (
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className="fixed z-20 py-4 text-white rounded top-4 left-4 md:hidden" // Visible only on small devices
                >
                    <List color="black" />
                </button>
            )}

            <div
                className={`fixed top-0 left-0 md:w-[30vw] sm:w-[35vw] lg:w-[25vw] xl:w-[22vw] 2xl:w-[17vw] w-screen bg-[#F8F6FF] h-screen p-5 border-r overflow-y-auto overflow-x-hidden z-10 transform transition-transform duration-300 ease-in-out ${isVisible ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-between my-4">
                    <h2 className="text-lg text-gray-600 inter">Procvičování </h2>
                    <button
                        onClick={() => setIsVisible(!isVisible)}
                        className="z-20 text-white rounded md:hidden" // Visible only on small devices
                    >
                        <List color="black" />
                    </button>
                </div>
                <div>
                    <div className={`w-full h-8 ${whereIsLocated === "testy" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                        onClick={() => navigate("/testy")}
                    >
                        <Exam size={20} />
                        <p className="text-sm inter">Testy</p>
                    </div>
                    <div className={`w-full h-8 ${whereIsLocated === "historie" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                        onClick={() => navigate("/historie")}
                    >
                        <ClockCounterClockwise size={20} />
                        <p className="text-sm inter">Historie testů</p>
                    </div>
                    <div className={`w-full h-8 ${whereIsLocated === "statistiky" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                        onClick={() => navigate("/statistiky")}
                    >
                        <ChartDonut size={20} />
                        <p className="text-sm inter">Statistiky</p>
                    </div>
                </div>
                <div className="my-4">
                    <h2 className="text-lg text-gray-600 inter">Nástroje </h2>
                </div>
                <div className={`w-full h-8 ${whereIsLocated === "notifikace" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                    onClick={() => navigate("/notifikace")}
                >
                    <BellSimple size={20} />
                    <p className="text-sm inter">Notifikace</p>
                </div>
                <div className={`w-full h-8 ${whereIsLocated === "novinky" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                    onClick={() => navigate("/novinky")}
                >
                    <Rss size={20} />
                    <p className="text-sm inter">Novinky</p>
                </div>
                <div className="absolute flex w-full h-16 bottom-6 gap-x2">
                    <div className="relative flex w-[80%]">
                        {user &&
                            (
                                <div className="w-10 h-10 mr-4 rounded-full">
                                    <img
                                        src={
                                            `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
                                        }
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full"
                                    />
                                </div>
                            )
                        }

                        <div>
                            <p className="font-semibold inter text-md">
                                {user?.username
                                    ? truncateUsername(user.username)
                                    : "Nepřihlášený"}
                            </p>

                            <p className="text-sm text-gray-500 inter">
                                {user
                                    ? `${truncateUsername(user.username)}#${user.discriminator}`
                                    : "Přihlas se do systému"}
                            </p>
                        </div>
                        <div className="absolute top-0 right-0"
                            onClick={() => setSettingsVisible(!settingsVisible)}
                        >
                            <CaretUpDown size={16} />
                        </div>
                        {settingsVisible && (
                            <div className={`w-full h-8 absolute -top-36  right-0`}>

                                <div className={`w-full h-8 ${whereIsLocated === "premium" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                                    onClick={() => navigate("/premium")}
                                >
                                    <CrownSimple size={20} />
                                    <p className="text-sm inter">Premium</p>
                                </div>
                                <div className={`w-full h-8 ${whereIsLocated === "nastaveni" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                                    onClick={() => navigate("/nastaveni")}
                                >
                                    <UserCircleGear size={20} />
                                    <p className="text-sm inter">Nastaveni</p>
                                </div>

                                <div className={`w-full h-8 ${whereIsLocated === "navody" ? "bg-[#F1EAFF]" : ""} flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                                    onClick={() => navigate("/navody")}
                                >
                                    <Lifebuoy size={20} />
                                    <p className="text-sm inter">Pomoc a návody</p>
                                </div>
                                {user && (
                                    <div className={`w-full h-8 flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                                        onClick={() => handleLogout()}
                                    >
                                        <Power size={20} />
                                        <p className="text-sm inter">Odhlásit se</p>
                                    </div>
                                )}
                                {!user && (
                                    <div className={`w-full h-8 flex items-center justify-start rounded-lg gap-x-2 hover:bg-[#F1EAFF]`}
                                        onClick={() => setIsLoginScreenActive(!isLoginScreenActive)}
                                    >
                                        <Eyeglasses size={20} />
                                        <p className="text-sm inter">Přihlásit se</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {isLoginScreenActive && (
                <div className="realtive">
                    <LoginScreen onClose={() => setIsLoginScreenActive(false)} />
                </div>
            )}
        </>
    );
};

export default Sidebar;
