import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: "",
    },
    {
      title: "About",
      path: "/about",
      icon: "",
    },
    {
      title: "Clients",
      path: "/clients",
      icon: "",
    },
    {
      title: "Contact",
      path: "/contact",
      icon: "",
    },
  ];

  return (
    <div>
      {/* content */}
      <div className="">{children}</div>

      {/* footer */}
      <div className="fixed left-0 right-0 bottom-10">
        <div className="flex justify-center w-full">
          {menuItems.map((item, index) => (
            <div key={item.title}
              className={`px-20 py-5 bg-primary ${index === 0 && "rounded-l"} ${
                index === menuItems.length - 1 && "rounded-r"
              }`}
            >
              <Link to={item.path} className="text-secondary text-xl">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
