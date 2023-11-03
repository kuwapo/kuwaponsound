import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const workPageNavigate = () => {
        window.location.href = "https://note.com/kuwapon69";
    };

    const contactPageNavigate = () => {
        window.location.href =
            "https://docs.google.com/forms/d/e/1FAIpQLSfuqmY1F2PxgS6KI5yx-XJvIaJxn8FY71FDkB7E57bTbRlHMg/viewform";
    };
    return (
        <>
            <div className="title">
                <div className="title_text">KUWAPONG</div>
                <div className="title_text">SOUND</div>
                <div className="title_text">DESIGNS</div>
            </div>
            <div className="link">
                <div
                    className="link_text"
                    onClick={() => {
                        navigate("/info");
                    }}
                >
                    INFO
                </div>
                <div
                    className="link_text"
                    onClick={() => {
                        navigate("/profile");
                    }}
                >
                    PROFILE
                </div>
                <div className="link_text" onClick={workPageNavigate}>
                    WORK
                </div>
                <div
                    className="link_text"
                    onClick={() => {
                        window.location.href = "https://potofu.me/kuwapon";
                    }}
                >
                    LINK
                </div>
                <div className="link_text" onClick={contactPageNavigate}>
                    CONTACT
                </div>
            </div>
        </>
    );
};
