import { useState } from "react"
import "C:/Users/crisk/repos/Odin_CV-Application/CV-Application/src/styles/Experience-Info.css"
function Experience_Info(){
    const [job1, setJob1] = useState({company: "Company A", position: "Job A", duties: "A things...", datesEmployed: "2018 - 2020"});
    const [job2, setJob2] = useState({company: "Company B", position: "Job B", duties: "B things...", datesEmployed: "2020 - 2024"});
    const [job3, setJob3] = useState({company: "Company C", position: "Job C", duties: "C things...", datesEmployed: "2024 - Present"});

    const [activeDialog, setActiveDialog] = useState(null);

    // const openDialog = (id) => setActiveDialog(id);
    const closeDialog = () => setActiveDialog(null);

    const handleInputChange = (e) => {
        const {name, value} = e.target
        const dialogId = e.target.closest("dialog")?.id; 

        console.log("dialog id " + dialogId);
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
                    <div id="jobList">
                        <div id="job1">
                            <button id="job1" class="edit-btn" onClick={() => setActiveDialog('job1')}>Edit Job 1</button>
                            {activeDialog === "job1" && (
                            <dialog open onClose={() => setActiveDialog(null)}id="job1" class="form-modal">
                                <div>
                                    <form id="job1" class="job-form" method="dialog" id="form1" onSubmit={closeDialog}>
                                        Edit Job 1:
                                        <label>Company:</label>
                                        <input type="text" name="company" value={job1.company} onChange={handleInputChange}/>   
                                        <label>Position:</label>
                                        <input type="text" name="position" value={job1.position} onChange={handleInputChange}/>
                                        <label>Job Duties:</label>
                                        <input class="list-input" type="text" name="duties" value={job1.duties} onChange={handleInputChange}/>
                                        <label>Years Employed:</label>
                                        <input type="text" name="datesEmployed" value={job1.datesEmployed} onChange={handleInputChange} placeholder="2020 - 2024"/>
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

                        <button class="edit-btn" id="job2" onClick={() => setActiveDialog('job2')}>Edit Job 2</button>
                        <div id="job2">
                            {activeDialog === "job2" && (
                            <dialog open onClose={() => setActiveDialog(null)}id="job2" class="form-modal">
                                <div>
                                    <form class="job-form" method="dialog" id="form2" onSubmit={closeDialog}>
                                        Edit Job 2:
                                        <label>Company:</label>
                                        <input type="text" name="company" value={job2.company} onChange={handleInputChange}/>   
                                        <label>Position:</label>
                                        <input type="text" name="position" value={job2.position} onChange={handleInputChange}/>
                                        <label>Job Duties:</label>
                                        <input type="text" name="duties" value={job2.duties} onChange={handleInputChange}/>
                                        <label>Years Employed:</label>
                                        <input type="text" name="datesEmployed" value={job2.datesEmployed} onChange={handleInputChange} placeholder="2020 - 2024"/>
                                        <button type="submit">Close</button>
                                    </form>
                                </div>
                            </dialog>
                            )}
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

                        <button class="edit-btn" id="job3" onClick={() => setActiveDialog("job3")}>Edit Job 3</button>
                        <div id="job3">
                            {activeDialog === "job3" && (
                            <dialog open onClose={() => setActiveDialog(null)} id="job3" class="form-modal">
                                <div>
                                    <form method="dialog" id="form3" class="job-form" onSubmit={closeDialog}>
                                        Job 3:
                                        <label>Company:</label>
                                        <input type="text" name="company" value={job3.company} onChange={handleInputChange}/>   
                                        <label>Position:</label>
                                        <input type="text" name="position" value={job3.position} onChange={handleInputChange}/>
                                        <label>Job Duties:</label>
                                        <input className="list-input" type="text" name="duties" value={job3.duties} onChange={handleInputChange}/>
                                        <label>Years Employed:</label>
                                        <input type="text" name="datesEmployed" value={job3.datesEmployed} onChange={handleInputChange} placeholder="2020 - 2024"/>
                                        <button type="submit">Close</button>
                                    </form>
                                </div>
                            </dialog>
                            )}
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