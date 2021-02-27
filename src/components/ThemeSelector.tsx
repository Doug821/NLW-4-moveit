import { useContext, useState } from 'react';
import styles from '../styles/components/ThemeButton.module.css';
import { ThemeContext } from '../contexts/ThemeContext';


export function ThemeSelectorButton() {
    const { themeSelector, isDarkThemeActive } = useContext(ThemeContext);

    return (
        <div className={styles.themeButtonContainer}>
            <input type="checkbox" className={styles.checkbox} id="chk" />
            <label className={styles.label} htmlFor="chk">
                <div className={styles.ball}></div>
            </label>
        </div>
    );
}