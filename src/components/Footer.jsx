import React from "react";
const date = new Date();
const year = date.getFullYear();
function Footer(){
    return <div className = "footer">
        <footer>
            <p>Copyright {year}</p>
        </footer>
    </div>
}

export default Footer;
