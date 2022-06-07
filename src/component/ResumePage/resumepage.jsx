import UserInfo from "../UserInfo/userinfo";
function Homepage() {
  return (
    <div className="HomePage">
        <header>
            <h1>Tech CV Builder</h1>
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



