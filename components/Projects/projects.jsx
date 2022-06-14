import styles from "./styles.module.scss"

export default function Projects() {
    const projects = [
        [{
            name: "Warrior Framework",
            img: "https://www.idashboards.com/wp-content/uploads/2020/06/IT-Service-Desk.png",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro cupiditate sequi assumenda quas omnis fugit unde culpa ducimus laboriosam, ea expedita, dolorum saepe autem totam perspiciatis, natus repellendus neque!"

        },
        {
            name: "Katana Framework",
            img: "https://media.istockphoto.com/vectors/dashboard-infographic-template-with-flat-design-graphs-charts-ui-vector-id1281725534?k=20&m=1281725534&s=612x612&w=0&h=r4GIBP9GaiU3zScOUeQfv9bALPcsD3dzAZjD_MY3aUU=",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro cupiditate sequi assumenda quas omnis fugit unde culpa ducimus laboriosam, ea expedita, dolorum saepe autem totam perspiciatis, natus repellendus neque!"

        }],
        [{
            name: "Make My Weekend",
            img: "https://blog.trello.com/hubfs/DashboardFinal.png",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro cupiditate sequi assumenda quas omnis fugit unde culpa ducimus laboriosam, ea expedita, dolorum saepe autem totam perspiciatis, natus repellendus neque!"

        },
        {
            name: "Smart Hire",
            img: "https://www.idashboards.com/wp-content/uploads/2020/06/IT-Service-Desk.png",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro cupiditate sequi assumenda quas omnis fugit unde culpa ducimus laboriosam, ea expedita, dolorum saepe autem totam perspiciatis, natus repellendus neque!"

        }],
        [{
            name: "Techy Notes",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvd4Q4m_mNORIxLjxILmVRH3pl0cBQSANLw&usqp=CAU",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro cupiditate sequi assumenda quas omnis fugit unde culpa ducimus laboriosam, ea expedita, dolorum saepe autem totam perspiciatis, natus repellendus neque!"

        },
        {
            name: "Geek Tool",
            img: "https://media.istockphoto.com/photos/medical-hud-interface-of-the-future-a-system-for-managing-medical-picture-id1332536904?b=1&k=20&m=1332536904&s=170667a&w=0&h=IanXnHmunsJAHfP6PMOYRY6Mtn5faqitCF2YeK4yZuQ=",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque porro cupiditate sequi assumenda quas omnis fugit unde culpa ducimus laboriosam, ea expedita, dolorum saepe autem totam perspiciatis, natus repellendus neque!"

        }],

    ]

    const generateProjectsBlocks = (project_pair) => {
        return project_pair.map((project) => {
            return (<>
                <div className={`df fdircol ${styles.project_block}`}>
                    <div>
                        <img src={project.img} />
                        <div className={`${styles.project_title}`}>{project.name}</div>
                    </div>
                    <div className={`${styles.project_desc}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit blanditiis doloremque, ex, officiis eius ipsa dolorem, aspernatur recusandae tempora quis? Culpa sapiente fugit sed non! Perferendis distinctio minus illo?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit blanditiis doloremque.
                    </div>
                    <div className={`${styles.readmore}`}>Read more</div>
                </div>
            </>)
        })
    }

    return <div className={`df fdircol ${styles.projects_container}`}>
        <div className={`mgr20 ${styles.projects_header}`}>Projects</div>
        <div className={`${styles.projects_outer_block}`}>
            {projects.map((project_pair) => {
                return <div className="df jcse aic fwrap mgr20">
                    {generateProjectsBlocks(project_pair)}
                </div>
            })}
        </div>
    </div>
}