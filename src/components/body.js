import 'bootstrap/dist/css/bootstrap.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../assets/vendor/boxicons/css/boxicons.min.css'
import '../assets/vendor/glightbox/css/glightbox.min.css'
import '../assets/vendor/swiper/swiper-bundle.min.css'
import '../App.css'
import logoHtml from '../assets/img/logo-html.png';
import logoCss from '../assets/img/logo-css.png';
import logoJs from '../assets/img/logo-js.png';
import logoJava from '../assets/img/logo-java.png';
import logoBs from '../assets/img/logo-bs.png';
import logoSb from '../assets/img/logo-spring-boot.png';
import logoRest from '../assets/img/logo-rest.png';
import logoMysql from '../assets/img/logo-mysql.png';
import logoReact from '../assets/img/logo-reactjs.png';
import logoVsCode from '../assets/img/logo-vscode.png';
import logoIntelliJ from '../assets/img/logo-IntelliJ.png';
import logoAxure from '../assets/img/logo-axure.png';
import logoWorkbench from '../assets/img/logo-mysql.png';
import logoEclipse from '../assets/img/logo-eclipse.png';
import logoSTS from '../assets/img/logo-sts.png'; 
import logoPostman from '../assets/img/logo-postman.png';
import logoPhotopea from '../assets/img/logo-photopea.png';
import logoCanva from '../assets/img/logo-canva.png';
import logoDrawio from '../assets/img/logo-drawio.png';
import kyn from '../assets/img/kyn.png';
import car from '../assets/img/car.png';
import abc from '../assets/img/abc.png';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import profile4 from '../assets/img/pp-4.jpg'
import portrait from '../assets/img/self-portrait.jpg'

function Body() {
  const typedRef = useRef(null);

  useEffect(() => {

  const options = {
    strings: ['Front-End Developer', 'Software Engineer', 'Back-End Developer', 'Full-Stack Developer'],
    typeSpeed: 50,
    loop: true,
  };  

  const typed = new Typed(typedRef.current, options);

  return () => {
    typed.destroy();
  };
  }, []);

  return (
    <div>
    <div> 
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
       
       {/* SIDEBAR */}
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={profile4} alt="" className="img-fluid rounded-circle"/>  
            {/* <h1 className="text-light text-center"><a href="http://localhost:3000/">Johnberl Keer Ababon</a></h1> */}
            {/* <div className="social-links mt-3 text-center">
              <a href="https://educlaasglobal-my.sharepoint.com/:b:/g/personal/bdse-0922-112_learning_educlaas_com/ET-sQQOIxKJBiz2oDYiKD2EBMdfqFSyGklMIXmZvrYoLJA?e=2RPmDN" 
                target="_blank" rel="noopener noreferrer"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Resume" 
                className="resume"><i class='bx bxs-file-pdf'></i></a>
              <a href="https://www.linkedin.com/in/johnberl-keer-ababon/" target="_blank" rel="noopener noreferrer"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="LinkedIn" 
                className="linkedin"><i className="bx bxl-linkedin"></i></a>
              <a href="https://www.facebook.com/jonbaaru" target="_blank" rel="noopener noreferrer"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Facebook"
                className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="https://youtu.be/nGcgzPFmS_0" target="_blank" rel="noopener noreferrer"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Youtube" 
                className="youtube"><i className="bx bxl-youtube"></i></a>
              <a href="https://www.instagram.com/jonbaaru" target="_blank" rel="noopener noreferrer"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Instagram" 
                className="instagram"><i className="bx bxl-instagram"></i></a>
            </div> */}
            <nav id="navbar" className="nav-menu navbar p-4">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active">
                  <i className="bx bxs-home"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto">
                  <i className="bx bxs-user"></i> <span>About</span></a></li>
              <li><a href="#skills" className="nav-link scrollto">
                  <i className="bx bxs-brain"></i> <span>Skills</span></a></li>
              <li><a href="#resume" className="nav-link scrollto">
                  <i className="bx bxs-buildings
                  "></i> <span>Experience</span></a></li>
              <li><a href="#resume" className="nav-link scrollto">
                  <i className="bx bxs-book"></i> <span>Journey</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bxs-book-content"></i> <span>Projects</span></a></li>
              <li><a href="#contact" className="nav-link scrollto">
                  <i className="bx bxs-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
          </div>

        </div>
      </header>
      {/* END OF SIDEBAR */}

    {/* HERO BANNER */}
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <label className='text-white text-center d-block fs-5'>My name is</label><br></br>
      <h1 className='text-light'>Johnberl Keer Ababon</h1>
      <p className='text-offwhite'>
        I aspire to be a <span ref={typedRef} className="typed text-orange" data-typed-items="Front-End Developer, Back-End Developer, Full-Stack Developer"></span>
      </p>
      <div className='d-flex justify-content-end'>
        <a className='btn btn-outline-light small me-2' href='http://tinyurl.com/jbkeerresume' target='_blank' rel="noreferrer">Resume</a>
        <a className='btn btn-outline-light small' href="https://www.linkedin.com/in/johnberl-keer-ababon/" target='_blank' rel="noreferrer">LinkedIn</a>
        {/* <link className='btn btn-outline-light small' rel="pingback" href="http://tinyurl.com/jbkeerresume" defaultValue={"Press"} /> */}
      </div>
    </div>
    {/* <div className='align-items-end'>
      <a href='#about' className='p-5 bg-white'><i class='bx bxs-chevrons-down'></i></a>
    </div> */}
    </section>
    {/* END OF HERO BANNER */} 

      <main id="main">
        {/* ABOUT */}
        <section id="about" className="about text-white">  
          <div className="container">

            <div className="section-title">
              <h2>About</h2>
              <p>I am a passionate software engineering student
                driven by my <strong>curiosity</strong>, passion for creating <strong>innovations</strong>, 
                and eagerness to <strong>learn</strong> something new everyday.</p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                <img src={portrait} className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" >
                <h3>Aspiring Software Engineer &nbsp; | &nbsp; Full-Stack Developer</h3>
                <p className="fst-italic mt-3">
                  I'm currently pursuing my <strong>Applied Degree in Software Engineering at Lithan Academy - eduCLaaS. </strong>
                  My academic curriculum has equipped me with a solid foundation in programming principles, 
                  algorithms, software development methodologies, UI/UX design, and more.
                </p>
                <div className="row mt-5">
                  <div className="col-lg-6 mt-4">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Johnberl Keer Ababon</span></li>
                      {/* <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>13 May 2003</span></li> */}
                      <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Cebu, Philippines</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6 mt-4">
                    <ul>
                      {/* <li><i className="bi bi-chevron-right"></i> <strong>Occupation:</strong> <span>Software Engineering Student</span></li> */}
                      <li><i className="bi bi-chevron-right"></i> <strong>LinkedIn:</strong> 
                          <a href='https://www.linkedin.com/in/johnberl-keer-ababon/' className='text-white'
                             target='_blank'rel="noopener noreferrer">linkedin.com/in/johnberl-keer-ababon</a></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jbkeerababon@gmail.com</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+63 953 0625 624</span></li>
                      {/* <li><i className="bi bi-chevron-right"></i> <strong>Employment:</strong> <span>Open to opportunities</span></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* END OF ABOUT */}
        
        {/* SKILLS */}
        <section id="skills" className="services">  
          <div className="container text-white">

            <div className="section-title text-white">
              <h2>Skills</h2>
              <p>Throughout my one-year bootcamp experience, I have been consistently expanding my 
                knowledge and skills in developing a wide range of applications. I have gained 
                expertise in both front-end and back-end web development, equipping me with a 
                comprehensive understanding of the entire website development process. I am confident 
                in showcasing the following skills that I have acquired thus far.</p>
            </div>

            <div id="technology">
              <div className="icon"><img src={logoHtml} alt='html logo' className='img-logo'></img><div>HTML</div></div>
              <div className="icon"><img src={logoCss} alt='css logo' className='img-logo'></img><div>CSS</div></div>
              <div className="icon"><img src={logoJs} alt='javascript logo' className='img-logo'></img><span>JavaScript</span></div>
              <div className="icon"><img src={logoBs} alt='bootstrap logo' className='img-logo'></img><span>Bootstrap</span></div>
              <div className="icon"><img src={logoJava} alt='java logo' className='img-logo'></img><span>Java</span></div>
              <div className="icon"><img src={logoSTS} alt='spring framework logo' className='img-logo'></img><span>Spring Framework</span></div>
              <div className="icon"><img src={logoSb} alt='spring boot logo' className='img-logo'></img><span>Spring Boot </span></div>
              <div className="icon"><img src={logoRest} alt='rest API logo' className='img-logo'></img><span>REST API</span></div>
              <div className="icon"><img src={logoMysql} alt='MySQL logo' className='img-logo'></img><span>MySQL</span></div>
              <div className="icon"><img src={logoReact} alt='ReactJS logo' className='img-logo'></img><span>ReactJS</span></div>
            </div>
              <br></br>
            <h2 className='fw-bold mt-5'>Tools</h2>
            <div id="technology">
              <div className="icon"><img src={logoVsCode} alt='VS Code logo' className='img-logo'></img><span>Visual Studio Code</span></div> 
              <div className="icon"><img src={logoIntelliJ} alt='IntelliJ logo' className='img-logo'></img><span>IntelliJ Idea</span></div>
              <div className="icon"><img src={logoAxure} alt='axure logo' className='img-logo'></img><span>Axure Prototype</span></div>
              <div className="icon"><img src={logoWorkbench} alt='workbench logo' className='img-logo'></img><span>MySQL Workbench</span></div>
              <div className="icon"><img src={logoEclipse} alt='eclipse logo' className='img-logo'></img><span>Eclipse</span></div>
              <div className="icon"><img src={logoSTS} alt='spring tool suite logo' className='img-logo'></img><span>Spring Tool Suite</span></div>
              <div className="icon"><img src={logoPostman} alt='postman logo' className='img-logo'></img><span>Postman</span></div>
              <div className="icon"><img src={logoPhotopea} alt='photopea logo' className='img-logo'></img><span>Photopea</span></div>
              <div className="icon"><img src={logoCanva} alt='canva logo' className='img-logo'></img><span>Canva</span></div>
              <div className="icon"><img src={logoDrawio} alt='draw.io logo' className='img-logo'></img><span>Draw.io</span></div>
            </div>

          </div>
        </section>
        {/* END OF SKILLS */}

        {/* JOURNEY */}
        <section id="resume" className="resume">  
          <div className="container">

            <div className="section-title">
              <h2>Journey</h2>
              <p className='text-white'>Education plays a vital role in shaping my skills and knowledge. Here's a glimpse of my educational journey, 
                where I've acquired a solid foundation in software engineering and a passion for continuous learning.</p>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title text-white">Summary</h3>
                <div className="resume-item pb-0 text-white">
                  <h4>Kapital DX  -  QA Tester Intern </h4>
                  <h5>2023 - Present</h5>
                  {/* <p><em>Curious and passionate software engineering student with almost 1 year of bootcamp experience 
                    in developing user-centric software applications. Trained in the entire software development 
                    lifecycle, from conceptualization to final product delivery, ensuring high-quality and innovative 
                    solutions.</em></p> */}
                  <ul>
                    <li>Executed test cases and test scenarios to ensure the thorough validation of software functionality.</li>
                    <li>Tracked and reported defects, collaborating with a team to drive timely fixes and improve product quality.</li>
                    <li>Participated in regular team meetings to discuss testing progress and identify potential bottlenecks.</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>10th Grade - Major in Robotics</h4>
                  <h5>2019 - 2020</h5>
                  <p><em>University of Cebu - Main Campus</em></p>
                  <p>I was curious and dedicated to exploring the robotics technology, with a focus on calculating and developing 
                    a solution to the obstacles that the car robot needed to overcome. The major required strong problem-solving abilities,
                    patience, and dedication in the field of robotics.</p>
                </div>
                <div className="resume-item">
                  <h4>9th Grade - Major in Computer Hardware Servicing (CHS)</h4>
                  <h5>2018 - 2019</h5>
                  <p><em>University of Cebu - Main Campus</em></p>
                  <p>I was ready to delve into the world of computers. I experienced computer hardware servicing major with a focus on 
                    providing efficient and effective technical support. The major required proficiency in diagnosing and resolving 
                    hardware-related issues, performing system maintenance, and ensuring optimal computer performance.</p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Applied Degree in Software Engineering</h4>
                  <h5>2022 - Present</h5>
                  <p><em>Lithan Academy - eduCLaaS</em></p>
                  <ul>
                    <li>Developed numerous projects (battleship game, Car sales portal, Store website with APIs, etc.)</li>
                    <li>Learned about HTML, CSS, Javascript, Java, UI Design, Databases, Spring Framework, and more.</li>
                    <li>Managed up to 2 projects or tasks at a given time while under pressure</li>
                    <li>Received positive feedbacks from assessors on having a good graphic design and great understanding of topics</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Bachelor of Science in Information Technology (BSIT)</h4>
                  <h5>2022 - Present</h5>
                  <p><em>University of Cebu - Banilad</em></p>
                  <p>I decided to take the course in order to delve even deeper in the world of computers. The university partnered 
                    with Lithan and thus I am simultaneously a student of Lithan Academy with the course of Software Engineer.
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Major in Science, Technology, Engineering, and Mathematics (STEM)</h4>
                  <h5>2020 - 2022</h5>
                  <p><em>University of Cebu Pri - Main Campus</em></p>
                  <p> STEM majors often involve disciplines such as biology, chemistry, physics, mathematics, computer science, engineering, 
                    and related areas. This major provided me with strong foundation in scientific and technical knowledge.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* END OF EDUCATION */}
        
        {/* PROJECTS */}
        <section id="portfolio" className="portfolio section-bg">  
          <div className="container">

            <div className="section-title text-white">
              <h2>Projects</h2>
              <p>Throughout my academic journey, I have delved into various software engineering disciplines, including object-oriented programming, 
                database management, web development, and software testing. I have successfully completed projects that involved building interactive 
                web applications, designing efficient algorithms, and collaborating with teams to deliver robust software solutions. Evidently, as I learned
                more, I was able to do my projects better in some aspects such as UI/UX Design and functionality.</p>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

              <div className='row justify-content-center'>
              <div className="card shadow border-0" style={{width:"50rem"}}>
                <div className="card-header d-flex justify-content-between">
                  <h5 className="card-title mb-0">Know Your Neighborhood Website with APIs</h5>
                  <div className='small d-flex align-items-center'>May 2023 - June 2023</div></div>
                <img className="card-img-top mt-2" src={kyn} alt="know your neighborhood"/>
                <div className="card-body">
                  <div className='d-flex gap-3 mb-3'>
                    <div className='btn btn-sm btn-warning rounded-pill fw-bold text-white '>Google Sign In API</div>
                    <div className='btn btn-sm btn-info rounded-pill fw-bold text-white '>Facebook Login API</div>
                    <div className='btn btn-sm btn-success rounded-pill fw-bold text-white '>React JS</div>
                    <div className='btn btn-sm btn-danger rounded-pill fw-bold text-white '>Spring Framework</div>
                    <div className='btn btn-sm btn-primary rounded-pill fw-bold text-white '>MySQL</div>
                  </div>
                  <p className="card-text">The goal of the 
                  application is to provide details on all stores in the users’ neighborhood and to provide a login/sign up 
                  using existing API. The customers should be able to login using the existing API 
                  and fetch basic information such as name and email from the API. </p>
                </div>
                <a href="https://github.com/jbkeer/Know-Your-Neighborhood-Website-with-API.git" target="_blank" 
                  rel="noopener noreferrer" className="btn btn-dark mb-3"><i class='bx bxl-github'></i> View source code</a>
              </div>
              </div>
 
              <div className='row justify-content-center mt-3'>
              <div className="card shadow border-0" style={{width:"50rem"}}>
              <div className="card-header d-flex justify-content-between">
                  <h5 className="card-title mb-0">Used Cars Sales Portal</h5>
                  <div className='small d-flex align-items-center'>April 2023 - May 2023</div></div>
                <img className="card-img-top mt-2" src={car} alt="car sales portal"/>
                <div className="card-body">
                  <div className='d-flex gap-3 mb-3'>
                    <div className='btn btn-sm btn-primary rounded-pill fw-bold text-white '>Spring Boot</div>
                    <div className='btn btn-sm btn-warning rounded-pill fw-bold text-white '>Spring Security</div>
                    <div className='btn btn-sm btn-info rounded-pill fw-bold text-white '>Authentication</div>
                    <div className='btn btn-sm btn-success rounded-pill fw-bold text-white '>Authorization</div>
                    <div className='btn btn-sm btn-danger rounded-pill fw-bold text-white '>MySQL</div>
                  </div>
                  <p className="card-text"> ABC Cars Pte Ltd asked to develop a used car sales portal. The users should be able to 
                  register in the portal using the registration page. The users of the portal can also search for cars by its 
                  make, model, registration date, and price. It should also allow users to view the car information after searching them. 
                  The portal should allow users to login, and post a car for sale.</p>
                </div>
                  <a href="https://github.com/jbkeer/Used-Car-Sales-Website.git" target="_blank" rel="noopener noreferrer" 
                    className="btn btn-dark mb-4"><i class='bx bxl-github'></i> View source code</a>
              </div>
              </div>

              <div className='row justify-content-center mt-3'>
              <div className="card shadow border-0" style={{width:"50rem"}}>
              <div className="card-header d-flex justify-content-between">
                  <h5 className="card-title mb-0">ABC Jobs Community Portal</h5>
                  <div className='small d-flex align-items-center'>February 2023 - March 2023</div></div>
                <img className="card-img-top mt-2" src={abc} alt="car sales portal"/>
                <div className="card-body">
                  <div className='d-flex gap-3 mb-3'>
                    <div className='btn btn-sm btn-danger rounded-pill fw-bold text-white '>Spring MVC</div>
                    <div className='btn btn-sm btn-primary rounded-pill fw-bold text-white '>Spring Security</div>
                    <div className='btn btn-sm btn-success rounded-pill fw-bold text-white '>Spring JPA</div>
                    <div className='btn btn-sm btn-secondary rounded-pill fw-bold text-white '>JSP Pages</div>
                    <div className='btn btn-sm btn-warning rounded-pill fw-bold text-white '>UI/UX Design</div>
                    <div className='btn btn-sm btn-info rounded-pill fw-bold text-white '>MySQL</div>
                  </div>
                  <p className="card-text">The Scope of the Project is to design a Community Portal Similar to Linkedin.com.
                   We needed to design, develop, implement, test and document for ABC Jobs community portal using spring framework.  </p>
                </div>
                   <a href="https://github.com/jbkeer/ABC-Jobs-Website.git" target="_blank" rel="noopener noreferrer" 
                   className="btn btn-dark mb-4"><i class='bx bxl-github'></i> View source code</a>
              </div>
              </div>
            </div>
          </div>
        </section>
        {/* END OF PROJECTS */}

        {/* CONTACT */}
        <section id="contact" className="contact">  
          <div className="container">

            <div className="section-title text-white">
              <h2>Contact</h2>
              <p>Feel free to reach out to me for any inquiries, collaborations, or opportunities. 
                I'm excited to connect and discuss how we can work together to bring ideas to life.</p>
            </div>

            <div className="row" data-aos="fade-in">

              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Pope John Paul II Ave, Cebu City, 6000 Cebu</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>jbkeerababon@gmail.com <br></br>
                       bdse-0922-112@learning.educlaas.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+63 953 0625 624</p>
                  </div>

                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.5020822128083!2d123.91338278799732!3d10.316377454602387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99913ea0658a9%3A0x9d2616cba6fb74a1!2sMabolo%2C%20Cebu%20City%2C%20Cebu!5e0!3m2!1sen!2sph!4v1687528234925!5m2!1sen!2sph" title="map" frameBorder="0" style={{border:"0", width: "100%", height: "290px"}} allowFullScreen></iframe>
                </div>

              </div>

              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="forms/contact.php" method="post" className="php-email-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" name="name" className="form-control" id="name" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input type="email" className="form-control" name="email" id="email" required/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea className="form-control" name="message" rows="10" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
          <div className="social-links mt-3 text-center">
              <a href="https://educlaasglobal-my.sharepoint.com/:b:/g/personal/bdse-0922-112_learning_educlaas_com/ET-sQQOIxKJBiz2oDYiKD2EBMdfqFSyGklMIXmZvrYoLJA?e=2RPmDN" 
                target="_blank" rel="noopener noreferrer"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Resume" 
                className="resume"><i class='bx bxs-file-pdf'></i>
                <label className='small-text mt-3'>Resume</label>
                </a>
              <a href="https://www.linkedin.com/in/johnberl-keer-ababon/" target="_blank" rel="noopener noreferrer"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="LinkedIn" 
                className="linkedin"><i className="bx bxl-linkedin"></i>
                <label className='small-text mt-3'>LinkedIn</label>
                </a>
              <a href="https://www.facebook.com/jonbaaru" target="_blank" rel="noopener noreferrer"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Facebook"
                className="facebook"><i className="bx bxl-facebook"></i>
                <label className='small-text mt-3'>Facebook</label>
                </a>
              <a href="https://youtu.be/nGcgzPFmS_0" target="_blank" rel="noopener noreferrer"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Youtube" 
                className="youtube"><i className="bx bxl-youtube"></i>
                <label className='small-text mt-3'>Youtube</label>
                </a>
              <a href="https://www.instagram.com/jonbaaru" target="_blank" rel="noopener noreferrer"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Instagram" 
                className="instagram"><i className="bx bxl-instagram"></i>
                <label className='small-text mt-3'>Instagram</label>
                </a>
            </div>

        </section>
        {/* END OF CONTACT */}

      </main>

      <footer id="footer">
            <script src="../assets/vendor/purecounter/purecounter_vanilla.js"></script>
            <script src="../assets/vendor/aos/aos.js"></script>
            <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="../assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="../assets/vendor/isotope-layout/isotope.pkgd.min.js"></script> 
            <script src="../assets/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="../assets/vendor/typed.js/typed.umd.js"></script>
            <script src="../assets/vendor/waypoints/noframework.waypoints.js"></script>
            <script src="../assets/vendor/php-email-form/validate.js"></script>
            <script src="../assets/js/main.js"></script>
      </footer>

      <a href="https://www.facebook.com/jonbaaru" target="_blank"  rel="noopener noreferrer" 
          className="back-to-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i></a>
    </div>

    </div>
  );
}

export default Body;
