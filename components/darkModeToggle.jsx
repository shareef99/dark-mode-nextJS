import React from "react";
import useDarkMode from "use-dark-mode";
import Styles from "../styles/components/darkMode.module.scss";

export default function DarkModeToggle() {
    const darkMode = useDarkMode(false);
    console.log(darkMode);

    return (
        <div id="darkModeToggle" className={Styles.darkModeToggle}>
            <button type="button" onClick={darkMode.disable}>
                ☀
            </button>
            <span className={Styles.toggleControl}>
                <input
                    className={Styles.dmcheck}
                    type="checkbox"
                    checked={darkMode.value}
                    onChange={darkMode.toggle}
                    id="dmcheck"
                />
                <label htmlFor="dmcheck" />
            </span>
            <button type="button" onClick={darkMode.enable}>
                ☾
            </button>
        </div>
    );
}
