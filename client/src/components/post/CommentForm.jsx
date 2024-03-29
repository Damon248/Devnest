import React, { useState } from "react";
import { useAddComment } from "../../redux/actions/postAction";

const CommentForm = (postId) => {
  const [text, setText] = useState("");
  const addComment = useAddComment();
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave a comment</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId.postId, { text });
          setText("");
        }}
      >
        <textarea
          style={{ resize: "none" }}
          name="text"
          cols="30"
          rows="5"
          placeholder="Write your comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

export default CommentForm;
