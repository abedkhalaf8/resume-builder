function HomePage() {


 //& at the end not right now 
const RelevantData = '2022';
  return (
    <div className="HomePage">
         <div>
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
              github link for the project repo
            </div>
       </header>
                 {/* link to  resumepage.jsx*/}
            <div className="EnterResumePage">
               Enter Resume Page 
            </div>
         </div>
    </div>
  );
}

export default HomePage;

