import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreatePost() {
    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        e.preventDefault()

        const fromData = new FormData(e.target)
        axios.post('http://localhost:3000/create-post',fromData)
        .then((res) => {
            alert('Post Created Successfully!')
            navigate("/feed")
            e.target.reset()
        })
        .catch((err)=> {
            console.log(err)
            alert('Error Creating Post!')

        })

    }
    return (
        <section className="creaet-post-section">
            <form onSubmit={handleSubmit} >
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