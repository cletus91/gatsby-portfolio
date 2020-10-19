import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const contact = () => {
  return (
    <Layout>
    <SEO title="Contact Page" description="Contact | CD Portfolio" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Drop by and say Hi</h3>
          <form action="https://formspree.io/f/xdopezne" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                email="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                placeholder="message"
                rows="5"
                className="form-control"
                maxLength="200"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default contact;
