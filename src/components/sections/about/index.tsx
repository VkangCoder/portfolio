import { Col, Row } from 'react-bootstrap'
import AnimationLottie from 'components/share/animation-lottie'
import codingJSON from 'assets/lottie/coding.json'
import { DEVELOPMENT_LOTTIE } from 'assets/lottie/string/development'
import { CONTACT_LOTTIE } from 'assets/lottie/string/contact'

import GlowCard from 'components/share/glow-card'
import { FaGraduationCap } from 'react-icons/fa6'
import Divider from '../divider'
import { APP_DATA } from 'helpers/data'
import SocialMedia from 'components/sections/social.media'

const About = () => {
  return (
    <>
      {/* <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2">
            Know Who <span className="brand-red">I'M</span>{' '}
          </h3>
          <div>
            <div>
              <p> Hi Everyone, I am VKang from Ho Chi Minh city, VietNam.</p>

              <p> I am currently employed as a a freelance dev (start-up).</p>

              <p>
                {' '}
                I have completed Bachelor's degree in Software Engineer at Hanoi
                University of Science and Technology (HUST).
              </p>
            </div>
          </div>
          <div>
            <p>Apart from coding, some other activities that I love to do!</p>
            <ul>
              <li>Playing Games</li>
              <li>Writing Tech Blogs</li>
              <li>Travelling</li>
            </ul>
          </div>
          <div>
            <p className="text-center brand-red">
              "Pursuing Your Dreams Is How You Become Homeless"
            </p>
            <p className="text-center brand-red">--Jimmy O Yang</p>
          </div>
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center">
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row> */}
      <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2">
            Know Who <span className="brand-red">I'M</span>{' '}
          </h3>
          <div>
            <div>
              <p>Hi Everyone, I am VKang from Ho Chi Minh City, Vietnam.</p>

              <p>
                A Front-end Developer with hands-on experience in building
                modern, interactive web applications using ReactJS, TypeScript,
                and Material-UI. Passionate about UX/UI design, performance
                optimization, and crafting seamless user experiences.
                Demonstrates strong self-learning ability, teamwork, and
                problem-solving skills. Always eager to explore new technologies
                and refine coding best practices.
              </p>

              <p>
                <strong>Short-term goal:</strong> To gain practical experience
                through diverse projects, broaden knowledge across various
                aspects of web development, and enhance both technical and
                design skills.
              </p>

              <p>
                <strong>Long-term goal:</strong> To become a full-stack
                developer capable of managing end-to-end product development.
              </p>
            </div>
          </div>
          <div>
            <p>Apart from coding, some other activities that I love to do!</p>
            <ul>
              <li>Playing Games</li>
              <li>Go to the gym</li>
              <li>Travelling</li>
            </ul>
          </div>
          <div>
            <p className="text-center brand-red">
              "Be uncommon amongst uncommon people.."
            </p>
            <p className="text-center brand-red">-- David Goggins</p>
          </div>
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center">
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row>

      <Row>
        <Col
          md={6}
          xs={12}
          className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3">
          <AnimationLottie
            width="50%"
            //animation with rp => convert sang text
            // https://github.com/airbnb/lottie-web/issues/2070
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <div>
              <h4 className="text-center brand-red">Education</h4>
            </div>
            <div>
              <GlowCard identifier={`experience-5`}>
                <div className="p-3 relative">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>2021-2025</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">Information Technology</p>
                        <p className="company">Vien Dong college</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col md={6} xs={12} className=" mt-md-5 mt-3">
          <h3 className="mb-md-5 mb-2">FIND ME ON </h3>
          <SocialMedia
            facebook={APP_DATA.FACEBOOK_URL}
            linkedin={APP_DATA.LINKEDIN_URL}
          />
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center">
          <AnimationLottie
            width="50%"
            //animation with rp => convert sang text
            // https://github.com/airbnb/lottie-web/issues/2070
            animationPath={JSON.parse(CONTACT_LOTTIE)}
          />
          <h4 className="text-center">Contact me</h4>
        </Col>
      </Row>
      <div className="mb-5"></div>
    </>
  )
}

export default About
