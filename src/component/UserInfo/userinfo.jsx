import '../UserInfo/userinfo.css';

import axios from "axios";
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
     
    const updateStats = async () => {
      const getdata = await axios.get(
        `https://629e63a88b939d3dc28112e1.mockapi.io/counter`
      );
      let downloads = getdata.data[0].downloadstats;
      let counter = {downloadstats: downloads + 1};
       await axios.put(
        `https://629e63a88b939d3dc28112e1.mockapi.io/counter/1`,
        counter
      );
    }
    
    const fillTheFields = () => {
     setFname('Abed')
     setLname('Khalaf')
     setRole('Web Developer')
     setEmail('example@example.com')
     setPhone('0500000000')
     setGithub('https://github.com/abedkhalaf8')
     setLinkedin('https://il.linkedin.com/in/example')
     setAboutU('Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze ')
     setEducation('2021-2022: Full-Stack Bootcamp, Appleseeds.\n• An intensive 6-months, 720 hours training program that encourages self-led learning and group')
     setExperience('2016-2021: Graphic Design')
     setTechnical('Front end: HTML5, CSS, JavaScript, ReactJs')
     setLanguages('English: Advanced| Hebrew: Fluent | Arabic: Native')
     setVolunteering('tijnse literatuur uit sinia, heeft één van de meer obscure latijnse woorden, consect');
    }
    const emptyTheFields = () => {
      setFname("")
      setLname("")
      setRole("")
      setEmail("")
      setPhone("")
      setGithub("")
      setLinkedin("")
      setAboutU("")
      setEducation("")
      setExperience("")
      setTechnical("")
      setLanguages("")
      setVolunteering("")
     }
    
    const CheckInputs = () => {
      let notEmpty = 0;
          if(fName !== ''){notEmpty++};
          if(lName !== ''){notEmpty++};
          if(role !== ''){notEmpty++};     
          if(email !== ''){notEmpty++};
          if(phone !== ''){notEmpty++};  
          if(github !== ''){notEmpty++};  
          if(linkedin !== ''){notEmpty++};    
          if(aboutU !== ''){notEmpty++};      
          if(education !== ''){notEmpty++};    
          if(experience !== ''){notEmpty++};     
          if(technical !== ''){notEmpty++};       
          if(languages !== ''){notEmpty++};       
          if(volunteering !== ''){notEmpty++};     
          if(notEmpty === 13){
            return(false);
          } else { 
            return(true);
        }
      }

      const generateCV = () => {
      updateStats();
      const doc = new jsPDF();
      // header title
      doc.setFontSize(13);
      doc.text(10, 15, `${fName} ${lName} – ${role}`);
     
      // personal information
      doc.setFontSize(7);
      doc.setFont('Lato-Regular', 'bold');
      doc.text(10, 25, "Personal Information");
      doc.setFont('Lato-Regular', 'normal');

      doc.text(10, 35, `Email: ${email}`);  
      doc.text(10, 40, `Phone number: ${phone}`);  
      doc.text(10, 45, `Github: ${github}`);  
      doc.text(10, 50, `Linkedin: ${linkedin}`);  

     // introduction
    //  doc.setFont('Lato-Regular', 'bold');
      doc.text(10, 75, "Introduction");
      doc.text(10, 85, aboutU);  
      
      // education
      doc.setFont('Lato-Regular', 'bold');
      doc.text(10, 103, "Education ");
      doc.text(10, 113, education);  
      doc.setFont('Lato-Regular', 'normal');


      // experience
      doc.setFont('Lato-Regular', 'bold');
      doc.text(10, 127, "Experience ");
      doc.text(10, 137, experience);  
      doc.setFont('Lato-Regular', 'normal');


      // technical
      doc.setFont('Lato-Regular', 'bold');
      doc.text(10, 220, "Technical ");
      doc.setFont('Lato-Regular', 'normal');
      doc.text(10, 225, technical);  


      // languages
      doc.setFont('Lato-Regular', 'bold');
      doc.text(10, 240, "Languages ");
      doc.setFont('Lato-Regular', 'normal');
      doc.text(10, 245, languages);  


      // volunteering
      doc.setFont('Lato-Regular', 'bold');
      doc.text(10, 260, "Volunteering");
      doc.setFont('Lato-Regular', 'normal');
      doc.text(10, 265, volunteering); 
      doc.save(`${fName}_cv.pdf`)
    }
    
    return (
      <div className="UserInfo">
        <div className="header">
        <div className="btn1">
          <button type="button" onClick={fillTheFields}>Fill Inputs Example</button>
      </div>
      <div className="btn2">
          <button type="button" onClick={emptyTheFields}>Blank Inputs</button>
      </div>
        </div>
       
      <main className="Info">
      <div>
        <label>First Name: </label>
        <input type="text" onChange={(e) => { setFname(e.target.value)}}  placeholder="Abed" value={fName}  />
      </div>
      <div>
        <label>Last Name : </label>
        <input type="text" onChange={(e) => setLname(e.target.value)}  placeholder="Khalaf"  value={lName} />
      </div>
      <div>
        <label>Role: </label>
        <input type="text" onChange={(e) => setRole(e.target.value)}  placeholder="Web Developer"  value={role} />
      </div>
      <div>
        <label>Email: </label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"  value={email} />
      </div>
      <div>
        <label>Phone: </label>
        <input type="text" onChange={(e) => setPhone(e.target.value)}  placeholder="0500000000"  value={phone} />
      </div>
      <div>
        <label>Github Link: </label>
        <input type="text" onChange={(e) => setGithub(e.target.value)}  placeholder="github.com/example"  value={github} />
      </div>
      <div>
        <label>Linkedin Link: </label>
        <input type="text" onChange={(e) => setLinkedin(e.target.value)} placeholder="linkedin.com/in/example"  value={linkedin} />
      </div>
      <div>
        <label>Technical Skills: </label>
        <input type="text" onChange={(e) => setTechnical(e.target.value)}   value={technical} />
      </div>
      <div>
        <label>Languages: </label>
        <input type="text" onChange={(e) => setLanguages(e.target.value)} placeholder="English, Arabic, Hebrew"  value={languages} />
      </div>
      <div>
        <label>Volunteering: </label>
        <input type="text" onChange={(e) => setVolunteering(e.target.value)}  value={volunteering} />
      </div>
      <div>
        <label>About Yourself: </label>
        <input type="text" onChange={(e) => setAboutU(e.target.value)}   value={aboutU} />
      </div>
      <div>
        <label>Education: </label>
        <input type="text" onChange={(e) => setEducation(e.target.value)}   value={education} />
      </div>
      <div>
        <label>Experience: </label>
        <input type="text" onChange={(e) => setExperience(e.target.value)}   value={experience} />
      </div>
      <div className="btn">
          <button type="button" onClick={generateCV} disabled={CheckInputs()}>generate your cv</button>
      </div>
      </main>
      </div>
    );
  }
  
  export default UserInfo;
  