import styles from './Projects.module.css';
import first2 from '../assets/first2.json';
import second2 from '../assets/second2.json';
import ProjectCard from './ProjectCard';


export function Projects(){
  return (
    <div id='root'>
      <div className={styles.mainFlex}>
        <div className={styles.rowFlex}>
          {first2.map((item) => {
            return (<ProjectCard item={item} />)
          })}
        </div>
        <div className={styles.rowFlex}>
          {second2.map((item) => {
            return (<ProjectCard item={item} />)
          })}
        </div>
      </div>
    </div>

  )
}