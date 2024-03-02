import React from "react";

import "./Home.scss";

export const Home = () => {
    return (
        <div className="homePage">
            <div className="homePage__container">
                <div className="homePage__inner">
                    <div className="homePage__header">
                        <h1>タイトル</h1>
                    </div>
                    <div className="postTextContainer">
                        今はReactの学習中です。これから頑張ってReactエンジニアエンジニアとして活躍していきたいと思います。
                    </div>
                    <div className="homePage__delBtn">
                        <h3>@ShinCode</h3>
                        <button className="delateButton">
                            <span>Delate</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1, 5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
