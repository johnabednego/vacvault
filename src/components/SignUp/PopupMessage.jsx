import React, { useState, useEffect } from 'react';

const PopupMessage = ({ showMessage, setShowMessage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showMessage) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setShowMessage(false);
      }, 3000); // Disappear after 3 seconds
    }
  }, [showMessage, setShowMessage]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex z-50 px-4 py-6 pointer-events-none p-6 items-start justify-end">
          <div
            className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto"
            role="alert"
          >
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-red-500">
                    Please check your internet connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupMessage;
