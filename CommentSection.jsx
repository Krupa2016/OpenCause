import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";


const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);

  // Simulate fetching comments from an API
  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      // Simulating a delay for API call
      setTimeout(() => {
        const fetchedComments = [
          { id: 1, name: "Alice", text: "This is a great post! Thanks for sharing.", timestamp: new Date().toLocaleString() },
          { id: 2, name: "Bob", text: "I totally agree with Alice.", timestamp: new Date().toLocaleString() },
        ];
        setComments(fetchedComments);
        setLoading(false);
      }, 1000);
    };

    fetchComments();
  }, []);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentData = {
        id: comments.length + 1,
        name: "You", // Replace with dynamic user data if available
        text: newComment.trim(),
        timestamp: new Date().toLocaleString(),
      };
      setComments([...comments, newCommentData]);
      setNewComment("");
    }
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="comment-section">
      <div className="comment-box">
        <h2 className="comment-header">Comments</h2>
        {loading ? (
          <p>Loading comments...</p>
        ) : (
          <div className="comment-list">
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="comment-item"
              >
                <UserCircle className="comment-avatar" />
                <div className="comment-content">
                  <p className="comment-name">{comment.name}</p>
                  <p className="comment-text">{comment.text}</p>
                  <p className="comment-timestamp">{comment.timestamp}</p>
                  {comment.name === "You" && (
                    <button
                      onClick={() => handleDeleteComment(comment.id)}
                      className="comment-delete-button"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <div className="comment-input-box">
        <textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="comment-textarea"
        />
        <button
          onClick={handleAddComment}
          className="comment-button"
          disabled={!newComment.trim()}
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
