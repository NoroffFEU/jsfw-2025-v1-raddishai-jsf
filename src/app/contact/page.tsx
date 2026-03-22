"use client";

import { useState, type FormEvent } from "react";
import styles from "./page.module.css";

interface ContactErrors {
  fullName?: string;
  subject?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newErrors: ContactErrors = {};

    const fullName = String(formData.get("fullName") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    }

    if (subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email.";
    }

    if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSubmitted(true);
  }

  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.title}>Contact</h1>

      {submitted ? (
        <p className={styles.success}>Your message has been sent 🎉</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className={styles.field}>
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" name="fullName" type="text" />
            {errors.fullName && (
              <span className={styles.error}>{errors.fullName}</span>
            )}
          </div>

          {/* Subject */}
          <div className={styles.field}>
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" />
            {errors.subject && (
              <span className={styles.error}>{errors.subject}</span>
            )}
          </div>

          {/* Email */}
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>

          {/* Message */}
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} />
            {errors.message && (
              <span className={styles.error}>{errors.message}</span>
            )}
          </div>

          <button type="submit" className="button primary">
            Send message
          </button>
        </form>
      )}
    </main>
  );
}
