import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`http://34.135.47.250/posts/${postId}/comments`, {
            content
        });

        setContent('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input 
                        value={content} 
                        onChange={e => setContent(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default CommentCreate;