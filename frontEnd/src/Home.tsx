import React, { useState, useEffect } from "react";
import { IoStatsChart } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import ThemeSwitcher from './component/ThemeSwitcher';
import { Link } from "react-router-dom";

export default function Home() {

    return (

        <div className="   items-center justify-center">
            <ThemeSwitcher title="Bulleyes" />

            {/* Contenu centré */}
            <div className="flex-grow mt-64 flex items-center justify-center ">
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
