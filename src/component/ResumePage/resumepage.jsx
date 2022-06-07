import './resumepage.css';

import { Link } from "react-router-dom";
import UserInfo from "../UserInfo/userinfo";
function ResumePage() {
  return (
    <div className="HomePage">
        <header>
              <div className="Home">
                 <Link to="/" className="HomePage">Home</Link>
              </div>
       </header>
       <main>
          <UserInfo />
      </main>
    </div>
  );
}
export default ResumePage;




