import styles from './ProjectPage.module.css';

export function Development(){
  return(
    <div className={styles.pageStyles}>

      <div className={styles.header}>
        <img className={styles.headerPic} src='images/DevelopmentScreenshot.png'></img>
      </div>

      <h1 className={styles.title}>DEVELOPMENT</h1>
      <h4 className={styles.conciseIntro}>
        <a target='_blank' href='https://cozycapybara.github.io/development/'>
          Filtering and sorting in React (link)</a>
      </h4>

      <div className={styles.contentWrapper}>
        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>OVERVIEW</h3>
          <p className={styles.content}>
            I made a simple website to be able to look at the Arsenal roster and
            sort it based on number, or filter based on nationality/position. 
          </p>
        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>GOAL</h3>
          <p className={styles.content}>
            The goal was to use and learn React to be able to sort and filter a 
            list of items and actively render them on a screen.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>IMPLEMENTATION</h3>
          <p className={styles.content}>
            A big part of this project was learning how to use State and useState 
            in React to keep track of internal data. I used state to keep track of 
            each individual filter as well as a list of favorites, and each time 
            the website rendered I would pass any applied filters through the list of 
            players. The list of favorites also adds up the number of minutes for each 
            player, adding an aggregator which again used state variables in React.
          </p>
        </div>
      </div>


    </div>
  )
}