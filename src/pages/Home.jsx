import '../css/home.css'

const Home = () => {
  return (
    
    <div className='body'>
    
    <section className="study-space">
      <header className="header">
       <h1 className="logo">APTIMI</h1>
        <nav className="nav-links">
          <a href="#" className="nav-link nav-link-active">HOME</a>
          <a href="#" className="nav-link">FAQs</a>
          <a href="#" className="nav-link">Contact us</a>
        </nav>
      </header>
    
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Create Your Personalized Study Space -</h1>
         <span style={{fontFamily: "Georgia, 'Times New Roman', Times, serif", fontWeight: "400" , fontSize: "40px", marginLeft: "100px" , marginTop:" 20px"}}>STUDY SMART, ACHIEVE MORE!</span>
            <p className="hero-subtitle">Experience all-in-one features for your needs!</p>
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c88940896824b8046861df5d5ad7dfd720aaa4779c3db9ce5aa2b7be9ea42000?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="Study Space" className="hero-image" />
        </div>
      </section>
    
      <div className="cta-buttons">
        <a href="#" className="cta-button cta-primary">GET STARTED</a>
        <a href="#" className="cta-button cta-secondary">LOGIN</a>
      </div>
      <div className="wave-container">
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="none" stroke="black" strokeWidth="2" d="M0,50 Q360,0 720,50 T1440,50"></path>
        </svg>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="none" stroke="white" strokeWidth="2" d="M0,50 Q360,100 720,50 T1440,50"></path>
        </svg>
    </div>
      <section className="features">
        <h2 className="features-title">Awesome features</h2>
        <div className="lines">
      <div className="line-container">
       
            <div className="line line1"></div>
            <div className="line line2"></div>
            
        </div></div>
        <div className="container">
            <div className="card-container">
                <div className="card">
                    <img alt="A hand writing notes in a notebook" src="https://storage.googleapis.com/a1aa/image/DS9FX1gbpOrXJBZx7VNebokevkZb0ESpdroFdeg0ipCTQJMnA.jpg"/>
                    <h5 className="card-title">Create your notes and Illustrate too!</h5>
                    <p className="card-text">Combine writing and sketching in one space to enhance your learning experience!</p>
                </div>
                <div className="card">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/95a76cfcc56cb6b0529a1a1fe565bcb2bbb7eb2123073ff0bc9d6d92a47e61c0?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="Feature 2" className="feature-icon" />
                    <h5 className="card-title">Soft Music & 
                        <br/>Frequencies</h5>
                    <p className="card-text">Soothing playlists designed to concentrate and enhance your study sessions!</p>
                </div>
                <div className="card">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7daa21ce5f38a988d87e3d6bcc9e96a8fc474374a2eb1ff0d91b04ab7ad95b3c?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="Feature 3" className="feature-icon" />

                    <h5 className="card-title">Study Rewards: Unlock Badges & Levels!</h5>
                    <p className="card-text">Unlock rewards as you dedicate more hours to your studies!</p>
                </div>
            </div>
        </div>
      </section>
       
      <section className="todo-section">
        <div className="todo-row">
          <div className="todo-image-col">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/45ac8409434d56cc9299265506c8d8eaf9cf77afe03950e694275e2b38c7fc4c?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="To-do List" className="todo-image" />
          </div>
          <div className="todo-content-col">
            <div className="todo-content">
              <h2 className="todo-title">To-do lists and weekly planners</h2>
              <p className="todo-description">Manage tasks by subject, set deadlines, and track progress. Plan your week, add, edit, or delete tasks, and keep everything on schedule with easy date filters!</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="file-format-section">
        <div className="file-format-content">
          <h2 className="file-format-title">Open Any File Format with Ease</h2>
          <p className="file-format-description">Effortlessly access PDFs, Word, Excel, PowerPoint, and more, all within the app. Keep your study materials organized and easily accessible in one place!</p>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/608b6ead556ef67b8e554651e41a60655073c5f2a628234591dd0236f14a6cb0?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="File Formats" className="file-format-image" />
      </section>
      
      <section className="do-not-disturb-section">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/961a3aeb8c4f5ad619d4cebef9437f1fa638877f43d494f95be2c5db61062816?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="Do Not Disturb" className="do-not-disturb-image" />
        <div className="do-not-disturb-content">
          <h2 className="do-not-disturb-title">Stay in the Zone: Do Not Disturb On!</h2>
          <p className="do-not-disturb-description">Activate to mute notifications and create your study sanctuary! Incoming calls will still be visible but muted, so you can focus without interruptions.</p>
        </div>
    </section>
    
    <div className="feature-icons-wrapper1">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/455a24d0cf23c37dbc2eab54739b8279338a45ff4d4d7be7241f4c3e1624e922?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="Focus Mode" className="feature-icon-1" />
  
    
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0462bd470edd83fe991daddb8735b820296f223022b5ac24c8986cadb5bfa234?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="Additional Feature" className="feature-icon-2" />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ece0a9f0eda81da9cf2102872c5c8b48bd6abc1be95f76af156933dcd4708f1?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="Feature Icon 3" className="feature-icon-3" />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fae6f0ed35c2eea7f1085c1cbf1dbeae7fba9c7d4ea03c096089fd126e527ebf?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="Feature Icon 4" className="feature-icon-4" />
    </div>
    <ul className="feature-icons-wrapper">
        <li className="feature-icon">
           
            <p>Annotations</p>
        </li>
        <li className="feature-icon">
            <p>Sticky notes</p>
        </li>
        <li className="feature-icon">
     
            <p>Timers and<br/> reminders</p>
        </li>
        <li className="feature-icon">
       
            <p>Voice to Text</p>
        </li>
    </ul>
    
    <div className="more-features">
      <p className="more-features-text">And much more...!</p>
    </div>
      </section>
      <div className="full-ellipse-background">
    
          <div className="team-content">
            
                  <h2 className="team-title">MEET OUR AMAZING TEAM.</h2>
                  <div className="container">
                  <button className="btn">
                    See all <i className="fas fa-arrow-right"></i>
                </button>
                <img loading="lazy" src="https://i.pinimg.com/originals/fb/db/7c/fbdb7ccdc0d8c7acfa99b3f1a1d8aa44.gif" className="team-image1" alt="Descriptive image content" />
                </div>
               
                  
                      
                  
             </div>
    </div>
    <button className="signup-button">SIGN UP FOR FREE</button>
    
   
     
    <div className="vision-container">
        <div className="vision-image">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2Fc18fb31782d744ef86b24158dec485cb%2F969806d307074a0da80b9c70fc42171a" className="profile-image" alt="Profile picture" style={{width: "100%", height: "auto"}} />
        </div>
        <div className="vision-content">
          <div className="vision-title">OUR VISION</div>
          <div className="vision-text">Our vision is to create a powerful study tool that empowers students to optimize their learning experience. By providing a seamless, distraction-free environment, we aim to help students stay organized, manage tasks efficiently, and track their progress with ease. With features like personalized note-taking, study timers, file management, and focus-enhancing sounds, we strive to make studying more productive, motivating, and enjoyable. Looking ahead, we plan to introduce premium features such as one-on-one tutors, daily facts for inspiration, and other enhancements that further enrich the learning experience and support academic success.</div>
        </div>
      </div>
      <div className="wave-container">
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="none" stroke="black" strokeWidth="2" d="M0,50 Q360,0 720,50 T1440,50"></path>
        </svg>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="none" stroke="white" strokeWidth="2" d="M0,50 Q360,100 720,50 T1440,50"></path>
        </svg>
    </div>
      <section className="contact-section">
        <h2 className="contact-title">CONTACT US</h2>
        <p className="contact-description">Have a question? OR need support? Reach out to us!</p>
        <div className="contact-methods">
            <div className="contact-method">
            <i className="fas fa-map-marker-alt"></i>
            <p className="contact-heading">Phone</p>
           </div>
          <div className="contact-method">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/06137002887cd17e13dcbdbdaf7243eb3ac01209bf7cdf0e07601a4e04b44bb7?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="Phone Icon" className="contact-icon" />
            <p className="contact-heading">Phone</p>
          </div>
          <div className="contact-method">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/076a30998bf433a23fc84f8169b7f2dfaf6b3c4d2c5e47d83556ec470935083c?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="Email Icon" className="contact-icon" />
            <p className="contact-heading">Phone</p>
          </div>
        </div>
      </section>
    
      <footer className="footer">
        <div className="footer-column">
          <h3 className="footer-title">Resources</h3>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Download App</a>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Company</h3>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Support</a>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Follow us</h3>
          <div className="social-links">
            <a href="#" className="social-link">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/24d098c3332d121a6002940784df3273e21fa575629a2d59b20ad0c3c485646f?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="Facebook Icon" className="social-icon" />
              <span>Facebook</span>
            </a>
            <a href="#" className="social-link">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa76ae308240ff4ccd198efe1e675a047e1533b14abe5309e6cd671c404655e2?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="Instagram Icon" className="social-icon" />
              <span>Instagram</span>
            </a>
            <a href="#" className="social-link">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/162142761d59ea0353d5e3ab0f549818c5d12a2ad4cb26e4a61474fe59819efe?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="Twitter Icon" className="social-icon" />
              <span>Twitter</span>
            </a>
            <a href="#" className="social-link">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc34890fb2c8ba230ea0173bd7c79a548d40f98bffd90fe988f2104c60ec0022?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" alt="LinkedIn Icon" className="social-icon" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
</div>

  )}

export default Home
