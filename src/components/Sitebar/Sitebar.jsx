import React from "react";
import { Link } from "react-router-dom";
import menu from "../../assets/svg/menu.svg";
import exchange from "../../assets/svg/exchange.svg";
import library from "../../assets/svg/library.svg";
import schedule from "../../assets/svg/schedule.svg";
import payout from "../../assets/svg/payout.svg";
import settings from "../../assets/svg/settings.svg";

import './sitebar.css'

const Sitebar = () => {
  return (
    <div className="sitebar">
      <Link>
        <img src={menu} alt="" />
        Yangi guruh
      </Link>
      <Link>
        <img src={library} alt="" />
        Library
      </Link>
      <Link>
        <img src={schedule} alt="" />
        Schedules
      </Link>
      <Link>
        <img src={payout} alt="" />
        Payouts
      </Link>
      <Link>
        <img src={exchange} alt="" />
        Exhchange
      </Link>
      <Link>
        <img src={settings} alt="" />
        Settings
      </Link>
    </div>
  );
};

export default Sitebar;
