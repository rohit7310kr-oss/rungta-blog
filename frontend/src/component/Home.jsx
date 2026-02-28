import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>College Blog</h2>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">My Posts</a>
          <a href="#">Create Post</a>
          <button className={styles.profileButton} aria-label="Profile">
            <div className={styles.avatar}>RV</div>
            <div className={styles.profileInfo}>
              <span className={styles.profileName}>Rohit Verma</span>
              <span className={styles.profileRole}>Student</span>
            </div>
            <span className={styles.chev}>▾</span>
          </button>
        </nav>
      </aside>

      {/* Main Feed */}
      <main className={styles.feed}>
        <h1 className={styles.feedTitle}>Campus Feed</h1>

        {/* Example Post - Administration */}
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <span className={`${styles.roleBadge} ${styles.admin}`}>
              Administration
            </span>
            <span className={styles.author}>Posted by Admin Office</span>
          </div>

          <h3 className={styles.postTitle}>Annual Tech Fest Announcement</h3>
          <p className={styles.postContent}>
            We are excited to announce the Annual Tech Fest 2026. All students
            are encouraged to participate and showcase their projects!
          </p>

          <div className={styles.actions}>
            <button>👍 Like</button>
            <button>💬 Comment</button>
            <button>🔗 Share</button>
          </div>
        </div>

        {/* Example Post - Faculty */}
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <span className={`${styles.roleBadge} ${styles.faculty}`}>
              Faculty
            </span>
            <span className={styles.author}>Prof. Sharma</span>
          </div>

          <h3 className={styles.postTitle}>Research Paper Published</h3>
          <p className={styles.postContent}>
            Our department has published a new research paper in AI and Machine
            Learning. Congratulations to all contributors!
          </p>

          <div className={styles.actions}>
            <button>👍 Like</button>
            <button>💬 Comment</button>
            <button>🔗 Share</button>
          </div>
        </div>

        {/* Example Post - Student */}
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <span className={`${styles.roleBadge} ${styles.student}`}>
              Student
            </span>
            <span className={styles.author}>Rahul Verma - CSE 3rd Year</span>
          </div>

          <h3 className={styles.postTitle}>My Internship Experience</h3>
          <p className={styles.postContent}>
            I recently completed my internship at a tech startup. Sharing my
            experience and key learnings with juniors!
          </p>

          <div className={styles.actions}>
            <button>👍 Like</button>
            <button>💬 Comment</button>
            <button>🔗 Share</button>
          </div>
        </div>

        {/* Example Post - Staff */}
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <span className={`${styles.roleBadge} ${styles.staff}`}>Staff</span>
            <span className={styles.author}>Library Department</span>
          </div>

          <h3 className={styles.postTitle}>Library Timings Update</h3>
          <p className={styles.postContent}>
            Library timings have been extended during examination week. Students
            can now access facilities until 9 PM.
          </p>

          <div className={styles.actions}>
            <button>👍 Like</button>
            <button>💬 Comment</button>
            <button>🔗 Share</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
