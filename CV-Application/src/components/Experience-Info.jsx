import { useState } from "react"
import "C:/Users/crisk/repos/Odin_CV-Application/CV-Application/src/styles/Experience-Info.css"
function Experience_Info(){
    const [job1, setJob1] = useState({company: "Company A", position: "Job A", duties: {one: "Lorem ipsum dolor sit amet.", two: "Lorem ipsum dolor sit amet.", three: "Lorem ipsum dolor sit amet."}, datesEmployed: "2018 - 2020"});
    const [job2, setJob2] = useState({company: "Company B", position: "Job B", duties: {one: "Lorem ipsum dolor sit amet.", two: "Lorem ipsum dolor sit amet.", three: "Lorem ipsum dolor sit amet."}, datesEmployed: "2020 - 2024"});
    const [job3, setJob3] = useState({company: "Company C", position: "Job C", duties: {one: "Lorem ipsum dolor sit amet.", two: "Lorem ipsum dolor sit amet.", three: "Lorem ipsum dolor sit amet."}, datesEmployed: "2024 - Present"});

    const [activeDialog, setActiveDialog] = useState(null);

    const closeDialog = () => setActiveDialog(null);

    const handleDutyChange = (e) => {
        const { name, value } = e.target;
        const dialogId = e.target.closest("dialog")?.id; 
        if(dialogId == "job1")
            setJob1((prevInfo) => ({
                ...prevInfo,         // 1. Keep company, position, datesEmployed
                duties: {
                ...prevInfo.duties, // 2. Keep the other two duties safe
                [name]: value       // 3. Update the specific duty string
                }
            }));
        else if(dialogId == "job2")
            setJob2((prevInfo) => ({
                ...prevInfo,         // 1. Keep company, position, datesEmployed
                duties: {
                ...prevInfo.duties, // 2. Keep the other two duties safe
                [name]: value       // 3. Update the specific duty string
                }
            }));        
        else if(dialogId == "job3")
            setJob3((prevInfo) => ({
                ...prevInfo,         // 1. Keep company, position, datesEmployed
                duties: {
                ...prevInfo.duties, // 2. Keep the other two duties safe
                [name]: value       // 3. Update the specific duty string
                }
            }));
    };
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

  
    return (
    <>
        <div class='education-section-container'>
            <div class='exp-info'>
                <div class="section-title-container">
                    <h2>Experience:</h2>
                </div>
                <div class="exp-info-display">
                    <div>
                        <div id="job1">
                            <button id="job1" class={`edit-btn no-print`} onClick={() => setActiveDialog('job1')}>Edit Job 1</button>
                            {activeDialog === "job1" && (
                            <dialog open onClose={() => setActiveDialog(null)}id="job1" class="form-modal">
                                <div>
                                    <form id="job1" class="job-form" method="dialog" id="form1" onSubmit={closeDialog}>
                                        <p style={{"margin": 0}}>Edit Job 1</p>
                                        <label>Company:</label>
                                        <input type="text" name="company" value={job1.company} onChange={handleInputChange}/>   
                                        <label>Position:</label>
                                        <input type="text" name="position" value={job1.position} onChange={handleInputChange}/>
                                        <label>Job Duties:</label>
                                        <input type="text" name="one" value={job1.duties.one} onChange={handleDutyChange}/>
                                        <input type="text" name="two" value={job1.duties.two} onChange={handleDutyChange}/>
                                        <input type="text" name="three" value={job1.duties.three} onChange={handleDutyChange}/>
                                        <label>Years Employed:</label>
                                        <input type="text" name="datesEmployed" value={job1.datesEmployed} onChange={handleInputChange} placeholder="2020 - 2024"/>
                                        <button type="submit">Close</button>
                                    </form>
                                </div>
                            </dialog>
                            )}
                            <div class="info-job">
                                <div>
                                    <h4>• {job1.company}</h4>
                                </div>
                                <div>
                                    <h4>{job1.datesEmployed}</h4>
                                </div>
                            </div>
                            <div class="info-job-descr">
                                <h4><em>{job1.position}</em></h4>
                                <ul class="duties-list">
                                    <li>{job1.duties.one}</li>
                                    <li>{job1.duties.two}</li>
                                    <li>{job1.duties.three}</li>
                                </ul>
                            </div>
                        </div>

                        <button class={`edit-btn no-print`} id="job2" onClick={() => setActiveDialog('job2')}>Edit Job 2</button>
                        <div id="job2">
                            {activeDialog === "job2" && (
                            <dialog open onClose={() => setActiveDialog(null)}id="job2" class="form-modal">
                                <div>
                                    <form class="job-form" method="dialog" id="form2" onSubmit={closeDialog}>
                                        <p style={{"margin": 0}}>Edit Job 2</p>
                                        <label>Company:</label>
                                        <input type="text" name="company" value={job2.company} onChange={handleInputChange}/>   
                                        <label>Position:</label>
                                        <input type="text" name="position" value={job2.position} onChange={handleInputChange}/>
                                        <label>Job Duties:</label>
                                        <input type="text" name="one" value={job2.duties.one} onChange={handleDutyChange}/>
                                        <input type="text" name="two" value={job2.duties.two} onChange={handleDutyChange}/>
                                        <input type="text" name="three" value={job2.duties.three} onChange={handleDutyChange}/>
                                        <label>Years Employed:</label>
                                        <input type="text" name="datesEmployed" value={job2.datesEmployed} onChange={handleInputChange} placeholder="2020 - 2024"/>
                                        <button type="submit">Close</button>
                                    </form>
                                </div>
                            </dialog>
                            )}
                            <div class="info-job">
                                <div>
                                    <h4>• {job2.company}</h4>
                                </div>
                                <div>
                                    <h4>{job2.datesEmployed}</h4>
                                </div>
                            </div>
                            <div class="info-job-descr">
                                <h4><em>{job2.position}</em></h4>
                                <ul class="duties-list">
                                    <li>{job2.duties.one}</li>
                                    <li>{job2.duties.two}</li>
                                    <li>{job2.duties.three}</li>
                                </ul>
                            </div>
                        </div>

                        <button class={`edit-btn no-print`} id="job3" onClick={() => setActiveDialog("job3")}>Edit Job 3</button>
                        <div id="job3">
                            {activeDialog === "job3" && (
                            <dialog open onClose={() => setActiveDialog(null)} id="job3" class="form-modal">
                                <div>
                                    <form method="dialog" id="form3" class="job-form" onSubmit={closeDialog}>
                                        <p style={{"margin": 0}}>Edit Job 3</p>
                                        <label>Company:</label>
                                        <input type="text" name="company" value={job3.company} onChange={handleInputChange}/>   
                                        <label>Position:</label>
                                        <input type="text" name="position" value={job3.position} onChange={handleInputChange}/>
                                        <label>Job Duties:</label>
                                        <input type="text" name="one" value={job3.duties.one} onChange={handleDutyChange}/>
                                        <input type="text" name="two" value={job3.duties.two} onChange={handleDutyChange}/>
                                        <input type="text" name="three" value={job3.duties.three} onChange={handleDutyChange}/>
                                        <label>Years Employed:</label>
                                        <input type="text" name="datesEmployed" value={job3.datesEmployed} onChange={handleInputChange} placeholder="2020 - 2024"/>
                                        <button type="submit">Close</button>
                                    </form>
                                </div>
                            </dialog>
                            )}
                            <div class="info-job">
                                <div>
                                    <h4>• {job3.company}</h4>
                                </div>
                                <div>
                                    <h4>{job3.datesEmployed}</h4>
                                </div>
                            </div>
                            <div class="info-job-descr">
                                <h4><em>{job3.position}</em></h4>
                                <ul class="duties-list" >
                                    <li>{job3.duties.one}</li>
                                    <li>{job3.duties.two}</li>
                                    <li>{job3.duties.three}</li>
                                </ul>
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