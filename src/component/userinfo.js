import jsPDF from "jspdf";
import { useState } from "react";

function UserInfo() {
    const [fName, setFname] = useState('abed');
    const [lName, setLname] = useState('Khalaf');
    const [role, setRole] = useState('Web Developer');
    const [email, setEmail] = useState('Kfabdall@gmail.com');
    const [phone, setPhone] = useState('050000000');
    const [github, setGithub] = useState('gtihub.com/abed');
    const [linkedin, setLinkedin] = useState('linkedin.com/abed');
    const [aboutU, setAboutU] = useState('i love coding');
    const [education, setEducation] = useState('Open uni');
    const [experience, setExperience] = useState('gas station');
    const [technical, setTechnical] = useState('c#');
    const [languages, setLanguages] = useState('arabic');
    const [volunteering, setVolunteering] = useState('i didn');
  
    const generateCV = () => {
      const doc = new jsPDF();

      // header title
      doc.setFontSize(13);
      doc.text(10, 15, `${fName} ${lName} – ${role}`);
     
      // personal information
      doc.setFontSize(7);
      doc.text(10, 25, "Personal Information");
      doc.text(10, 40, `Email: ${email}`);  
      doc.text(10, 47, `Phone number: ${phone}`);  
      doc.text(10, 54, `Github: ${github}`);  
      doc.text(10, 61, `Linkedin: ${linkedin}`);  

     // introduction
      doc.text(10, 75, "Introduction");
      doc.text(10, 85, aboutU);  
      
      // education
      doc.text(10, 103, "Education ");
      doc.text(10, 113, education);  

      // experience
      doc.text(10, 127, "Experience ");
      doc.text(10, 137, experience);  

      // technical
      doc.text(10, 151, "Technical ");
      doc.text(10, 161, technical);  

      // languages
      doc.text(10, 175, "Languages ");
      doc.text(10, 185, languages);  

      // volunteering
      doc.text(10, 199, "Volunteering");
      doc.text(10, 309, volunteering); 
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
  