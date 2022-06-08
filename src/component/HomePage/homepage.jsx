import './homepage.css';

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
const [downloads, setDownloads] = useState(null)

useEffect(() => {
     const updateStats = async () => {
          const getdata = await axios.get(
            `https://629e63a88b939d3dc28112e1.mockapi.io/counter`
          );
          setDownloads(getdata.data[0].downloadstats);
        }
        updateStats();
   });

  return (
    <div className="HomePage">
             <div className="NavBar">
                  <h1>Hi-Tech Resume Builder</h1>
                  <div className="ifUpToDate">
                  </div>
                  <div className="GitHubRepoLink">
                       <a href="https://github.com/abedkhalaf8/resume-builder" target="_blank" rel="noopener noreferrer">
                       <label class="fa fa-github" style={{fontSize:"50px"}}></label>
                       </a>
                  </div>
            </div>
            <main>
                   <div className="DownloadsStats">
                   <label className='downloads-stats'>{downloads} </label>People Used Our Resume Builder
                  </div>
                  <div className="DivOfResumePage">
                      <div className="EnterResumePage">
                         <Link to="/ResumePage" className="ResumePage">START BUILD YOUR RESUME</Link>
                     </div>
                  </div>
                   
            </main>
    </div>
  );
}

export default HomePage;

