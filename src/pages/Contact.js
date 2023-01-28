import React from "react";
import "../CSS Folder/Contact.css";
import ImageTag from "../components/ImageTag";

const Contact = () => {
  return (
    <>
      <div className="contact_page">
        <header>
          <h3>Contact Me</h3>
          <h3>
            T<br />
            H<br />
            R<br />
            O<br />
            U<br />
            G<br />
            H<br />
          </h3>
          <div className="links">
            <ImageTag />
            <span>
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=XBcJlHgSVlLtJSwLSdRhmFDXKPHdZFfPvMjlkllbMWPGzQhtJWdqKJRVCSQbsGBcRcvjVKDfnFJJGQXQ"
                target="_blank"
                rel="external"
              >
                <i className="fa fa-google" aria-hidden="true"></i>
                <button>G-Mail</button>
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/nitesh--yadav/"
                target="_blank"
                rel="external"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <button>LinkedIn</button>
              </a>
            </span>
          </div>
        </header>
      </div>
    </>
  );
};

export default Contact;
