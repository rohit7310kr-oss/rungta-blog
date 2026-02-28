import React from "react";
import styles from "./CreatePost.module.css";

function CreatePost() {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>College Blog</h2>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">My Posts</a>
          <a href="#">Create Post</a>
          <a href="#">Profile</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Create New Post</h1>

          <form className={styles.form}>
            {/* Role Selection */}
            <div className={styles.formGroup}>
              <label>Select Role</label>
              <select className={styles.select}>
                <option>Administration</option>
                <option>Faculty</option>
                <option>Student</option>
                <option>Staff</option>
              </select>
            </div>

            {/* Category */}
            <div className={styles.formGroup}>
              <label>Category</label>
              <select className={styles.select}>
                <option>Announcements</option>
                <option>Events</option>
                <option>Research</option>
                <option>Campus Life</option>
                <option>Internships</option>
              </select>
            </div>

            {/* Title */}
            <div className={styles.formGroup}>
              <label>Post Title</label>
              <input
                type="text"
                placeholder="Enter post title"
                className={styles.input}
              />
            </div>

            {/* Content */}
            <div className={styles.formGroup}>
              <label>Post Content</label>
              <textarea
                rows="6"
                placeholder="Write your content here..."
                className={styles.textarea}
              ></textarea>
            </div>

            {/* Image Upload */}
            <div className={styles.formGroup}>
              <label>Upload Image (Optional)</label>
              <input type="file" className={styles.fileInput} />
            </div>

            {/* Buttons */}
            <div className={styles.buttonGroup}>
              <button type="button" className={styles.draftButton}>
                Save as Draft
              </button>
              <button type="submit" className={styles.publishButton}>
                Publish Post
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CreatePost;
