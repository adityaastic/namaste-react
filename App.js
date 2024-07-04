import { ClassNames } from "@emotion/react";
import { backdropClasses } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";


const Header = ()=> {
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo"
             src="https://t3.ftcdn.net/jpg/00/91/82/14/360_F_91821486_8MfLdTeRKvLdaDt7YVr1gJMnjvU1WiAU.jpg"/>
            </div>
            <div className="nav-items">
             <ul>
             <li>Home</li>
             <li>About</li>
             <li>Login</li>
             <li>Cart</li>
             </ul>
            </div>
        </div>
    );
};

const styleCard = {
    backgroundColor:"#f0f0f0",
}


const RestaurantCard =(props)=>{
    return(
        <div className="res-card" style={{backgroundColor :"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisins}</h4>
            <h4> 4.3 star</h4>
            <h4>39 mins</h4>

        </div>
    );
};


const Body = ()=>{
    return (
        <div className="body">
            <div className="Search"> Search</div>
            <div className="res-container">
            <RestaurantCard resName="Magana Foods"
            cuisins="Biryani,North,India Asian"
            />
            <RestaurantCard  resName="KFC"
            cuisins="North,India Asian"/>
            

            </div>      
        </div>
    )
}

const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
          <body/>
        </div>
    )
}

    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(<AppLayout/>);