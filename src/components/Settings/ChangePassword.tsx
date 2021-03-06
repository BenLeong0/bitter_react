import React, { useState } from "react";
import CoreService from "../core/CoreService";
import ValidationService from "../core/ValidationService";
import ChangePasswordConfirmation from "./ChangePasswordConfirmation";

export interface ChangePasswordProps {}

const ChangePassword: React.FC<ChangePasswordProps> = () => {
  const validationService = new ValidationService();
  const coreService = new CoreService();

  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

  const [isNewPasswordValid, setIsNewPasswordValid] = useState<boolean>(true);
  const [passwordsMismatch, setPasswordsMismatch] = useState<boolean>(false);
  const [correctOldPassword, setCorrectOldPassword] = useState<boolean>(true);

  const [hasSucceeded, setHasSucceeded] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check new password is valid
    if (!validationService.isPasswordValid(newPassword)) {
      console.log("invalid password");
      setIsNewPasswordValid(false);
      setHasSucceeded(false);
      return;
    }

    // Check password match
    if (newPassword !== confirmNewPassword) {
      setPasswordsMismatch(true);
      setHasSucceeded(false);
      return;
    }

    let callback = (err: any, result: any): void => {
      if (err) console.error(err);
      if (result === "SUCCESS") {
        setHasSucceeded(true);
      }
    };

    let catchError = (err: any): void => {
      const code = err.code;
      switch (code) {
        case "NotAuthorizedException":
          setCorrectOldPassword(false);
          break;
        default:
          console.error(err);
      }
      setHasSucceeded(false);
    };

    coreService
      .authenticate(password)
      .then((user: any) => user.changePassword(password, newPassword, callback))
      .catch(catchError);
  };

  return (
    <div className="settings-field">
      <div className="settings-header">Current password:</div>
      <form onSubmit={onSubmit}>
        <div className="settings-input-field">
          <div className="settings-input-label">Password:</div>
          <div className="settings-input-wrapper">
            <input
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setCorrectOldPassword(true);
              }}
              type="password"
              className={!correctOldPassword ? "invalid" : ""}
            />

            {/* Incorrect (old) password */}
            {!correctOldPassword ? (
              <div className="form-error-message">Incorrect password</div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="settings-input-field">
          <div className="settings-input-label">New password:</div>
          <div className="settings-input-wrapper">
            <input
              value={newPassword}
              onChange={(event) => {
                setNewPassword(event.target.value);
                setPasswordsMismatch(false);
                setIsNewPasswordValid(true);
              }}
              type="password"
              className={
                !isNewPasswordValid || passwordsMismatch ? "invalid" : ""
              }
            />

            {/* Invalid password */}
            {!isNewPasswordValid ? (
              <div className="form-error-message">Invalid password</div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="settings-input-field">
          <div className="settings-input-label">Confirm password:</div>
          <div className="settings-input-wrapper">
            <input
              value={confirmNewPassword}
              onChange={(event) => {
                setConfirmNewPassword(event.target.value);
                setPasswordsMismatch(false);
              }}
              type="password"
              className={passwordsMismatch ? "invalid" : ""}
            />

            {/* Passwords don't match */}
            {passwordsMismatch ? (
              <div className="form-error-message">
                ! Passwords do not match !
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <ChangePasswordConfirmation onSubmit={onSubmit} />

        {/* Success message */}
        <div
          style={{
            fontSize: "16px",
            display: hasSucceeded ? "" : "none",
          }}
          className="form-success-message"
        >
          Password has been successfully changed
        </div>
      </form>
      <hr />
    </div>
  );
};

export default ChangePassword;
