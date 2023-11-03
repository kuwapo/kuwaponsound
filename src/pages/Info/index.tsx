import React from "react";
import "./style.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Info = () => {
    const navigate = useNavigate();
    return (
        <div className="info">
            <div className="text_title">INFOMATION</div>
            <div className="text_main_title">
                くわぽんサウンドデザインズは個人/小規模のインディーゲーム開発の
                サウンド中心に様々なコンテンツのサウンド制作を承っております。
            </div>
            <div className="content">
                <div className="text_head">
                    【個人/小規模ゲーム開発を応援しています】
                </div>
                <div className="text_main">
                    何かと予算に限りあるインディーゲーム開発においてオリジナルのサウンドアセットをサウンド制作会社に発注する事は中々難しいと思います。
                </div>
                <div className="text_main">
                    何より自分自身も小規模ゲーム開発を行っていますので痛いほどふところ事情は分かります!
                </div>
                <div className="text_main">
                    ゲーム用のサウンドライブラリも高額で手が出ない、、、かといってフリー素材もゲームの雰囲気に合わない!
                </div>
                <div className="text_main">
                    そんな小規模開発のサウンドのお困り事の駆け込み寺になりたいと思い採算度外視(!?)で、あなただけの特別なゲームのサウンドについてご相談できればと思います。
                </div>
            </div>
            <div className="content">
                <div className="text_head">
                    【サウンド制作の相談、見積もりは無料】
                </div>
                <div className="text_main">
                    ある程度のサウンド工数が決まっていましたら相談下さい!!
                    内容や条件によっては価格をばっくり破壊させていただきます。
                </div>
            </div>
            <div className="content">
                <div className="text_head">【対応メニュー】</div>
                <div className="text_main_main">▶効果音</div>
                <div className="text_main_sub">
                    シンセサイザーを使ったサウンドデザインから実際の音を録音加工したリアリティあるサウンドを1音から制作します
                </div>
                <div className="text_main_main">▶ボイスの録音/音声編集</div>
                <div className="text_main_sub">
                    声優さんの音声録音からノイズ除去の処理まで対応致します。
                </div>
                <div className="text_main_main">
                    ▶CRI ADXを使ったサウンド実装
                </div>
                <div className="text_main_sub">
                    ミドルウェアを使用したUnityへのサウンド実装を承ります
                </div>
                <div className="text_main_main">
                    ▶サウンドの音量、ラウドネス調整
                </div>
                <div className="text_main_sub">
                    オーディオファイルを業界基準のラウドネス値に調整します
                </div>
                <div className="text_main_main">
                    ▶楽曲制作のコンポーザー紹介
                </div>
                <div className="text_main_sub">
                    個性豊かなクリエイターを紹介致します。仲介料は一切頂きません。
                </div>
            </div>
            <div className="buttons">
                <button
                    className="button_home"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    →HOME
                </button>
                <button
                    className="button_contact"
                    onClick={() => {
                        window.location.href =
                            "https://docs.google.com/forms/d/e/1FAIpQLSfuqmY1F2PxgS6KI5yx-XJvIaJxn8FY71FDkB7E57bTbRlHMg/viewform";
                    }}
                >
                    →CONTACT
                </button>
            </div>
        </div>
    );
};
