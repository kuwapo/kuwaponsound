import React from "react";
import Img from "../../assets/icon.jpg";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
    const navigate = useNavigate();
    return (
        <div className="profile_main">
            <div className="profile">PROFILE</div>
            <div className="prifile_content">
                <div className="profile_text">
                    <img src={Img} alt="icon" className="profile_icon" />
                    <div>
                        <div className="profile_text_title">
                            くわぽんサウンドデザインズ
                        </div>
                        <div className="profile_text_main">代表：くわぽん</div>
                        <div className="profile_text_main">
                            サウンドデザイナー
                        </div>
                        <div className="profile_text_main">ゲーム開発者</div>
                    </div>
                </div>
                <div className="profile_sub">
                    <div className="profile_text_sub">
                        関西の地下音楽シーンでのバンド活動をしながら、ちんどん通信社に従事。
                    </div>
                    <div className="profile_text_sub">
                        震災〜コロナの影響で活動が収縮する中、個人のゲーム開発を開始する。
                    </div>
                    <div className="profile_text_sub">
                        スタジオしまづに加入しゲーム共同開発の経験から「効果音制作と実装」の面白さに溺れる。
                    </div>
                    <div className="profile_text_sub">
                        個人開発やインディーゲームのサウンドに貢献したいという想いから
                    </div>
                    <div className="profile_text_sub">
                        野性のサウンドデザイナーとしての活動を開始。
                    </div>
                </div>
            </div>
            <button
                className="button"
                onClick={() => {
                    navigate("/");
                }}
            >
                →Home
            </button>
        </div>
    );
};
