import React from "react";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <div className={styles.header}>
          <div className={styles.avatar}>R</div>

          <div className={styles.userInfo}>
            <h2 className={styles.name}>Rahul Verma</h2>
            <span className={`${styles.roleBadge} ${styles.student}`}>
              Student
            </span>
            <p className={styles.email}>rahulverma@college.edu</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.details}>
          <div className={styles.detailRow}>
            <span className={styles.label}>Department</span>
            <span className={styles.value}>Computer Science</span>
          </div>

          <div className={styles.detailRow}>
            <span className={styles.label}>Year</span>
            <span className={styles.value}>3rd Year</span>
          </div>

          <div className={styles.detailRow}>
            <span className={styles.label}>Joined</span>
            <span className={styles.value}>August 2024</span>
          </div>
        </div>

        <div className={styles.bioSection}>
          <h3>About</h3>
          <p>
            Passionate about web development, artificial intelligence, and
            building impactful campus projects. Loves participating in tech
            events and hackathons.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
