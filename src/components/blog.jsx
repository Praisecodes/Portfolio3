import { useState } from "react"

export default function Blog(){
    const [postCount, setPostCount] = useState(0);
    return(
        <div className="blog">
            <h1 className="sectionTitle">Blog</h1><br />
            <p>Recent Blog Posts</p> <br /><br />

            <div className="postsboard">
                {(postCount == 0)?
                <h1 className="noPost">No Blog Posts Available</h1>
                : <p>These are the posts</p>
                }
            </div>
        </div>
    )
}