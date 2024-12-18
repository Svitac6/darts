import React, { useState, useEffect } from "react";
import { IoStatsChart } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import ThemeSwitcher from './compoment/ThemeSwitcher';
import { Link } from "react-router-dom";

export default function Home() {

    return (

        <div className="h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
            <ThemeSwitcher title="Bulleyes" />

            {/* Contenu centré */}
            <div className="flex-grow flex items-center justify-center">
                <div className="flex justify-center gap-32">
                    <Link to="/games">
                        <TbTargetArrow
                            className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
                            style={{ color: "var(--icon-color)" }}
                        />
                    </Link>
                    <Link to="/player">
                        <IoMdContacts
                            className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
                            style={{ color: "var(--icon-color)" }}
                        />
                    </Link>
                    <Link to="/stats">
                        <IoStatsChart
                            className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
                            style={{ color: "var(--icon-color)" }}
                        />
                    </Link>
                    <Link to="/history">
                        <FaHistory
                            className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
                            style={{ color: "var(--icon-color)" }}
                        />
                    </Link>
                    <Link to="/settings">
                        <IoIosSettings
                            className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
                            style={{ color: "var(--icon-color)" }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
