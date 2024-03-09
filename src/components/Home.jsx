import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";

import "./Home.scss";

export const Home = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, "posts"));
            setPostList(
                data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            );
        };
        getPosts();
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "posts", id));
    };

    return (
        <div className="homePage">
            {postList.map((post) => {
                return (
                    <div className="homePage__container" key={post.id}>
                        <div className="homePage__inner">
                            <div className="homePage__header">
                                <h1>{post.title}</h1>
                            </div>
                            <div className="homePage__postText">
                                {post.postText}
                            </div>
                            <div className="homePage__delBtn">
                                <h3>{post.author.username}</h3>
                                {post.author.id === auth.currentUser?.uid && (
                                    <button
                                        className="delateButton"
                                        onClick={() => handleDelete(post.id)}
                                    >
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
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
