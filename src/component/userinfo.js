import jsPDF from "jspdf";
import { useState } from "react";

function UserInfo() {
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [github, setGithub] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [aboutU, setAboutU] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [technical, setTechnical] = useState('');
    const [languages, setLanguages] = useState('');
    const [volunteering, setVolunteering] = useState('');
  
    const generateCV = () => {
      const doc = new jsPDF();
      doc.text(10,10, fName);
      doc.text(20, 40, lName);
      doc.text(20, 60, role); 
      doc.text(20, 80, email);  
      doc.text(20, 100, phone);  
      doc.text(20, 120, github);  
      doc.text(20, 140, linkedin);  
      doc.text(20, 160, education);  
      doc.text(20, 180, aboutU);  
      doc.text(20, 200, experience);  
      doc.text(20, 220, technical);  
      doc.text(20, 240, languages);  
      doc.text(20, 260, volunteering); 
      doc.save(`${fName}_cv.pdf`);
    }
    
    return (
      <div className="UserInfo">
      <div>
        <label>First Name: </label>
        <input type="text" onChange={(e) => setFname(e.target.value)}/>
      </div>
      <div>
        <label>Last Name : </label>
        <input type="text" onChange={(e) => setLname(e.target.value)} />
      </div>
      <div>
        <label>Role: </label>
        <input type="text" onChange={(e) => setRole(e.target.value)} />
      </div>
      <div>
        <label>Email: </label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Phone: </label>
        <input type="text" onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label>Github Link: </label>
        <input type="text" onChange={(e) => setGithub(e.target.value)} />
      </div>
      <div>
        <label>Linkedin Link: </label>
        <input type="text" onChange={(e) => setLinkedin(e.target.value)} />
      </div>
      <div>
        <label>About Yourself: </label>
        <input type="text" onChange={(e) => setAboutU(e.target.value)} />
      </div>
      <div>
        <label>Education: </label>
        <input type="text" onChange={(e) => setEducation(e.target.value)} />
      </div>
      <div>
        <label>Experience: </label>
        <input type="text" onChange={(e) => setExperience(e.target.value)} />
      </div>
      <div>
        <label>Technical Skills: </label>
        <input type="text" onChange={(e) => setTechnical(e.target.value)} />
      </div>
      <div>
        <label>Languages: </label>
        <input type="text" onChange={(e) => setLanguages(e.target.value)} />
      </div>
      <div>
        <label>Volunteering: </label>
        <input type="text" onChange={(e) => setVolunteering(e.target.value)}/>
      </div>
      <div className="btn">
          <button type="button" onClick={generateCV}>generate your cv</button>
      </div>
      </div>
    );
  }
  
  export default UserInfo;
  