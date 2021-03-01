import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { postComment } from "../../api";
import "./CommentForm.scss"

const CommentForm = ({ id }) => {
  const [name, setName] = useState("anonymous");
  const [comment, setComment] = useState('')

  const dispatch = useDispatch();

  const handleCommentSubmit = (event) => {
    event.preventDefault()
    const userComment = `${comment} ~${name}`
    postComment(id, userComment, dispatch);
    document.getElementById('comment-form').reset();
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleCommentChange = (event) => {
    const userComment = event.target.value
    setComment(userComment)
  }

  return (
    <form className="comment-form" id="comment-form" onSubmit={handleCommentSubmit}>
      <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Name"
            name="name"
            id="name"
            onChange={handleNameChange}
          />
          <label htmlFor="name" className="form__label">
            Name (optional)
          </label>
        </div>
      <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Comment"
            name="comment"
            id="comment"
            onChange={handleCommentChange}
            required
          />
          <label htmlFor="comment" className="form__label">
            Comment
          </label>
        </div>
        <button className="btns">Comment</button>
    </form>
  )
}

export default CommentForm;