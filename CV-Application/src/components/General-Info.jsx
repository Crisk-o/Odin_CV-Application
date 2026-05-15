import { useState } from "react";
import "C:/Users/crisk/repos/Odin_CV-Application/CV-Application/src/styles/General-Info.css"
import phoneIcon from "/Users/crisk/repos/Odin_CV-Application/CV-Application/src/assets/lucide--phone.svg"
import mailIcon from "/Users/crisk/repos/Odin_CV-Application/CV-Application/src/assets/lucide--mail.svg"
function General_Info(){
    const[info, setGeneralInfo] = useState({name: "", lastName: "", email: "", phone: ""});
    const [isHidden, setHidden] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setGeneralInfo((prevInfo) => ({...prevInfo, [name]: value }) )
    };

    // we'll have a 'viewing' mode and an 'editing' mode
    const switchMode = (e) =>{
        e.preventDefault();
        setHidden(!isHidden);
    }
    return (
        <>
        <div class="general-info-container">
            <div className={`general-info-inputs ${isHidden ? 'hidden' : ''}`}>
                <form onSubmit={switchMode}>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>First Name:</label>
                        <input type="text" name="name" value={info.name} onChange={handleInputChange}/>   
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={info.lastName} onChange={handleInputChange}/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Email:</label>
                        <input type="email" name="email" value={info.email} onChange={handleInputChange} placeholder="example@email.com"/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <label>Phone Number:</label>
                        <input type="tel" name="phone" value={info.phone} onChange={handleInputChange}  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="123-456-7890"/>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ''}`}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className={`general-info`}>
                <div class="section-title-container">
                    <button onClick={switchMode}>Make Changes</button>
                    <h1>General Info:</h1>
                </div>
                <div class="info-display">
                    <div>
                        <h2>{info.name} {info.lastName}</h2>

                    </div>
                    <div class="info-phone">
                        <img src={mailIcon}></img>
                        <h3>{info.email}</h3>
                    </div>
                    <div class="info-phone">
                        <img src={phoneIcon}></img>
                        <h3>{info.phone}</h3>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}


export default General_Info;