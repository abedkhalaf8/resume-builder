function HomePage() {
const RelevantData = '2022';
  return (
    <div className="HomePage">
         <div>
             <h1>Hi-Tech Resume Builder</h1>
             <p>Build your Hi-tech CV ChikCHAK</p>
             <div className="ifUpToDate">
                 Relevant to {RelevantData}
             </div>
         </div>
    </div>
  );
}

export default HomePage;

