// A section to add your educational experience (school name, title of study and date of study)
import { useState } from "react";
import "C:/Users/crisk/repos/Odin_CV-Application/CV-Application/src/styles/Education-Info.css"
function Education_Info(){
    const [info, setEducationInfo] = useState({schoolName: "University of Whatever",major: "Computer Science", gradDate: "01/01/2001"});
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
            <div className={`edu-info-form ${isHidden ? 'hidden' : ''}`}>
                <form onSubmit={switchMode}>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>School Name:</label>
                        <input type="text" name="name" value={info.schoolName} onChange={handleInputChange}/>   
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Degree Earned:</label>
                        <input type="text" name="lastName" value={info.major} onChange={handleInputChange}/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Graduation Date:</label>
                        <input type="date" name="date" value={info.gradDate} onChange={handleInputChange} placeholder="05/2026"/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div class='edu-info'>
                <div class="section-title-container">
                    <button class="edit-btn"onClick={switchMode}>Edit Section</button>
                    <h1>Education:</h1>
                </div>
                <div class="edu-info-display">
                    <div class="info-school">
                        <h3>• {info.schoolName}</h3>
                        <h4>— <em>Bachelor's of Science, {info.major}</em></h4>
                    </div>
                    <div class="info-school-date">
                        <h3>• {info.gradDate}</h3>
                    </div>

                </div>
            </div>
        </div>
    </>
    )
}
export default Education_Info