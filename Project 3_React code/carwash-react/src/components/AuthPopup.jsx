import { useState, useEffect } from "react";

function AuthPopup({ isOpen, onClose }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="popup_overlay">
      <div className="auth_popup">

        {/* Top section */}
        <div className="popup_top">
          <div className="popup_logo">Logo</div>
          <h2>Authentication</h2>
        </div>

        {/* Bottom section */}
        <div className="popup_content">
          <h3>We've sent you a code</h3>

          <p className="popup_subtext">
            An email has been sent to example.com
          </p>

          <p className="resend_text">
            Resend code in {timer}s
          </p>

          {/* OTP boxes */}
          <div className="otp_container">
            <input maxLength="1" />
            <input maxLength="1" />
            <input maxLength="1" />
            <input maxLength="1" />
          </div>

          <button className="popup_back_btn" onClick={onClose}>
            Back
          </button>
        </div>

      </div>
    </div>
  );
}

export default AuthPopup;