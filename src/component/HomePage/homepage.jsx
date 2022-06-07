import './homepage.css';

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
const RelevantData = '2022';
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
                  <p>Build your Hi-tech CV ChikCHAK</p>
                  <div className="ifUpToDate">
                       Relevant to {RelevantData}
                  </div>
                  <div className="GitHubRepoLink">
                       <a href="https://github.com/abedkhalaf8/resume-builder" target="_blank" rel="noopener noreferrer">
                       <label class="fa fa-github" style={{fontSize:"20px"}}> Website Project</label>
                       </a>
                  </div>
            </div>
            <main>
                   <div className="DownloadsStats">
                   {downloads} people used our cv builder
                  </div>
                   <div className="EnterResumePage">
                      <Link to="/ResumePage" className="ResumePage">ResumePage</Link>
                   </div>
            </main>
    </div>
  );
}

export default HomePage;

