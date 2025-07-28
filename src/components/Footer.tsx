import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-4 sm:py-6 bg-gray-100 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 px-4 sm:px-0">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
        <span className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Bharath S. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
