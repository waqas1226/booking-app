import React from "react";
import './Offerings.css';
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { Bed, CarRental, ChatBubbleOutline, Countertops, Flight, FullscreenExit, Language, LanguageOutlined, NotificationsNone, Search } from "@mui/icons-material";
import { List } from "@mui/material";
import pic from '../../../hotal1.JPG';

const Offerings = () =>{
return(

<div className="Offerings">

<div className="rows df fdc">


<div className="city df al">
    <div className="card">
        <img src={pic} alt="pic" className="cityimg" />
        <h3>Lahore</h3>
        <span>12 Properties</span>
    </div>
    <div className="card">
        <img src={pic} alt="pic" className="cityimg" />
        <h3>Karachi</h3>
        <span>15 Properties</span>
    </div>
    <div className="card">
        <img src={pic} alt="pic" className="cityimg" />
        <h3>Islamabad</h3>
        <span>7 Properties</span>
    </div>
</div>


<div className="prptype df">
    <h2 className="titl">Browse by Type</h2>
    <div className="cards">
    <div className="carddetail">
        <img src={pic} alt="pic" className="cityimg" />
        <h3>Hotal</h3>
        <span>123 Hotals</span>
    </div>
    <div className="carddetail">
        <img src={pic} alt="pic" className="cityimg" />
        <h3>Apartments</h3>
        <span>123 Apartments</span>
    </div>
    <div className="carddetail">
        <img src={pic} alt="pic" className="cityimg" />
        <h3>Villas</h3>
        <span>123 Villas</span>
    </div>
    <div className="carddetail">
        <img src={pic} alt="pic" className="cityimg" />
        <h3>Resorts</h3>
        <span>123 Resorts</span>
    </div>
    <div className="carddetail">
        <img src={pic} alt="pic" className="cityimg" />
        <h3>Cabins</h3>
        <span>12 Cabins</span>
    </div>
    </div>
</div>



<div className="prptype df">
    <h2 className="titl">Featured</h2>
    <div className="cards">
    <div className="card">
        <img src={pic} alt="pic" className="cityimg" />
        <div className="carddetail">
        <h3>Perl Continental</h3>
        <span>Lahore</span>
        <h4>Starting from $100</h4>
        </div>

    </div>
    <div className="card">
        <img src={pic} alt="pic" className="cityimg" />
        <div className="carddetail">
        <h3>Perl Continental</h3>
        <span>Lahore</span>
        <h4>Starting from $100</h4>
        </div>
        
    </div>
    <div className="card">
        <img src={pic} alt="pic" className="cityimg" />
        <div className="carddetail">
        <h3>Perl Continental</h3>
        <span>Lahore</span>
        <h4>Starting from $100</h4>
        </div>
    </div>
    <div className="card">
        <img src={pic} alt="pic" className="cityimg" />
        <div className="carddetail">
        <h3>Perl Continental</h3>
        <span>Lahore</span>
        <h4>Starting from $100</h4>
        </div>
    </div>
    </div>
</div>
</div>
</div>
)
}

export default Offerings;