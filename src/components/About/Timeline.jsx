import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarRateIcon from '@mui/icons-material/StarRate';
// import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {

  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={"#23283e"}>
        <VerticalTimelineElement
            date={"June 2024 - Present"}
            contentStyle={{
              boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
              backgroundColor: `#fcfcfc`,
              textAlign: "center",
              color: `#444`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `#fcfcfc`,
              color: `#2978b5`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Backend Developer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Edulab (Mumbai, Maharashtra) 
            </h4>
            <p data-aos="fade-right">
            Backend developer skilled in Node.js and Express with a solid understanding of MySQL, PostgreSQL, and MongoDB.
            {/* Proven ability to build and maintain scalable, high-performance, and secure web applications. */}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"January 2024 - June 2024"}
            contentStyle={{
              boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
              backgroundColor: `#fcfcfc`,
              textAlign: "center",
              color: `#444`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `#fcfcfc`,
              color: `#2978b5`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Assesment Assistanship Internship
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School
            </h4>
            <p data-aos="fade-right">
            In the role of Assessment Coordinator, primary responsibility involved conducting mock interviews to help students hone their interview skills or guiding them as a mentor.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"January 2023 - November 2023"}
            contentStyle={{
              boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
              backgroundColor: `#fcfcfc`,
              textAlign: "center",
              color: `#444`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `#fcfcfc`,
              color: `#2978b5`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School, Bengaluru (Remote)
            </h4>
            <p data-aos="fade-right">
              Joined the Military style Bootcamp to learn Software Development
              and Data Structures. Also learned many soft skills in the process.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"August 2020 - November 2023"}
            contentStyle={{
              boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
              backgroundColor: `#fcfcfc`,
              textAlign: "center",
              color: `#444`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `#fcfcfc`,
              color: `#2978b5`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              BSc, Information Technology
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
            </h4>
            <p data-aos="fade-right">
              Radhakisan Lakshminarayan Toshniwal College of Science, Akola
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"March 2019"}
            contentStyle={{
              boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
              backgroundColor: `#fcfcfc`,
              textAlign: "center",
              color: `#444`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `#fcfcfc`,
              color: `#2978b5`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Higher Secondary School
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
            </h4>
            <p data-aos="fade-right">Shri Dawale Jr. College of Science, Akola
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `#fcfcfc`,
              color: `#2978b5`
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
