import { useState } from "react"
import "C:/Users/crisk/repos/Odin_CV-Application/CV-Application/src/styles/Experience-Info.css"
function Experience_Info(){
    const [info, setExpInfo] = useState({
        job1:{company: "Company A", position: "Job A", duties: "A things...", datesEmployed: "2018 - 2020"}, 
        job2:{company: "Company B", position: "Job B", duties: "B things...", datesEmployed: "2020-2024"},
        job3:{company: "Company C", position: "Job C", duties: "C things...", datesEmployed: "2024-Present"}})
    const [isHidden, setHidden] = useState(false);


    const handleInputChange = (e) => {
        const {name, value} = e.target
        setExpInfo((prevInfo) => ({...prevInfo, [name]: value }) )
    };
    // we'll have a 'viewing' mode and an 'editing' mode
    const switchMode = (e) =>{
        e.preventDefault();
        setHidden(!isHidden);
    }
    return (
    <>
        <div class='education-section-container'>
            <div className={`exp-info-form ${isHidden ? 'hidden' : ''}`}>
                <form onSubmit={switchMode}>
                    Job 1:
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Company:</label>
                        <input type="text" name="job1.company" value={info.job1.company} onChange={handleInputChange}/>   
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Position:</label>
                        <input type="text" name="job1.position" value={info.job1.position} onChange={handleInputChange}/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Job Duties:</label>
                        <input type="text" name="job1.duties" value={info.job1.duties} onChange={handleInputChange} placeholder="05/2026"/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Years Employed:</label>
                        <input type="text" name="job1.datesEmployed" value={info.job1.datesEmployed} onChange={handleInputChange} placeholder="05/2026"/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className={`exp-info-form ${isHidden ? 'hidden' : ''}`}>
                <form onSubmit={switchMode}>
                    Job 2:
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Company:</label>
                        <input type="text" name="job2.company" value={info.job2.company} onChange={handleInputChange}/>   
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Position:</label>
                        <input type="text" name="job2.position" value={info.job2.position} onChange={handleInputChange}/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Job Duties:</label>
                        <input type="text" name="job2.duties" value={info.job2.duties} onChange={handleInputChange} placeholder="05/2026"/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Years Employed:</label>
                        <input type="text" name="job2.datesEmployed" value={info.job2.datesEmployed} onChange={handleInputChange} placeholder="05/2026"/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className={`exp-info-form ${isHidden ? 'hidden' : ''}`}>
                <form onSubmit={switchMode}>
                    Job 3:
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Company:</label>
                        <input type="text" name="job3.company" value={info.job3.company} onChange={handleInputChange}/>   
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Position:</label>
                        <input type="text" name="job3.position" value={info.job3.position} onChange={handleInputChange}/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Job Duties:</label>
                        <input type="text" name="job3.duties" value={info.job3.duties} onChange={handleInputChange} placeholder="05/2026"/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Years Employed:</label>
                        <input type="text" name="job3.datesEmployed" value={info.job3.datesEmployed} onChange={handleInputChange} placeholder="05/2026"/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div class='exp-info'>
                <div class="section-title-container">
                    <h2>Experience:</h2>
                </div>
                <div class="exp-info-display">
                    <div id="jobList">
                        <button class="edit-btn"onClick={switchMode}>Edit Job 1</button>
                        <div id="job1">
                            <div class="info-job">
                                <div>
                                    <h3>• {info.job1.company}</h3>
                                </div>
                                <div>
                                    <h3>{info.job1.datesEmployed}</h3>
                                </div>
                            </div>
                            <div class="info-job-descr">
                                <h3><em>{info.job1.position}</em></h3>
                                <h4>{info.job1.duties}</h4>
                            </div>
                        </div>
                        <button class="edit-btn"onClick={switchMode}>Edit Job 2</button>
                        <div id="job2">
                            <div class="info-job">
                                <div>
                                    <h3>• {info.job2.company}</h3>
                                </div>
                                <div>
                                    <h3>{info.job2.datesEmployed}</h3>
                                </div>
                            </div>
                            <div class="info-job-descr">
                                <h3><em>{info.job2.position}</em></h3>
                                <h4>{info.job2.duties}</h4>
                            </div>
                        </div>
                        <button class="edit-btn" onClick={switchMode}>Edit Job 3</button>
                        <div id="job3">
                            <div class="info-job">
                                <div>
                                    <h3>• {info.job3.company}</h3>
                                </div>
                                <div>
                                    <h3>{info.job3.datesEmployed}</h3>
                                </div>
                            </div>
                            <div class="info-job-descr">
                                <h3><em>{info.job3.position}</em></h3>
                                <h4>{info.job3.duties}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>


    )
}


export default Experience_Info