import { FaArrowLeft, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function AuthBox({
  title,
  subtitle,
  children,
  buttonText,
  bottomText,
  bottomLink,
  linkPath,
  showGoogle = true,
  onButtonClick
}) {
  return (
    <section className="log">

      {/* Top Navbar */}
      <div className="login_top">
        <div className="log_bar">

          <div className="logo_section">
            <div className="logo_circle">
              Logo
            </div>

            <span className="logo_text">
              Car<span className="wash">Wash</span>
            </span>
          </div>

          <div className="back_section">
            <FaArrowLeft />
            <span className="back_text">Go Back</span>
          </div>

        </div>
      </div>

      {/* Middle Section */}
      <div className="login_middle">
        <div className="login_box">

          {/* Heading */}
          <h1>{title}</h1>

          {/* Subheading */}
          <p className="subheading">
            {subtitle}
          </p>

          {/* Dynamic Inputs */}
          {children}

          {/* Main Button */}
          <button 
            className="login_btn"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>

          {/* Optional Google Section */}
          {showGoogle && (
            <>
              <div className="divider">
                <span></span>
                <p>OR CONTINUE WITH</p>
                <span></span>
              </div>

              <button className="google_btn">
                <FaGoogle />
                <span>Continue with Google</span>
              </button>
            </>
          )}

          {/* Bottom Redirect Text */}
          <p className="signup_text">
            {bottomText}{" "}
            <Link to={linkPath}>
              {bottomLink}
            </Link>
          </p>

        </div>
      </div>

      {/* Footer */}
      <div className="login_footer">
        <p>© 2026 COMPANY NAME. ALL RIGHTS RESERVED</p>
      </div>

    </section>
  );
}

export default AuthBox;