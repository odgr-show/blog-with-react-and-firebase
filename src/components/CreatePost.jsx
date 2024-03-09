import { useState } from "react";

import "./CreatePost.scss";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
    const [title, setTitle] = useState();
    const [postText, setPostText] = useState();

    const navigate = useNavigate();

    const inputTitle = (e) => {
        setTitle(e.target.value);
    };

    const inputText = (e) => {
        setPostText(e.target.value);
    };

    const createPost = async () => {
        await addDoc(collection(db, "posts"), {
            title,
            postText,
            author: {
                username: auth.currentUser.displayName,
                id: auth.currentUser.uid,
            },
        });

        navigate("/");
    };

    return (
        <div className="postPage">
            <div className="postPage__container">
                <div className="postPage__inner">
                    <div className="postPage__item">
                        <h1>Submit an article</h1>
                        <div className="inputPost">
                            <div>Title</div>
                            <input
                                type="text"
                                placeholder="enter title"
                                onChange={inputTitle}
                            />
                        </div>
                        <div className="inputPost">
                            <div>Post</div>
                            <textarea
                                placeholder="Fill in the post content"
                                onChange={inputText}
                            ></textarea>
                        </div>
                        <button className="postButton" onClick={createPost}>
                            <span>Post</span>
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
