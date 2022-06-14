import styles from "./styles.module.scss"
import Image from "next/image"


const linkedin = require("../../public/images/linkedin.svg")
const github = require("../../public/images/github.svg")
const skype = require("../../public/images/skype.svg")
const phone = require("../../public/images/phone.svg")
const email = require("../../public/images/email.svg")

export default function Contact() {
    return <div>
        <div className={`df jcc aic`}>
            <div className={`mgr20 ${styles.contact_header}`}>Contact</div>
        </div>
        <div className={`${styles.contact_block}`}>
            <div>
                <div className={`${styles.contact_icons}`}><div><Image src={phone} /></div> <div>8660300947</div></div>
                <div className={`${styles.contact_icons}`}><div><Image src={email} /></div> <div>manjunathkankatteko@gmail.com</div></div>
            </div>
            <div className={`${styles.icons_list}`}>
                <div><Image src={linkedin} /></div>
                <div><Image src={skype} /></div>
                <div><Image src={github} /></div>
            </div>
        </div>
    </div>
}