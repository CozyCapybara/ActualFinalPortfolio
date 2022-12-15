import { BakeryPicCarousel } from '../components/BakeryPicCarousel';
import { EyetrackingCarousel } from '../components/EyetrackingCarousel';
import styles from './ABProjectPage.module.css';


export function ABTesting(){

  const versionA = {
    "img1": "images/Version A heatmap.png",
    "img2": "images/Version A action replay.png",
    "img3": "images/Version A replay.png"
  }

  const versionB = {
    "img1": "images/Version B heatmap.png",
    "img2": "images/Version B action replay.png",
    "img3": "images/Version B replay.png"
  }

  return(
    <div className={styles.pageStyles}>

      <div className={styles.header}>
        <img className={styles.headerPic} src='images/Version A heatmap.png'></img>
      </div>

      <h1 className={styles.title}>EYETRACKING</h1>
      <h4 className={styles.conciseIntro}>
        Using data to better understand user behavior
      </h4>

      <div className={styles.contentWrapper}>
        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>OVERVIEW/GOAL</h3>
          <p className={styles.content}>
            In this group project, we were tasked with creating two versions of 
            the same page and trying to discern which website was more efficient/usable.
            We were able to track users eye movements using equipment at school to be 
            able to do this. 
          </p>
        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>DESIGNS</h3>
          <p className={styles.content}>
            Here were our two designs: 
          </p>
          <BakeryPicCarousel />

        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>ASSIGNED TASK</h3>
          <p className={styles.content}>
            We tasked participants with figuring out where to order and then looking for 
            where to find the menu. Once the users found this we ended the eye tracking.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>HYPOTHESIS</h3>
          <p className={styles.content}>
            We predicted that the users will find Version A faster to use as all 
            of the menu items are next to the title and logo of the bakery, whereas
            in Version B with the side panel eyes would gravitate up first. We also 
            predicted that people would see the navbar before they saw the "View Menu" 
            button at the bottom of the screen. 
          </p>
        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>RESULTS</h3>
          <p className={styles.content}>
            Here were the results, with the first slide being a heat map of the most 
            viewed areas of the website. The second and third slides for each version 
            show the movement of the eyes, although it is a bit hard to tell since we 
            don't have the video versions 
          </p>

          <h4 className={styles.miniHeader}>Version A Results</h4>
          <EyetrackingCarousel item={versionA} />

          <h4 className={styles.miniHeader}>Version B Results</h4>
          <EyetrackingCarousel item={versionB} />
        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>ANALYSIS</h3>
          <p className={styles.content}>
            The results aligned with our hypotheses - the users did gravitate towards 
            the nav bar first on their initial scans of the screen. Then, their gaze 
            eventually rested on the "View Our Menu" button at the bottom of the page.
          </p>
          <p className={styles.content}>
            In comparing the two versions, my prediction came true in that there was less
            overall eye movement with version A, implying a more efficient design. Since every 
            item was on the same eye level it made for less movement around the screen, and 
            quicker task finishing time. 
          </p>
        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>CONCLUSION</h3>
          <p className={styles.content}>
            I thought this project was an interesting introduction into eye tracking as a 
            form as UX research. I was able to understand how testing can affect design 
            decisions and really how much goes into the process of creating a website. 
          </p>
        </div>
      </div>


    </div>
  )
}