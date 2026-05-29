import { useState } from "react"
import "C:/Users/crisk/repos/Odin_CV-Application/CV-Application/src/styles/Experience-Info.css"
function Experience_Info(){
    const [job1, setJob1] = useState({company: "Company A", position: "Job A", duties: "A things...", datesEmployed: "2018 - 2020"});
    const [job2, setJob2] = useState({company: "Company B", position: "Job B", duties: "B things...", datesEmployed: "2020 - 2024"});
    const [job3, setJob3] = useState({company: "Company C", position: "Job C", duties: "C things...", datesEmployed: "2024 - Present"});

    const [isHidden, setHidden] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target
        const dialogId = e.target.closest("dialog")?.id; 
        if(dialogId == "job1")
            setJob1((prevInfo) => ({...prevInfo, [name]: value }));
        else if(dialogId == "job2")
            setJob2((prevInfo) => ({...prevInfo, [name]: value }));
        else if(dialogId == "job3")
            setJob3((prevInfo) => ({...prevInfo, [name]: value }));
    };
    
    // we'll have a 'viewing' mode and an 'editing' mode
    const switchMode = (e) =>{
        e.preventDefault();
        setHidden(!isHidden);
    }
  
    return (
    <>
        <div class='education-section-container'>
            <dialog id="dialog2">
                <div className={`exp-info-form ${isHidden ? 'hidden' : ''}`}>
                    <form onSubmit={switchMode}>
                        Job 2:
                        <div className={`${isHidden ? 'hidden' : ''}`}>
                            <label>Company:</label>
                            <input type="text" name="company" value={job2.company} onChange={handleInputChange}/>   
                        </div>
                        <div className={`${isHidden ? 'hidden' : ''}`}>
                            <label>Position:</label>
                            <input type="text" name="position" value={job2.position} onChange={handleInputChange}/>
                        </div>
                        <div className={`${isHidden ? 'hidden' : ''}`}>
                            <label>Job Duties:</label>
                            <input type="text" name="duties" value={job2.duties} onChange={handleInputChange} placeholder="05/2026"/>
                        </div>
                        <div className={`${isHidden ? 'hidden' : ''}`}>
                            <label>Years Employed:</label>
                            <input type="text" name="datesEmployed" value={job2.datesEmployed} onChange={handleInputChange} placeholder="05/2026"/>
                        </div>
                        <div className={`${isHidden ? 'hidden' : ''}`}>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>
            
            <dialog>
                <div className={`exp-info-form ${isHidden ? 'hidden' : ''}`}>
                    <form onSubmit={switchMode}>
                        Job 3:
                        <div className={`${isHidden ? 'hidden' : ''}`}>
                            <label>Company:</label>
                            <input type="text" name="job3.company" value={job3.company} onChange={handleInputChange}/>   
                        </div>
                        <div className={`${isHidden ? 'hidden' : ''}`}>
                            <label>Position:</label>
                            <input type="text" name="job3.position" value={job3.position} onChange={handleInputChange}/>
                        </div>
                        <div className={`${isHidden ? 'hidden' : ''}`}>
                            <label>Job Duties:</label>
                            <input type="text" name="job3.duties" value={job3.duties} onChange={handleInputChange} placeholder="05/2026"/>
                        </div>
                        <div className={`${isHidden ? 'hidden' : ''}`}>
                            <label>Years Employed:</label>
                            <input type="text" name="job3.datesEmployed" value={job3.datesEmployed} onChange={handleInputChange} placeholder="05/2026"/>
                        </div>
                        <div className={`${isHidden ? 'hidden' : ''}`}>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>

            <div class='exp-info'>
                <div class="section-title-container">
                    <h2>Experience:</h2>
                </div>
                <div class="exp-info-display">
                    <div id="jobList">
                        <div>
                            <button id="job1" class="edit-btn" onClick={() => setIsOpen(true)}>Edit Job 1</button>
                            
                            {isOpen && ( 
                            <dialog open id="job1" class="form-modal">
                                <div>
                                    <form id="job1" class="job-form" method="dialog" id="form1" onSubmit={() => setIsOpen(false)}>
                                        Edit Job 1:
                                        <label>Company:</label>
                                        <input type="text" name="company" value={job1.company} onChange={handleInputChange}/>   
                                        <label>Position:</label>
                                        <input type="text" name="position" value={job1.position} onChange={handleInputChange}/>
                                        <label>Job Duties:</label>
                                        <input type="text" name="duties" value={job1.duties} onChange={handleInputChange} placeholder="05/2026"/>
                                        <label>Years Employed:</label>
                                        <input type="text" name="datesEmployed" value={job1.datesEmployed} onChange={handleInputChange} placeholder="05/2026"/>
                                        <button type="submit">Close</button>
                                    </form>
                                </div>
                            </dialog>
                            )}

                            <div class="info-job">
                                <div>
                                    <h3>• {job1.company}</h3>
                                </div>
                                <div>
                                    <h3>{job1.datesEmployed}</h3>
                                </div>
                            </div>
                            <div class="info-job-descr">
                                <h3><em>{job1.position}</em></h3>
                                <h4>{job1.duties}</h4>
                            </div>
                        </div>
                        <button class="edit-btn" id="job2" onClick={switchMode}>Edit Job 2</button>
                        <div id="job2">
                            <div class="info-job">
                                <div>
                                    <h3>• {job2.company}</h3>
                                </div>
                                <div>
                                    <h3>{job2.datesEmployed}</h3>
                                </div>
                            </div>
                            <div class="info-job-descr">
                                <h3><em>{job2.position}</em></h3>
                                <h4>{job2.duties}</h4>
                            </div>
                        </div>
                        <button class="edit-btn" id="job3" onClick={switchMode}>Edit Job 3</button>
                        <div id="job3">
                            <div class="info-job">
                                <div>
                                    <h3>• {job3.company}</h3>
                                </div>
                                <div>
                                    <h3>{job3.datesEmployed}</h3>
                                </div>
                            </div>
                            <div class="info-job-descr">
                                <h3><em>{job3.position}</em></h3>
                                <h4>{job3.duties}</h4>
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