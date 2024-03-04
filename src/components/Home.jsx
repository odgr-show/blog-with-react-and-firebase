import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import "./Home.scss";

export const Home = () => {
    const [postlist, setPostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, "posts"));
            // console.log(data);
            // console.log(data.docs);
            // console.log(
            //     data.docs.map((doc) => ({
            //         doc,
            //     }))
            // );
            // console.log(
            //     data.docs.map((doc) => ({
            //         ...doc.data(),
            //         id: doc.id,
            //     }))
            // );
            setPostList(
                data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            );
        };
        getPosts();
    });
    return (
        <div className="homePage">
            {postlist.map((post) => {
                return (
                    <div className="homePage__container" key={post.id}>
                        <div className="homePage__inner">
                            <div className="homePage__header">
                                <h1>{post.title}</h1>
                            </div>
                            <div className="postTextContainer">
                                {post.postText}
                            </div>
                            <div className="homePage__delBtn">
                                <h3>{post.author.username}</h3>
                                <button className="delateButton">
                                    <span>Delate</span>
                                    <svg
                                        width="13px"
                                        height="10px"
                                        viewBox="0 0 13 10"
                                    >
                                        <path d="M1, 5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
