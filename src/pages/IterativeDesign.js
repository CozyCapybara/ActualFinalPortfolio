import { IDSketchesCarousel } from '../components/IDSketchesCarousel';
import { IDWireframeCarousel } from '../components/IDWireframeCarousel';
import styles from './IDProjectPage.module.css';


export function IterativeDesign(){

  /*
  <ol className={styles.listContent}>
    <li>Without leaving the homepage, what are your initial impressions of the website? Explain your answer.</li>
    <li>Sign into your account and enter the homepage.</li>
    <li>Without leaving this page, in your own words, describe what you think you can do upon signing in.</li>
    <li>Without leaving this page, indicate where you would go to place a new bet. 
      **Do not select anything yet.** Describe what you would expect to see next.
    </li>
    <li>Take as much time as you need to explore this prototype. Move on to the next task when you're ready.</li>
    <li>Look at your current bets and check out how you're doing.</li>
    <li>Try to look at a league that a friend is betting on. How did you do this?</li>
    <li>Now, you want to make a new bet because you want more money. Pick a game to bet on and make a bet.</li>
  </ol>
  
  <p className={styles.content}>
    Given an introduction to Novig and the state of our prototype, we gave each 
    tester this series of tasks:
  </p>
          */
  return(
    <div className={styles.pageStyles}>

      <div className={styles.header}>
        <img className={styles.headerPic} src='images/IterativeDesignScreenshot.png'></img>
      </div>

      <h1 className={styles.title}>ITERATIVE DESIGN</h1>
      <h4 className={styles.conciseIntro}>
        <a target='_blank' href='https://www.figma.com/proto/7HOfRo6Q77w6tVwlqVKFxT/Iterative-Design?page-id=0%3A1&node-id=1%3A4&viewport=-290%2C312%2C0.15&scaling=scale-down&starting-point-node-id=1%3A4'>
          Attempting to prototype a siteless startup (link)</a>
      </h4>

      <div className={styles.contentWrapper}>
        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>INTRODUCTION</h3>
          <p className={styles.content}>
            This was a group project in which we chose an emerging startup to try and 
            design a prototype website using Figma. Upon searching YCombinator for 
            some interesting credible startups, we came across Novig.
          </p>
        </div>


        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>NOVIG</h3>
          <p className={styles.content}>
            What is Novig? From YCombinator:
          </p>
          <p className={styles.quote}>
            "Novig is a commission-free sports betting exchange that guarantees bettors 
            the best lines and eliminates the need for traditional sportsbooks. We do 
            this by enabling users to bet directly against friends or the market, rather 
            than against the house, making the betting experience more efficient, fair, 
            and, most importantly, profitable. We built a two-sided marketplace that 
            eliminates the middle man, becoming the NASDAQ of betting."
          </p>
        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>GOAL</h3>
          <p className={styles.content}>
            The goal was to the best of our ability design the functional components 
            of a working website to achieve the goals of Novig. We wanted an experience 
            catered to the user but also focusing on the features that make Novig 
            different from other sports betting websites.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>SKETCHING</h3>
          <p className={styles.content}>
            First, we sketched out several ideas for different ways of laying out 
            the website information and content. This was more of a free sketch, 
            just trying to get ideas on paper rather than come up with a final 
            concept.
          </p>
          <div className={styles.carouselContainer}>
            <IDSketchesCarousel />
          </div>
          
        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>WIREFRAMING</h3>
          <p className={styles.content}>
            Next, we created the wireframes in Balsalmiq with the elements 
            we liked most from the sketches. 
          </p>
          <div className={styles.carouselContainer}>
            <IDWireframeCarousel />
          </div>
          
        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>CRITIQUE AND FEEDBACK</h3>
          <p className={styles.content}>
            Following this, we made the inital version of our project in Figma 
            got feedback from classmates. Each peer was given two minutes to 
            click around the prototype and play with the features. Here are 
            some notes we took: 
          </p>

          <ul className={styles.content}>
            <li>Use colors or font to distinguish Live Scores</li>
            <li>Could be more on the homepage, bets and status instead of just scores</li>
            <li>Organize acttive bets should act more like linsk or buttons</li>
            <li>Feed tab should have live recent bets</li>
            <li>Friends list is unclear, need an add friends page or button</li>
          </ul>

        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>USER TESTING</h3>
          <p className={styles.content}>
            We wanted to get more precise and detailed feedback with users who could 
            spend more time than our peers, so we went to UserTesting.com and created  
            a task for random paid testers to complete and give anonymous feedback.             
          </p>
          


          <h4 className={styles.miniHeader}>Observations</h4>

          <div className={styles.linkWrapper}>
            <a className={styles.content} href="https://app.usertesting.com/v/70971002-e178-4f91-bc10-5d27fff732e5?encrypted_video_handle=1e6cca1c-67c4-4829-b250-8231dac46aec#!/notes&shared_via=link">User 1</a>
            <a className={styles.content} href="https://app.usertesting.com/v/f52514f9-9d4c-48b1-8e25-f28066b701c4?encrypted_video_handle=31ea5c3c-e087-4489-b672-0b54cf77ea74#!/notes&shared_via=link">User 2</a>
            <a className={styles.content} href="https://app.usertesting.com/v/9c675fba-44a5-441b-8bed-0e8053d15f24?encrypted_video_handle=188336e0-a474-4ae0-98ff-92e3a6e85b11#!/notes&shared_via=link">User 3</a>
          </div>
          <p className={styles.content}>
            Following the feedback, here were the main observations we got from the 3 reviewers:
          </p>
          <ul className={styles.listContent}>
            <li>
              Inital impressions conveyed a lack of trust for the website, citing the lack of 
              images and the simplistic design for there being something "missing" from the website.
            </li>
            <li>
              Lack of much variety in colors as well as lack of images and icons also threw users 
              off on the overall design, were expecting something more flashy for what was supposed 
              to be a betting website.
            </li>
            <li>
              Users found the home page to be a little bit unintuitive; they didn't know what the feed 
              was supposed to show or why the Novig logo navigates to the home page without much 
              information about the page.
            </li>
            <li>
            The website was easy to navigate, most tasks were easily completed even to those 
            without much betting experience.
            </li>
            <li>
            The biggest issue was the lack of clarity in making a bet - clicking a score or a game 
            doesn't make the user believe they can make a bet from it, until they experiment and 
            click on it.
            </li>

          </ul>
          <h4 className={styles.miniHeader}>Analysis</h4>

          <p className={styles.content}>
            The User Testing results confirmed some of our predictions and surprised us in others. 
            The task was meant to test much of the functionality of the prototype we had implemented 
            by having users check on their bets and their leagues and then choosing to make a new 
            bet - the two main functionalities. We feel that we met the bar in viewing current bets 
            and implementing the friend interfaces, as users found these functions very clear. Our 
            choices for tabs on the navigation bar were clear and easy to guess what would be on 
            each. However, we fell short in the betting functionality - the lack of clear buttons 
            and markings to make bets across all pages caused confusion as there were no affordances 
            for placing a bet.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>CONCLUSION</h3>
          <p className={styles.content}>
            Overall, a difficult project given the scale of such a website, but I think with more 
            time we were heading in the right direction. I learned a lot about the how much time 
            and effort a full-scale website takes with all the pages you have to design and implement 
            with so many different factors to consider on the user side. 
          </p>
        </div>
      </div>


    </div>
  )
}