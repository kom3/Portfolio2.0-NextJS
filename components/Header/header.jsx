import styles from './styles.module.scss'


export default function Header(props) {
    return <div className={`${styles.header}`}>
        <div>Home <div className={`${styles.active} ${styles.dot}`}></div></div>
        <div>About me <div className={`${styles.dot}`}></div></div>
        <div>Projects <div className={`${styles.dot}`}></div></div>
        <div>Experience <div className={`${styles.dot}`}></div></div>
        <div>Contact <div className={`${styles.dot}`}></div></div>
    </div>
}