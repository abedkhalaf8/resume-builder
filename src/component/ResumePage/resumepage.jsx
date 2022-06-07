import UserInfo from "../UserInfo/userinfo";
function Homepage() {
  return (
    <div className="HomePage">
        <header>
            <div className="Home">
              Home Page
            </div>
            <div>--------------------------------------------</div>
            </header>
            <main>
            <UserInfo />
            </main>
    </div>
  );
}

export default Homepage;



