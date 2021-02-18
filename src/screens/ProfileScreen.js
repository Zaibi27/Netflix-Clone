import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

import Nav from '../Nav';
import { auth } from "../firebase";
import "./ProfileScreen.css";
function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                    <div className="profileScreen__details">
                       <input type="text" value={user.email}/>
                        <div className="profileScreen__plans">
                            <h3>Plans (Current Plan: )</h3>
                            <p style={{ color: "gray" }}>Renewal date 04/03/2021</p>

                            <div className="profileScreen__plan">
                                <div className="plan">
                                    <p>Netflix Standard </p>
                                    <span className="profieScreen__planQuality">1080p</span>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <div className="profileScreen__plan">
                                <div className="plan">
                                    <p>Netflix Basic</p>
                                    <span className="profieScreen__planQuality">480p</span>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <div className="profileScreen__plan">
                                <div className="plan">
                                    <p>Netflix Premium </p>
                                    <span className="profieScreen__planQuality">4k+HDR</span>
                                </div>
                                <button>Subscribe</button>
                            </div>
                           

                            <button onClick={() => auth.signOut()} className="profileScreen__signOut" >Sign Out</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
