import React, { useState } from "react";
import styles from "../Pop-Up/popUp.module.scss";
import { useForm, ValidationError } from "@formspree/react";
import { setTimeout } from "timers";

function Popup() {
  const [state, handleSubmit] = useForm("process.env.REACT_APP_FORMSPREE_ID");
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleClose = () => {
    setIsPopupOpen(false);
  };
  function LandingBody() {
    setTimeout(() => {
      handleClose();
    }, 1500);
  }

  

  if (state.succeeded) {
    LandingBody()

    if (!isPopupOpen) {
        return null;
      }
      

    return (
      <>
        <div className={styles.background}></div>{" "}
        {/* Add a new background container */}
        <div className={styles.main}>
          <div className={styles.container}>
            <h2 className={`${styles.heading} text-center`}>
              Thanks for Subscription!
            </h2>
          </div>
        </div>
      </>
    );
  }

  if (!isPopupOpen) {
    return null;
  }
  return (
    <>
      <div className={styles.background}></div>{" "}
      {/* Add a new background container */}
      <div className={styles.main}>
        <div className={styles.container}>
          <button
            className="ml-auto mr-7 mt-[-15px] cursor-pointer"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              className="fill-white hover:fill-[#9c9b9bea] text-[30px]"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
          <h2 className={styles.heading}>Coming Soon!</h2>
          <h3 className={styles.subheading}>
            Please leave your email and we will contact you!
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              name="email"
              className={styles.input}
              placeholder="E-mail"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <button
              className={styles.launch_button}
              type="submit"
              disabled={state.submitting}
            >
              Whitelist
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Popup;
