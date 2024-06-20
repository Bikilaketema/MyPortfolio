import { Container } from "./styles";
import BikilaKetema from "../../assets/BikilaKetema.png";
import adobePs from "../../assets/ps-icon.png";
import adobeAi from "../../assets/ai-icon.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import laravel from "../../assets/laravel-icon.png";
import linuxIcon from "../../assets/linux-icon.png";
import pythonIcon from "../../assets/python-icon.png";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            My name is Bikila Ketema, and I'm a recent graduate from Addis Ababa University's School of Commerce, where 
            I earned a degree in Business Administration and Information Systems. Additionally, I 
            have completed a 12-month software engineering program at ALX Africa (Holberton School).
            Throughout my academic journey, I've developed a solid foundation in software engineering alongside essential 
            business skills. These include financial management, organizational management, project management, information 
            systems management, and human resources management. This diverse skill set equips me to understand and effectively 
            contribute to business organizations by grasping their unique business requirements.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          In my free time, I’ve been diving into graphic design. This hobby has grown into a real skill set
           as I’ve designed logos, banners, posters, stickers, graduation bulletins, and various other graphic works. 
          With these experiences under my belt, I can confidently say that I am also a professional graphic designer. </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          If you need my services, I'm here to help. I can develop websites and design logos, 
          banners, flyers, and more. Additionally, I'm open to full-time positions in business or IT roles, 
          particularly in financial organizations. My solid foundation in Business Administration, backed by a bachelor’s degree, combined with
          my expertise in backend software development, equips me to contribute effectively to your team.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={pythonIcon} alt="Python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={laravel} alt="Laravel" />
            </ScrollAnimation>
          </div>
                    <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={linuxIcon} alt="Linux" />
            </ScrollAnimation>
          </div>
                              <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={adobeAi} alt="Adobe Illustrator" />
            </ScrollAnimation>
          </div>
                              <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={adobePs} alt="Adobe Photoshop" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={BikilaKetema} alt="BikilaKetema" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
