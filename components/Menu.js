// components/Menu.js
import React, { useState, useRef, useEffect } from "react";
import menuConfig from "../config/menuConfig";
import styles from "../styles/Menu.module.css";
import { useRouter } from "next/router";

const MenuItem = ({ item, closeOtherSubmenus, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (item.type === "linkButton") {
    return (
      <li className={styles.menuItem}>
        <button
          className={`${styles.menuButton} ${styles.menuLink}`}
          onClick={() => {
            closeOtherSubmenus();
            router.push(item.url);
          }}
        >
          {item.label}
        </button>
      </li>
    );
  } else if (item.type === "subMenuButton") {
    return (
      <li className={styles.menuItem} ref={buttonRef}>
        <button
          className={`${styles.menuButton} ${
            isOpen && styles.menuButtonActive
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
            closeOtherSubmenus(item);
          }}
        >
          {item.label}
        </button>
        {isOpen && (
          <ul className={styles.submenu}>
            {item.items.map((subItem, index) => (
              <MenuItem
                key={index}
                item={subItem}
                closeOtherSubmenus={() => {}}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return null;
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const closeOtherSubmenus = (currentItem) => {
    menuConfig.menu.forEach((item) => {
      if (item.type === "subMenuButton" && item !== currentItem) {
        item.isOpen = false;
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        closeOtherSubmenus();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        closeOtherSubmenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.menu} ref={menuRef}>
      <button
        className={`${styles.menuButton} ${isOpen && styles.menuButtonActive}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {menuConfig.menu.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              closeOtherSubmenus={closeOtherSubmenus}
              isActive={item.isOpen}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
