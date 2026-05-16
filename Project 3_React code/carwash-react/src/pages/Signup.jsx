import { useState } from "react";
import AuthBox from "../components/AuthBox";
import InputField from "../components/InputField";
import AuthPopup from "../components/AuthPopup";

import { FaLock, FaIdBadge } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Signup() {
  const [role, setRole] = useState("customer");
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <AuthBox
        title="Create Account"
        subtitle="Enter your details to create your account"
        buttonText="Sign Up"
        bottomText="Already have an account?"
        bottomLink="Login"
        linkPath="/"
        showGoogle={false}
        onButtonClick={() => setShowPopup(true)}
      >

        {/* Role Selector */}
        <div className="role_selector">
          <button
            type="button"
            className={role === "customer" ? "active_role" : ""}
            onClick={() => setRole("customer")}
          >
            Customer
          </button>

          <button
            type="button"
            className={role === "staff" ? "active_role" : ""}
            onClick={() => setRole("staff")}
          >
            Staff
          </button>
        </div>

        {/* CUSTOMER FORM */}
        {role === "customer" && (
          <>
            <InputField
              label="Full Name"
              icon={<FaRegUser />}
              type="text"
              placeholder="Enter your full name"
            />

            <InputField
              label="Email Address"
              icon={<MdEmail />}
              type="email"
              placeholder="Enter your email address"
            />

            <InputField
              label="Create Password"
              icon={<FaLock />}
              type="password"
              placeholder="Create password"
              showEye={true}
            />

            <InputField
              label="Confirm Password"
              icon={<FaLock />}
              type="password"
              placeholder="Confirm password"
              showEye={true}
            />
          </>
        )}

        {/* STAFF FORM */}
        {role === "staff" && (
          <>
            <InputField
              label="Employee ID"
              icon={<FaIdBadge />}
              type="text"
              placeholder="Enter employee ID"
            />

            <InputField
              label="Email Address"
              icon={<MdEmail />}
              type="email"
              placeholder="Enter your email address"
            />

            <InputField
              label="Create Password"
              icon={<FaLock />}
              type="password"
              placeholder="Create password"
              showEye={true}
            />

            <InputField
              label="Confirm Password"
              icon={<FaLock />}
              type="password"
              placeholder="Confirm password"
              showEye={true}
            />

            <InputField
              label="Access Code"
              icon={<FaLock />}
              type="text"
              placeholder="Enter staff access code"
            />
          </>
        )}

      </AuthBox>

      {/* Authentication Popup */}
      <AuthPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
}

export default Signup;