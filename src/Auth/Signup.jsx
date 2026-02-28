import React from "react";
import styles from "./Auth.module.css";

function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>College Blogging Portal</h2>
        <h3 className={styles.subtitle}>Create Account</h3>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">College Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your college email"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="department">Department</label>
            <input
              type="text"
              id="department"
              placeholder="Enter your department"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="year">Year</label>
            <select id="year" className={styles.select} required>
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className={styles.input}
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </form>

        <p className={styles.footerText}>
          Already have an account?{" "}
          <a href="#" className={styles.link}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
