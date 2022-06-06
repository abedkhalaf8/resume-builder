import UserInfo from "./userinfo"
function Homepage() {
  return (
    <div className="HomePage">
        <header>
            <h1>Tech CV Builder</h1>
            <div>--------------------------------------------</div>
            <UserInfo />
        </header>
    </div>
  );
}

export default Homepage;