import React from "react"
import {Button, Col, Nav, Row, Tab, Accordion} from 'react-bootstrap';
import background from "../assets/AWS-Cert-banner-1536x768.png"
import "../styles/content.css"

const home = () => {
    return (
        
        <div className="section">
            
            <div>
            <img src={background} alt="Girlcode-banner" width={182}></img>
                
            </div>
            <div>
        
            Congratulations on taking your first step to a career in the cloud! Embrace new skills, show your potential, and plan a career trajectory.

            By earning the AWS Cloud Practitioner certification, you can validate your cloud fluency with an industry-recognized credential from AWS and highlight your overall understanding of the AWS Cloud—with our support every step of the way.

            Join the SHE Dares Cloud Practitioner journey  powered by Standard Bank and Amazon Web Services (AWS) and follow a recommended path to earn your AWS Cloud Practitioner certification by <strong>20 November 2022</strong>. As part of the journey you will receive free training, recommended resources, and encouragement along the way. The first <strong>1,000 participants</strong> who have completed the recommended training; attended some of the Webinars and passed the practice Exam on the AWS Skills Builder Portal will be eligible to take the AWS Cloud Practitioner certification exam free of charge (normally $100). <a style={{color:"e94154"}}href="https://girlcode.co.za/she-dares-terms-and-conditions/">Terms and conditions apply.</a> 

            Your Journey to get Certified will end on the 20 November 2022, and countdown has begun. Let’s do this!<a href="https://forms.office.com/r/BXdZqsjAc5">Apply Now</a> 
          </div>
       <div style={{display:"flex",flexdirection:"row" }}>
         <div>
            <h3 style={{color:"#e94155"}}>HOW DO I GET STARTED?</h3>
            <ul>
                <li>
                Sign up and gain access to our participant resource hub for everything you need in your journey.
                </li>
                <li>
                Get trained on your schedule with options for live and/or self-paced training.
                </li>
                <li>
                Review white papers and documentation from the AWS team.
                </li>
            </ul>
          
       </div>
         <div>
            <h3 style={{color:"#e94155"}}>HOW DO WE HELP?</h3>
            <ul>
                <li>
                Weekly Live Q&A sessions with Certified Experts
                </li>
                <li>
                Resource hub with access to self paced learning
                </li>
                <li>
                Live Instructor led cloud essentials training on <strong>29th October from 9am – 12</strong>
                </li>
                
                <li>
                Review with an AWS and Standard Bank Cloud Ambassador at an Exam Readiness session.
                </li>
                <li>
                Use sample questions to know what to expect.
                </li>
                <li>
                Practice by taking a practice exam.
                </li>
                <li>
                Schedule your certification exam, and use your free discount voucher.<a style={{color:"#e94154"}} href="https://girlcode.co.za/she-dares-terms-and-conditions/">Terms and conditions apply.</a>
                </li>
            </ul>
            </div>
         <div>
            <h3 style={{color:"#e94155"}}>THE GOAL?</h3>
            <ul>
                <li>
                Earn an AWS Certification by passing the <strong>AWS Certified Cloud Practitioner</strong> exam.
                </li>
                <li>
                Register before <strong>15th October 2022.</strong>
                </li>
                <li>
                Attend Orientation on <strong>Mon 17th October 2022.</strong>
                </li>
                <li>
                Join the Live Instructor Led Training session on Sat  <strong>29th October 2022.</strong>   
                </li>
                <li>
                Schedule your exam before the challenge ends on <strong>20th November, 2022.</strong>
                </li>
                
            </ul>
            </div>
       </div>
      <div>

        <h3>Explore free training resources</h3>
           Simply click on the menu bar and choose what to learn

      </div>
      <div>
       
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="1st">Welcome to the SHE Dares Cloud Practitioner journey</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2nd">Learn about AWS Certified Cloud Practitioner</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3rd">Get started with AWS Cloud Essentials</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4th">Information on your Certification Exam Voucher</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="5th">Key dates</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="6th">Schedule Your Training</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="7th">Download the Exam Overview Guide</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="8th">JOIN the AWS Cloud Practitioner Essentials Day (live, Half-day webinar)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="9th">Take AWS Cloud Practitioner Essentials at your own pace </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="10th">AWS Power Hour:Cloud Practitioner</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="11th">Join us FOR a Readiness session</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="12th">Technical Documentation</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="13th">Try the Interactive Sample Quiz</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="14th">Schedule Your Exam</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="15th">Explore your AWS Certified Benenfits</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="16th">Share your Digital Badge</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="1st">
              <h2>Welcome to SHE Dares journey</h2>
              If you’re new to AWS Certification, check out the basics of getting AWS Certified in this short video.

              In this resource hub, you will also learn how to redeem your vouchers, what training you should take and how to pace your training, how to schedule your exam and feel confident on exam day. Let’s get started and build your confidence for exam day!

            </Tab.Pane>
            <Tab.Pane eventKey="2nd">
            <h2>Learn about AWS Certified Cloud Practitioner</h2>
            Familiarize yourself with our foundational AWS Certification in this overview video. Learn how you can highlight your understanding of the AWS Cloud.
            </Tab.Pane>
            <Tab.Pane eventKey="3rd">
            <h2>Get started with AWS Clod Essentials</h2>
            In this on-demand session, learn about the foundations of getting started in the AWS Cloud. This is your first step in your learning journey. This course can help you can build and validate an overall understanding of the AWS Cloud, key terminology, and help advance your AWS Cloud skills.
            </Tab.Pane>
            <Tab.Pane eventKey="4th">

                <h2>Information on your Certification Exam Voucher</h2>
                Information on your Certification Exam Voucher
                If you have requested your certification voucher, you will receive it within five business days. We will send you the voucher via email, alongside step-by-step instructions on how to use it.

                If you do not receive your voucher within five working days, please contact us SheDaresVoucher@girlcode.co.za

                Your certification exam appointment must be scheduled and taken before 20 November, 2022 with Pearson VUE. 
                <Button type="button" className="btn btn-exam">Schedule Your Exam</Button>
            </Tab.Pane>


            <Tab.Pane eventKey="5th">
                <h2>Key dates for your diary</h2>
                <ul>
                    <li>First day to register : 01 October, 2022</li>
                    <li>Last day to register : 15 October, 2022</li>
                    <li>Journey ends: 20 November, 2022</li>
                    <li>Certification exam needs to be scheduled by: 12 November, 2022</li>
                    <li>Certification exam needs to be taken before: 20 November, 2022</li>
                    <li>Certification exam expires on: 20 November, 2022</li>
                </ul>
              
            </Tab.Pane>

            <Tab.Pane eventKey="6th">
                <h2>Schedule Your Training</h2>
                Decide which training options work best for you, and put them on your calendar. We suggest a week-by-week strategy. You can register for a live, interactive webinar led by AWS experts, AWS Cloud Practitioner Essentials Day. Alternatively, you can go through the same course content at your own pace with our AWS Cloud Practitioner Essential digital training. Go to the <b>Start learning tab</b> to access all recommended training.
            
            </Tab.Pane>

            <Tab.Pane eventKey="7th">
                <h2>Download Tthe Exam Overview Guide</h2>
                <h3>Download the Exam Overview for AWS Certified Cloud Practitioner and get:</h3>
                <ul>
                    <li>A detailed look at the topics covered</li>
                    <li>A complete breakdown of the testing methodology</li>
                    <li>Access to learning resources like sample questions and practice tests</li>
                </ul>
               
            </Tab.Pane>

            <Tab.Pane eventKey="8th">
                <h2>JOIN the AWS Cloud Practitioner Essentials Day (live,Half-day webinar)</h2>
                Join an accredited AWS expert trainer to learn the fundamental concepts of the AWS Cloud in a free half-day webinar scheduled on the 29th October from 09h00 – 12h00. You can learn about AWS Cloud concepts, core AWS services, security, architecture, pricing, and support to build your AWS Cloud knowledge and help prepare for the AWS Certified Cloud Practitioner exam.
                <h2>AWS Cloud POWER HOUR</h2>
                <ul>
                    <li>Thursday, October 27, 2022 | 5:00 PM – 6:00 PM </li>
                    <li>Thursday, November 03, 2021 | 5:00 PM – 6:00 PM (Exam readiness)</li>
                </ul>
                
            </Tab.Pane>

            <Tab.Pane eventKey="9th">
                <h2>Take AWS Cloud Practitioner Essentials at your own pace</h2>
                If you are not able to attend a live webinar, you can take the on-demand, digital training course instead. The course is 6 hours in length split across 11 modules, so set a goal to cover two modules per week. The course also includes a practice assessment.
                <Button>ACCESS THE DIGITAL COURSE</Button>
            </Tab.Pane>

            <Tab.Pane eventKey="10th">
                <h2>AWS Power Hour: Cloud Practitioner</h2>
                Watch our Twitch series, AWS Power Hour: Cloud Practitioner, and learn the essential information you need to build your future in the AWS Cloud. Over the course of six episodes, our hosts guide you through the content with demonstrations and real-world examples.
                
            </Tab.Pane>

            <Tab.Pane eventKey="11th">
                <h2>EXAM Readiness: AWS Certified Cloud Practitioner</h2>
                In this complimentary exam readiness webinar, we walk you through how the exam is structured, including question formats, content domains, and the breakdown of questions across those domains. During the webinar, you will have the chance to apply knowledge and test concepts through a series of practice exam questions and get your questions answered live by AWS experts.
                
                If you are not able to attend our live Exam Readiness Power hour on the 10th November, you can watch this session on-demand. Note that this session is designed to follow AWS Cloud Practitioner Essentials (the live webinar or digital course).
            </Tab.Pane>

            <Tab.Pane eventKey="12th">
                <h2>Technical Documentation</h2>
                Broaden your technical understanding with whitepapers and other technical documentation written by the AWS team.
                <ul>
                    <li>Overview of Amazon Web Services (estimated time: two hours)</li>
                    <li>How AWS Pricing Works (estimated time: two hours)</li>
                    <li>Compare AWS Support Plans (estimated time: two hours)</li>
                </ul>
            </Tab.Pane>

            <Tab.Pane eventKey="13th">
                <h2>Try the Interactive Sample Quiz</h2>
                Feel more prepared by answering the AWS Certified Cloud Practitioner sample questions. These example questions show you the style of questions asked on the exam. This interactive quiz will help you review your responses and the correct answer rationales.
                
            </Tab.Pane>

            <Tab.Pane eventKey="14th">
                <h2>Schedule Your Exam</h2>
                We encourage you to schedule your exam by 28 October 2022. By scheduling ahead, you can choose a time for your exam appointment that is most convenient for you and stay motivated by the date on your calendar. Learn more about taking your exam from home with online proctoring through Pearson VUE.
                
            </Tab.Pane>

            <Tab.Pane eventKey="15th">
                <h2>Explore your AWS Certified Benenfits</h2>
                Once AWS Certified, you’ll be eligible for perks that help you show off your achievements and keep learning. Learn more about your AWS Certification digital badges, discounts on future exams, recognition at AWS re:Invent and other events, our global community on LinkedIn, and more.
                
            </Tab.Pane>

            <Tab.Pane eventKey="16th">
                <h2>Share Your Digital Badge</h2>
                When you pass your exam, it’s time to celebrate with your network and everyone who supported you along the way. We provide digital badges on Credly’s Acclaim platform to help you showcase your achievement. Share your badge as a post on social media and add it to your professional profiles, digital resumes or email signatures.
                
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

      </div>
      <div>
        <div>
            <h3>Frequently Asked Questions</h3>
            Please read through the FAQs below if you have questions. If your question is not answered below, please ask it on the Discord #general channel.
        </div>
        <div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Q: Who can participate in the SHE Dares Cloud Practitioner Journey Powered by Standard Bank and AWS ?</Accordion.Header>
        <Accordion.Body>
            The journey is open to individuals who are at least 18 years of age and reside in South Africa. Anyone who registers for the SHE Dares Cloud Practitioner journey between 01 October and 31 October 2022 can participate in the training sessions and webinars and the first 1,000 participants are eligible for the free certification exam vouchers. Terms and conditions apply.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Q: What are the dates of the SHE Dares Cloud Practitioner?</Accordion.Header>
        <Accordion.Body>
            A: Registration will be open from 01 October 2022. To be recognized for meeting the SHE Dares Cloud Practitioner journey, take and pass your AWS Cloud Practitioner exam on or before 20th of November, 2022.
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
        <Accordion.Header>Q: How can I get the free certification exam voucher?</Accordion.Header>
        <Accordion.Body>
           A: The first 1,000 participants who request vouchers are eligible to take certification exam for AWS Certified Cloud Practitioner for free. You must request your vouchers using the same email address you signed up for the SHE Dares Cloud Practitioner journey. If you already have a voucher, such as one from your employer or as a benefit from earning a prior AWS Certification, please note only one voucher can be used in a single claim.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Q: What should I do if I haven't recieved my free certification exam voucher? </Accordion.Header>
        <Accordion.Body>
           A: Please confirm you submitted your request, if it has been more than seven business days since your submission, contact shedaresvoucher@girlcode.co.za
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Q: What is the difference between the practice exam and certification exam?</Accordion.Header>
        <Accordion.Body>
           A: A practice exam is an opportunity to test your knowledge online in a timed environment by taking the AWS Certified Cloud Practitioner practice exam. You can then review your score report to inform your self-study. To earn the AWS Certified Cloud Practitioner certification, participants must take and pass the AWS Certified Cloud Practitioner exam.          
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Q: Do I have to follow all of the training in order to complete the SHE Dares Clod Practitioner journey?</Accordion.Header>
        <Accordion.Body>
           A: All training, review sessions, and preparation resources are optional for participants. The training curriculum provided is a recommended path of courses you can take. If you feel ready to take the certification exam, you can go ahead and schedule your exam as soon as you feel prepared.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>Q: What is the benefit of getting the AWS Certified?</Accordion.Header>
        <Accordion.Body>
         A: AWS Certifications build credibility and confidence by validating your cloud skills with an industry-recognized credential. Getting AWS Certified can help you propel your career, whether looking to find a new role, showcase your skills to take on a new project, or become your team’s go-to expert.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>Q: Is there any cost asssociated with the SHE Dares Cloud Practitioner journey?</Accordion.Header>
        <Accordion.Body>
            A: There is no cost to register or participate in the training and preparation sessions for the SHE Dares Cloud Practitioner journey. The first 1,000 participants who qualify are eligible for a free AWS Certified Cloud Practitioner certification exam (terms and conditions apply). To earn the AWS Certified Cloud Practitioner certification, participants must schedule, take and pass the AWS Certified Cloud Practitioner exam before 20th November 2022, which costs 100 USD (now for free, when applying the free exam voucher powered by Standard Bank and AWS).
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header>Q: How do I take the AWS Certified Cloud Practitioner exam?</Accordion.Header>
        <Accordion.Body>
           A: We offer exams through one test delivery providers, Pearson VUE. The test delivery provider offers the AWS Certified Cloud Practitioner exam for candidates to take in testing centers or at home via online proctoring. The free voucher is limited to use at Pearson VUE only (terms and conditions apply). Learn more about your testing options here.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header>Q: How do I share my certification with my network?</Accordion.Header>
        <Accordion.Body>
           A: We provide digital badges on Credly’s digital badging platform as a benefit of earning an AWS Certification to help you showcase your achievement. You can add your digital badge to your professional profiles, digital resumes, or email signatures. You can also share your digital badge as a post on social media to celebrate with your network. 
           Please tag @girlcode_za on twitter, TikTok and Instagram.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="10">
        <Accordion.Header>Q: If I fail the certification exam on my first attempt, can I request another voucher?</Accordion.Header>
        <Accordion.Body>
           A: Only one voucher code can be requested and redeemed for the SHE Dares Cloud Practitioner journey. We encourage you to test your knowledge online in a timed environment by taking the AWS Certified Cloud Practitioner practice exam and review your score report to inform your self-study. 
        </Accordion.Body>
      </Accordion.Item>

      
     </Accordion>
        </div>
     </div>

     </div>
    );
}
export default home;