"use client";

import React, { useState, useEffect, useRef } from "react";

const SidebarItem = ({text}) => {
  return (
    <div
      className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto`}
    >
      <img src="/copetract_c_4.png" width={30} height={30} alt="Check"/>
      <h3 className="text-2xl text-gray-800 font-semibold">{text}</h3>
    </div>
  );
};

const YouTubeVideo = () => {
  return (
    <div className="my-4">
      <iframe
        width="100%"
        height="200"
        src="https://www.youtube.com/embed/IsXvoYeJxKA"
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Sidebar = () => {
  const sidebarItemsData = [
    { text: "Create an Account" },
    { text: "Connect your Wallet" },
    { text: "Complete your Account" },
    { text: "Make your first Transaction" },
    { text: "Make your first Contract" },
  ];

  const [sidebarItems, setSidebarItems] = useState(sidebarItemsData);
  const [showAllItems, setShowAllItems] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const sidebarHeight = sidebarRef.current.clientHeight;
    const itemsContainer = sidebarRef.current.querySelector(".items-container");
    const itemsHeight = itemsContainer.clientHeight * sidebarItems.length;

    if (itemsHeight > sidebarHeight) {
      setShowAllItems(false);
    } else {
      setShowAllItems(true);
    }
  }, [sidebarItems]);

  return (
    <div>
      <div className="p-12 w-full h-screen bg-white fixed top-0 right lg:right-0 lg:w-3/12  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start items-center" ref={sidebarRef}>
          <img src="/copetract_l_t_c_d_4.png" alt="Logo" className="border-b border-gray-100 pb-4 w-1/2" />
          <YouTubeVideo />
          <div className="w-full h-px bg-gray-300 my-4" style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }} />
          <div className="items-container">
            {sidebarItems.slice(0, showAllItems ? sidebarItems.length : 4).map((item, index) => (
              <SidebarItem
                key={index}
                isChecked={item.isChecked}
                text={item.text}
                onToggle={() => handleItemToggle(index)}
              />
            ))}
          </div>
            <div className="w-full flex justify-center mt-4">
              {!showAllItems && (
                <button className="text-blue-600 hover:underline" onClick={() => setShowAllItems(true)}>
                  Show More
                </button>
              )}
          </div>
          <h3 className="text-base absolute bottom-0 text-center">
            Copyright by @basecope
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
