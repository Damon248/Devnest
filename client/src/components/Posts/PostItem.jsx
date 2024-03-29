import React from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import {
  useAddLike,
  useDeletePost,
  useRemoveLike,
} from "../../redux/actions/postAction";
import { Link } from "react-router-dom";

const PostItem = ({
  post: { _id, name, avatar, text, user, likes, comments, date },
  showActions = true,
}) => {
  const auth = useSelector((state) => state.auth);
  const addLike = useAddLike();
  const removeLike = useRemoveLike();
  const deletePost = useDeletePost();
  return (
    <div>
      <div className="post bg-white p-1 my-1">
        <div>
          <Link to={`/profile/${user}`}>
            <img className="round-img" src={avatar} alt="" />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className="my-1">{text}</p>
          <p className="post-date">
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </p>
          {showActions && (
            <>
              <button
                type="button"
                className="btn btn-light"
                onClick={(e) => addLike(_id)}
              >
                <i className="fas fa-thumbs-up"></i>
                <span>
                  {" "}
                  {likes.length > 0 && (
                    <span className="comment-count">{likes.length}</span>
                  )}
                </span>
              </button>
              <button
                type="button"
                className="btn btn-light"
                onClick={(e) => removeLike(_id)}
              >
                <i className="fas fa-thumbs-down"></i>
              </button>
              <Link to={`/posts/${_id}`} className="btn btn-primary">
                Discussion{" "}
                {comments.length > 0 && (
                  <span className="comment-count">{comments.length}</span>
                )}
              </Link>
              {!auth.loading && user === auth.user._id && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => deletePost(_id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
