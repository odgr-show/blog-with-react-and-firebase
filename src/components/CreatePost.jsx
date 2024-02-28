import React, { useState } from "react";

import "./CreatePost.scss";

export const CreatePost = () => {
    const [title, setTitle] = useState();
    const [postText, setPostText] = useState();

    const inputTitle = (e) => {
        setTitle(e.target.value);
    };

    const inputText = (e) => {
        setPostText(e.target.value);
    };

    const createPost = () => {
        console.log(title);
        console.log(postText);
    };

    return (
        <div className="postPage">
            <div className="postPage__container">
                <div className="postPage__inner">
                    <div className="postPage__item">
                        <h1>記事を投稿する</h1>
                        <div className="inputPost">
                            <div>タイトル</div>
                            <input
                                type="text"
                                placeholder="タイトルを記入"
                                onChange={inputTitle}
                            />
                        </div>
                        <div className="inputPost">
                            <div>投稿</div>
                            <textarea
                                placeholder="投稿内容を記入"
                                onChange={inputText}
                            ></textarea>
                        </div>
                        <button className="postButton" onClick={createPost}>
                            <span>投稿する</span>
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
