import styles from './Header.module.css';


export function Header(){
  return(
    <div id='header'>
      <div className={styles.flexWrapper}>
        <div>
          <img className={styles.picture} src='https://gvzoo.com/cms-data/gallery/blog/animals/capybara/capybara-library.jpg'></img>
        </div>

        <div className={styles.captionContainer}>
          <p className={styles.captionText}>
          Welcome to my portfolio!
          </p>
          <p className={styles.captionText}>
            I’m currently a Computer Science concentrator at Brown University just starting out with UI and UX design. Here are some projects from my first class! 
          </p>

        </div>
      </div>
    </div>
  )

}

export default Header;