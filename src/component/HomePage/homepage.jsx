import UserInfo from "../UserInfo/userinfo"
import { useState } from "react";

function Homepage() {
  const RelevantData = '2022';
  return (
    <div className="HomePage">
        <header>
            <h1>Tech CV Builder</h1>
            <div className="ifUpToDate">
                 Relevant to {RelevantData}
            </div>
            {/* //& after i finish the important things */}
            <div className="DownloadsStats">
              Downloads Stats
            </div>
             {/* //& after i finish the important things */}
            <div className="AboutPage">
              About
            </div>
            <div>--------------------------------------------</div>
            <UserInfo />
        </header>
    </div>
  );
}

export default Homepage;



//? important things to to 
//& 1- finish adding the needing inputs 
//& 2- finish styling the pdf curretly 
//& 3- split component curretly


//& EXTRA
//? if i have time maybe to do a aboutPage to add routes to switch between pages
//? also to do mockapi for how much downlods
