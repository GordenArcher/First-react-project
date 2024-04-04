import './assets/CSS/header.css'
import Profile from "./assets/images/profile.jpeg"
function header(){

    const date = new Date()
    const hours = date.getHours()

    let timeOfDay

    if (hours <= 12) {
        timeOfDay = "Morning"
    }else if (hours >= 12 && hours <= 15) {
        timeOfDay = "Afternoon";
    }else{
        timeOfDay = "Evening";
    }


    return(
        <div className="header fixed" id="head-nav">
            <div className="nav_bar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <div className="logo">
                            <a href="#" className="logo_btn">
                                <span>G</span>
                                <span>-</span>
                                <span>K</span>
                                <span>A</span>
                                <span>N</span>
                                <span>A</span>
                                <span>D</span>
                                
                            </a>
                        </div>
                    </div>

                    <div className="nav_links">
                        <ul className="nav_">
                            <li><a href="#"> <i class="bi bi-house"></i> Home</a></li>
                            <li><a href="#about"> <i class="bi bi-person-check"></i> About</a></li>
                            <li><a href="#contact"> <i class="bi bi-telephone"></i>  Contact</a></li>
                        </ul>
                    </div>

                    <div className="time_date">
                    <h2>
                        Good {timeOfDay}! 
                        <i className='bi bi-clock-history'></i>
                    </h2>
                    </div>
                        

                    <div className="user_Profile">
                        <div className="profile_img">
                            <img src={Profile} alt="profile img" className="profileImg" />
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default header;