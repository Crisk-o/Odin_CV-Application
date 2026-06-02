// A section to add your educational experience (school name, title of study and date of study)
import { useState } from "react";
import "../styles/Education-Info.css"
function Education_Info(){
    const [info, setEducationInfo] = useState({schoolName: "University of Whatever", schoolLocation: "Some City", major: "Bachelor of Science, Computer Science", gradDate: "01/2001"});
    const [isHidden, setHidden] = useState(false);


    const handleInputChange = (e) => {
        const {name, value} = e.target
        setEducationInfo((prevInfo) => ({...prevInfo, [name]: value }) )
    };
    // we'll have a 'viewing' mode and an 'editing' mode
    const switchMode = (e) =>{
        e.preventDefault();
        setHidden(!isHidden);
    }

    return (
    <>
        <div class='education-section-container'>
            <div className={`edu-info-form ${isHidden ? '' : 'hidden'}`}>
                <form onSubmit={switchMode}>
                        <label for="schoolName">School Name:</label>
                        <input type="text" name="schoolName" value={info.schoolName} onChange={handleInputChange}/>   
                        <label>School Location:</label>
                        <input type="text" name="schoolLocation" value={info.schoolLocation} onChange={handleInputChange}/>
                        <label for="major">Degree Earned:</label>
                        <input type="text" name="major" value={info.major} onChange={handleInputChange}/>
                        <label for="gradDate">Graduation Date:</label>
                        <input type="text" name="gradDate"value={info.gradDate} onChange={handleInputChange} placeholder="05/2026"/>
                        <button type="submit">Submit</button>
                </form>
            </div>
            <div class='edu-info'>
                <div class="section-title-container">
                    <div>
                        <button class={`edit-btn no-print`}onClick={switchMode}>Edit Section</button>
                    </div>
                    <h2>Education:</h2>
                </div>
                <div class="edu-info-display">
                    <div class="info-school">
                        <p>• <strong>{info.schoolName}</strong>, {info.schoolLocation}</p>
                        <h4 style={{color: "#40465e"}}>— <em>{info.major}</em></h4>
                    </div>
                    <div class="info-school-date">
                        <h4> {info.gradDate}</h4>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Education_Info