import React, { useState } from "react"
import "./CommentForm.scss"

const CommentForm = () => {
  const [name, setName] = useState("anonymous");
  const [comment, setComment] = useState('')

  const handleCommentSubmit = (name, comment) => {
    // pass down func as prop
    // func will make post request to the sighting
    // comment will rerender in commetn section
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }

  return (
    <form className="comment-form">
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
    </form>
  )
}

export default CommentForm;