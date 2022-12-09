import styles from './ProjectCard.module.css';
import {Link} from 'react-router-dom';

export function ProjectCard({item}) {
  
  return(
    <div className={styles.container}>
      <img className={styles.picture} src={item.image}></img>
      <div className={styles.overlay}>
        <div className={styles.overlayContainer}>
          <p className={styles.text}>{item.name}</p>
          <Link to={item.link}>
            <button className={styles.button}>View</button>
          </Link>
          
        </div>
      </div>
    </div>
  
  )
}

export default ProjectCard;

