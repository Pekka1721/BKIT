import React from "react";
import Header from "./header/header";
import Footer from "../footer/footer";

const Layout = ({children})=>{
    return(
    <> 
    <Header/>
    <main>
        {children}
    </main>
    <div>
<Footer/>
    </div>
    
    </>
     )
}

export default Layout;