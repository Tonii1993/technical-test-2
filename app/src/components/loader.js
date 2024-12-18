import React from "react";

const Loader = ({ size }) => {
  return (
    <div className="flex items-center justify-center space-x-2 m-20">
      {size === "small" ? (
        <div className="spinner-border animate-spin text-[#0560FD] inline-block h-4 w-4 border-2 rounded-full" role="status">
          <span className="hidden">Loading...</span>
        </div>
      ) : (
        <div className="spinner-border animate-spin text-[#0560FD] inline-block w-16 h-16 border-[6px] rounded-full" role="status">
          <span className="hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Loader;
