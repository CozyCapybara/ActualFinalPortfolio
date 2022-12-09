import styles from './ResponsiveRedesign.module.css';

export function ResponsiveRedesign(){
  return(
    <div id='root'>
      <h1 className={styles.title}>Responsive Redesign Project</h1>
    <div className={styles.sectionHeader}>Introduction</div>
    <div className="content">
      <p>
        This project was done as a part of CSCI1300 at Brown University. 
      </p>
      <p>
        The project in question was to redesign a simple website page using HTML and CSS of any 
        website in which improvements could be made. I chose the website for one of my favorite 
        places to spend excessive money on Thayer, <a href="http://bagelgourmetcafe.com/" target="_blank">Bagel Gourmet. </a> 
      </p>
    </div>
    <div className={styles.sectionHeader}>Current Website</div>
    <div className={styles.theOriginal}>
      <p>Here is a screenshot of the current website...</p>
      <img src="screenshots/original website screenshot.png"/>
    </div>

    <div className={styles.sectionHeader}>Problems</div>
    <div className={styles.problems}>
      <div className={styles.problem}>
        <p className={styles.problemLabel}>Efficiency</p>
        <ul>
          <li>Efficiency is good once the interface is learned, every link is right there </li>
          <li>Generally one click away for each item, however not intuitive placement.</li>
        </ul>
      </div>

      <div className={styles.problem}>
        <p className={styles.problemLabel}>Memorability</p>
        <ul>
          <li>The interface is not easy to learn, the section alignments are confusing</li>
          <li>Users may remember how to use the website but for the wrong reasons</li>
        </ul>
      </div>

      <div className={styles.accessiblity}>
        <p className={styles.problemLabel}>Accessibility</p>
        <p className={styles.problemDescription}> 
          When I put <a href="http://bagelgourmetcafe.com/" target="_blank">bagelgourmetcafe.com </a> 
          into Waive, a variety of glaring accessiblity issues come up. To highlight a few:
          </p>
        <ul>
          <li>
            <span className={styles.bulletPoints}>Low Contrast</span> - Much of the text and backgrounds had very similar colors,
            making it hard to discern text from images
          </li>
          <li>
            <span className={styles.bulletPoints}>Not Dynamic</span> - the website cannot be resized to fit different 
            devices, crucially mobile
          </li>
          <li>
            <span className={styles.bulletPoints}>Inconsistent Text Size</span> - the lack of a font table or any flow for
            headers and text makes it clunky and hard to figure out what is 
            important on the page
          </li>
        </ul>
      </div>

      
      
    </div>
    <div className={styles.sectionHeader}>Low-Fi Wireframing</div>
    <div className={styles.lowFiContainer}>
      <div className={styles.pContainer}>
        <p className={styles.figmaDescription}>
          Here are the lo-fi wireframes that were put together in Balsalmiq, in a series of 
          screenshots for each type of wireframe. Annotations for which design issues were 
          addressed are in text boxes with arrows pointing on the wireframes.
        </p>
      </div>
      <div className="label-embed">
        <p className={styles.wireframeLabel}>Laptop</p>
        <img className={styles.wireframePhoto} src="screenshots/Laptop Wireframe.png" />
      </div>
      <div className="label-embed">
        <p className={styles.wireframeLabel}>Mobile</p>
        <img className={styles.wireframePhoto} src="screenshots/Mobile.png"/>
      </div>
      <div className="label-embed">
        <p className={styles.wireframeLabel}>Tablet</p>
        <img className={styles.wireframePhoto} src="screenshots/Tablet Wireframe.png"/>
      </div>
    </div>



    <div className={styles.sectionHeader}>Style Guide</div>
    <div className={styles.styleGuide}>
    </div>
    <div className={styles.sectionHeader}>High-Fi Prototyping</div>
    <div className={styles.highFiContent}>
      <div className={styles.pContainer}>
        <p className={styles.figmaDescription}>
          Here are the hi-fi prototypes that were put together in Figma, embedded into the code. 
          All annotations are in the rectangular boxes to the left or right of the prototypes themselves,
          within the embedded Figma.
        </p>
      </div>
      <div className="label-embed">
        <p className={styles.wireframeLabel}>Laptop</p>
      </div>
      <div className="label-embed">
        <p className={styles.wireframeLabel}>Mobile</p>
      </div>
      <div className="label-embed">
        <p className={styles.wireframeLabel}>Tablet</p>
      </div>

    </div>
    <div className={styles.sectionHeader}>Redesigned Website</div>
    <div className="content">
      <p>Here's the link for the redesgined website</p>
      <p><a href="https://cozycapybara.github.io/ResponsiveRedesignBagelGourmet/">Deployed Link</a> </p>
    </div>
    <div className={styles.sectionHeader}>Links and Citations</div>
    <div className="links">
      <p>Photo Links</p>
      <ul>
        <li><a href="https://www.instagram.com/p/COaonsxFWo5/?igshid=YmMyMTA2M2Y=">
          Breakfast sandwich</a>
        </li>
        <li><a href="https://images6.alphacoders.com/817/817113.jpg">Bagel Background</a> </li>
        <li><a href="https://handletheheat.com/wp-content/uploads/2016/08/how-to-make-bagels-recipe-SQUARE-768x768.jpg">Bagels</a> </li>
        <li><a href="https://www.vindulge.com/wp-content/uploads/2020/05/Steak-and-Egg-Breakfast-Burrito-on-the-Grill.jpg">Breakfast Burrito</a> </li>
      </ul>

      <p>Resources and References for code</p>
      <p><a href="https://www.makeuseof.com/responsive-navigation-bar-using-html-and-css/">Responsive Navigation Bar</a></p>
      <p><a href="https://www.w3schools.com/howto/howto_css_image_text_blocks.asp">Text Overlay Over Image</a></p>
    </div>
    
    
    </div>



  )
}