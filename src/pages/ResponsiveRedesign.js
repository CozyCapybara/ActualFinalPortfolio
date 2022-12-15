import styles from './ProjectPage.module.css';


export function ResponsiveRedesign(){


  return(
    <div className={styles.pageStyles}>
      
      <img className={styles.headerPic} src='images/ResponsiveRedesignHomePage.png'></img>

      <h1 className={styles.title}>RESPONSIVE REDESIGN</h1>
      <h4 className={styles.conciseIntro}>
        <a target='_blank' href='https://cozycapybara.github.io/ResponsiveRedesignBagelGourmet/'>
          A creative overhaul of an outdated website (link)</a>
      </h4>



      <div className={styles.contentWrapper}>
        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>OVERVIEW/GOAL</h3>
          <p className={styles.content}>
            Having just been introduced the world of HTML/CSS, and I remembered looking at the website 
            for one of my favorite resturants, Bagel Gourmet. Ridden with problems, it looked like 
            something out of Windows XP - and, using my new skills, thought it could use a redesign. 
          </p>
          <p className={styles.content}>
            Below you can see what is currently on the Internet: 
          </p>
          <img className={styles.homepage} src='images/Bagel gourmet home screenshot.png'></img>
          <p className={styles.content}>
            I wanted to redesign the home page for a more modern, stylish feel that could better match
            the goodness of what was a Bagel Gourmet bagel. 
          </p>

        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>PROBLEMS</h3>
          <p className={styles.content}>
            Upon first glace of the website, there were already plenty of immediately visible 
            problems that could use improvement:
          </p>
      
          <ul className={styles.content}>
            <li>
              The placement for many of the items on the page were either unintuitive or confusing - 
              much of the main content is weirdly off center.
            </li>
            <li>
              There is nowhere to order food, however upon clicking the menu you can order for 
              delivery or pickup.
            </li>
            <li>
              Bagel Gourmet has multiple locations serving the same food, and yet only one location
              is listed on the website.
            </li>
          </ul>

          <p className={styles.content}>
            Beyond the intial problems, there were some accessibility problems to address. I put the 
            current website into WAVE Web to uncover some of these issues and came away with a few more.
          </p>
          
          <ul className={styles.content}>
            <li>
              <span className={styles.bullets}>Low Contrast</span> - 
              Text and background had similar colors and background colors, which made it 
              difficult to see the differences in elements of the page. 
            </li>
            <li>
              <span className={styles.bullets}>Not Dynamic</span> - 
              The website was not responsive, it could not be shrunk to fit different screen 
              sizes, and many of the elements were fixed and wouldn't change with the browser.
            </li>
            <li>
              <span className={styles.bullets}>Inconsistent Text Size</span> - 
              There isn't really any consistent flow for headers and text, some descriptive text 
              is bigger than some headers, and there's no navigation hierarchy.
            </li>
          </ul>
          

        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>WIREFRAMING</h3>
          <p className={styles.content}>
            With these problems in mind, I went to work on wireframing a design in low-fi, 
            using Balsalmiq to generate high quality sketches. The first image is a laptop
            wireframe, and below is a mobile one. I added the mobile wireframe to add 
            responsiveness. 
          </p>
          <div className={styles.picContainer}>
            <img className={styles.bigPic1} src='images/Laptop Wireframe.png'></img>
            <img className={styles.bigPic2} src='images/Mobile new.png'></img>
          </div>
          


        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>PROTOTYPE</h3>
          <div className={styles.prototypeContainer}>
            
            <div className={styles.pWrapper}>
              <p className={styles.content}>
                After making some low-fi wireframes, it was time to put them into a high-fi 
                prototype, in which I used Figma. Before I began to add the final touches to
                the website however, I came up with a color palette and style guide I wanted 
                to use to best represent the brand. Click the style guide to open a larger 
                view with a Figma link.
              </p>
            </div>

            <div className={styles.imgWrapper}>
              <a target='_blank' className={styles.styleGuideLink} href='https://www.figma.com/file/y5o5VvuWRIBnwFp2RGITdI/Responsive-Redesign?node-id=30%3A306&t=GWJARyfiwhEcjMy0-1'>
                <img className={styles.styleGuide} src='images/figma style guide.png'></img>
              </a>
            </div>
            

          </div>
          
          <p className={styles.content}>
            And below are the final Figma designs based on the wireframes and style guide:
          </p>

          <div className={styles.picContainer}>
            <img className={styles.figmaPic} src='images/figma website.png'></img>
            <img className={styles.figmaPic} src='images/figma tablet.png'></img>
            <img className={styles.figmaPic} src='images/figma mobile both.png'></img>
          </div>
         
            
          
        </div>

        <div className={styles.contentSection}>
          <h3 className={styles.contentHeader}>CONCLUSION</h3>
          <p className={styles.content}>
            I came away from this project learning a lot of new things. I came to understand the different types of problems 
            that can affect a poorly designed website, and also how to fix those problems through
            better UI design. The process of sketching and prototyping also proved
            very useful in creating a stylish website that I could be proud of, and lastly
            I learned how to code my design in HTML/CSS. 
          </p>
        </div>
      </div>

    </div>


  )
}

export default ResponsiveRedesign;