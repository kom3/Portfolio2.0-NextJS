import React from 'react'
import styles from "./styles.module.scss"
import Image from "next/image"

const profile_pic = require("../public/images/pic.jpeg")
const eclipse_shape = require("../public/images/ellipseshape.svg")
const since_badge = require("../public/images/sincebadge.svg")

export default function Home() {
    return <React.Fragment>
        <div className={`df jcc aic ${styles.main_container}`}>
            <div className={`df aic jcc ${styles.sub_container}`}>
                <div className={styles.left_container}>
                    <div className={styles.left_sub_container}>
                        <div className={styles.intro_heading}><div className={styles.one}>Hey, <br /> I‘m Manjunath,</div>
                            <div className={styles.two}>a full stack web developer.</div></div>
                    </div>
                    <div className={styles.eclipse_shape}>
                        <Image src={eclipse_shape} height={400} width={400} />
                    </div>
                    <div className={styles.dotshape}>
                    </div>
                    <div className={styles.circle}>
                    </div>
                </div>
                <div className={styles.right_container}>
                    <div className={`${styles.avatar}`}>
                        <Image src={profile_pic} height={400} width={400} />
                    </div>
                    <div className={styles.since_badge}>
                        <Image src={since_badge} height={200} width={400} />
                    </div>
                </div>
            </div>
        </div>
        <div className={`df aic ${styles.learn_more_btn}`}>
            <div>Learn more about me</div>
        </div>
    </React.Fragment>
}