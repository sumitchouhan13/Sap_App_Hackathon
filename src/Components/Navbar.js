import React from "react";
import logo from "../SapnewLogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar-custom sticky-top navbar navbar-expand-lg navbar-light">
            <div className="container">

                <Link className="navbar-brand" to="#"><img className="logo" src={logo} alt="Sap_logo" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#f9ab00" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/predictor">Employee burnout predictor</Link>
                        </li>
                        <li className="nav-item">
                            <a className = "nav-link" style={{textDecoration : 'none'}} href = "https://www.sap.com/india/index.html?campaigncode=CRM-XP21-PPC-INNSBRABGG&source=ppc-apj-ao-dg_Brand_x_x_x_x-GOO-x-x&DFA=1&adchan=sem&campaign=APJ_IN_PureBrand_2021_Q1Q4_Google_Brand_SEAR_SAP&adgroup=Brand+-+Generic_exact&publisher=GOOGLE&adcr=sap+website&adpl=GOOGLE&adlid=71700000040748774&country=SG&language=EN&gclid=CjwKCAjw1uiEBhBzEiwAO9B_HSljqGoISlYhv263vhXs5OC3FqIEvxhNnHxuZBlqzVdXsnTWlOZfmhoCHgEQAvD_BwE&gclsrc=aw.ds" target = "_blank" rel="noopener noreferrer">SAP Link</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contributor">Contributors</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
