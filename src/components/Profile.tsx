import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/doug821.png" alt="Douglas Silva" />
            <div>
                <strong>Herson Douglas</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level 1</p>
            </div>
        </div>
    );
}