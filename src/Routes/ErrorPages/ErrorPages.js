import React from "react";
import { Link } from "react-router-dom";
import styles from "./ErrorPages.module.css"; // Создайте файл стилей

const ErrorPages = () => {
  return (
    <div className={styles.containerError}>
      <div className={styles.links}>
        <Link to="/">Home</Link>/<Link to="/error404">Error404</Link>
      </div>
      <h1 className={styles.titleError}>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>

      <button
        className={styles.buttonError}
        onClick={() => (window.location.href = "/")}
      >
        Back to Home Page
      </button>
    </div>
  );
};

export default ErrorPages;
