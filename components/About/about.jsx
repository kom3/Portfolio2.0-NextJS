import styles from "./styles.module.scss"
import Image from "next/image"

const profile_pic2 = require("../../public/images/profilepic2.jpg")
const download_icon = require("../../public/images/download.svg")
const background_img = require("../../public/images/aboutbackground.svg")



export default function About(props) {
    return <div className={`df ${styles.about_container}`}>
        <div className={`${styles.left_container}`}>
            <div className={`${styles.aboutme_header}`}>About me</div>
            <div className={`${styles.aboutme_block}`}>
                <div className={`${styles.aboutme_txt}`}>
                    <span className={`${styles.bigtext}`}>Lorem</span> ipsum dolor sit amet, consectetur adipisicing elit. Veniam autem beatae omnis repellendus corporis et atque eum mollitia excepturi eveniet commodi rem velit expedita consectetur recusandae, sunt facere numquam inventore.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi magnam beatae exercitationem quidem ducimus quas porro asperiores quasi et, consequuntur rerum magni aliquid neque distinctio labore nulla assumenda, corporis vero.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi magnam beatae exercitationem quidem ducimus quas porro asperiores quasi et, consequuntur rerum magni aliquid neque distinctio labore nulla assumenda, corporis vero.
                    <div className={`${styles.downloadcvbtn_wrpr}`}>
                        <div className={`${styles.downloadcvbtn}`}>
                            <div>Download CV</div>
                            <div><Image src={download_icon} height={20} width={20} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.right_container}`}>
            <div className={`${styles.image_holder}`}><Image layout="responsive" src={profile_pic2} height={300} width={300} style={{ borderRadius: "200px" }} /></div>
        </div>
    </div>
}