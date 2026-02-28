import React from "react";
import styles from "./Auth.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.brandBox}>
          <h1 className={styles.brandTitle}>College Blogging Portal</h1>
          <p className={styles.brandText}>
            Share your ideas, projects, and campus stories with the world.
            Connect. Create. Inspire.
          </p>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.card}>
          <h2 className={styles.title}>College Blogging Portal</h2>
          <h3 className={styles.subtitle}>Login</h3>

          <form className={styles.form}>
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.options}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#" className={styles.link}>
                Forgot Password?
              </a>
            </div>

            <button type="submit" className={styles.button}>
              Login
            </button>
          </form>

          <p className={styles.footerText}>
            Don't have an account?
            <a href="#" className={styles.link}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
