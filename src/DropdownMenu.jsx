import React from "react";

const DropdownMenu = ({ id, active, items, apps }) => {
    return (
        <div id={id} className={`dropdown ${active ? "active" : ""}`}>
            <ul role="menu">
                {id != "dropdown1" && (
                    <li className="dropdown-title">
                        <span className="dropdown-link-title">
                            Browse by categories
                        </span>
                    </li>
                )}

                {items.map((item, index) => (
                    <li key={index} role="menuitem">
                        <a className="dropdown-link" href={item.link}>
                            {id === "dropdown1" && (
                                <img
                                    src={item.icon}
                                    className="icon"
                                    alt={item.title}
                                />
                            )}

                            {id === "dropdown1" ? (
                                <div>
                                    <span className="dropdown-link-title">
                                        {item.title}
                                    </span>
                                    <p>{item.description}</p>
                                </div>
                            ) : (
                                <>{item.title}</>
                            )}
                        </a>
                    </li>
                ))}
            </ul>
            <ul role="menu">
                <li className="dropdown-title">
                    <span className="dropdown-link-title">Browse by apps</span>
                </li>
                {apps.map((app, index) => (
                    <li key={index} role="menuitem">
                        <a className="dropdown-link" href={app.link}>
                            {id === "dropdown1" && (<img src={app.icon} alt={app.title} />)}
                            {app.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropdownMenu;
