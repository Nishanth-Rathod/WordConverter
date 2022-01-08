import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <h3>
        <i>Hi EveryOne I am Developer !!!</i>
      </h3>
      <p>
        <b>
          I am Sorry i am uanble to provide the contact information to you for
          my security reasons
        </b>
      </p>
      <br />
      <p>
        <i>For Further Information Click the Button</i>
      </p>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Click here
      </button>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                About-Contact
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://www.wishesquotes.com/wp-content/uploads/2017/10/im-sorry-note.jpg"
                alt="loading"
                width={"450px"}
                height={"450px"}
              />
              <h2>
                <i>
                  <b>Sorry! for your inconvience</b>
                </i>
              </h2>
              <p>
                i can't Provide you Our Contact Details For Security Reasons
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                I Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
