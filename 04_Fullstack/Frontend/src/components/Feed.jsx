import React, { useState } from "react";



function Feed() {
    const [posts] = useState([
        {
            _id: 1,
            image:
                "https://images.unsplash.com/photo-1784296868267-e8ac423c7afa?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "Beautiful Nature ",
        },
        {
            _id: 2,
            image:
                "https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "Another Awesome Photo",
        },
    ]);

    return (
        <section className="feed-section">
            <h1>Latest Posts</h1>

            {posts.length > 0 ? (
                posts.map((post) => (
                    <div className="post-card" key={post._id}>
                        <img src={post.image} alt={post.caption} />

                        <div className="post-content">
                            <p>{post.caption}</p>
                        </div>
                    </div>
                ))
            ) : (
                <h2 className="no-post">No Posts Available</h2>
            )}
        </section>
    );
}

export default Feed;