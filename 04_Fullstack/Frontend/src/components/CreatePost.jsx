import React from "react";

function CreatePost() {
    return (
        <section className="creaet-post-section">
            <form>
                <h1>Create Post</h1>

                <input type="file" name="image" accept="image/*" />

                <input
                    type="text"
                    name="caption"
                    placeholder="Write your caption..."
                    required
                />

                <button type="submit">Create Post</button>
            </form>
        </section>
    );
}

export default CreatePost;