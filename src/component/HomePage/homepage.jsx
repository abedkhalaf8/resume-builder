import { Link } from "react-router-dom";
function HomePage() {
const RelevantData = '2022';
  return (
    <div className="HomePage">
             <header>
                  <h1>Hi-Tech Resume Builder</h1>
                  <p>Build your Hi-tech CV ChikCHAK</p>
                  <div className="ifUpToDate">
                       Relevant to {RelevantData}
                  </div>
                  <div className="DownloadsStats">
                       Downloads Stats
                  </div>
                  <div className="GitHubRepoLink">
                       <a href="https://github.com/abedkhalaf8/resume-builder" target="_blank" rel="noopener noreferrer">
                       <label class="fa fa-github" style={{fontSize:"20px"}}> Website Project</label>
                       </a>
                  </div>
            </header>
            <main>
                   <div className="EnterResumePage">
                      <Link to="/ResumePage">ResumePage</Link>
                   </div>
            </main>
    </div>
  );
}

export default HomePage;

