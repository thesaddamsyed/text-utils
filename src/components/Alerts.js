import React from "react";

function Alerts(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className="position-fixed top-0 start-50 translate-middle-x mt-3"
        style={{ zIndex: 1080 }}
      >
        <div
          className="toast show align-items-center text-bg-success border-0 shadow"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    )
  );
}

export default Alerts;
