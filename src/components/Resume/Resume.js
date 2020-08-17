import React from 'react'
import PropTypes from 'prop-types'

const Resume = props => {
  const publications = [
    {
      title: 'Hand Gesture Recognition Library',
      journal: 'International Journal of Science and Applied Information Technology',
      link: 'https://arxiv.org/ftp/arxiv/papers/1507/1507.05243.pdf'
    },
    {
      name: 'Structure Detection and 2D Modeling',
      journal: 'International Journal of Trend in Research and Development(IJTRD)',
      link: 'http://www.ijtrd.com/papers/IJTRD3537.pdf'
    },
    {
      name: 'Infant Monitoring Using Old Smart Phones',
      journal: 'IOSR Journal of Mobile Computing & Application',
      link: 'http://www.iosrjournals.org/iosr-jmca/pages/vol4-iss2.html'
    }
  ];

  const professionalXp = [
    'Full Stack Developer at[24]7.ai(03 / 2019 to present)',
    'Full Stack Developer at DSquare Solutions(05 / 2017 to 03 / 2019)',
    'Intern at Cerner Healthcare Solutions(11 / 2016 to 04 / 2017)',
    'Member of website development team for Gateways - 2016 and Gateways - 2015',
    'Worked in IBC labs on Android App Development(10 / 2014 to 06 / 2015)',
  ];

  const professionalProjects = [
    {
      title: 'Design and Development',
      tech: 'Reactjs, Nodejs, Java, MySQL',
      description: 'Framework to generate and post forms dynamically using configurations from server',
    }, {
      title: 'Reporting for Airlines',
      tech: 'Power BI',
      description: 'Data Analysis and Reporting for an airline business using Power BI to provide insights',
    }, {
      title: 'InsightView',
      tech: 'Reactjs, LoopBackjs, Java',
      description: 'Analytical tool encompassing data retrieval, preprocessing (to normalise) and report generation for insights',
    },
    {
      title: 'Automated Testing with selenium',
      tech: 'Node.js, Selenium',
      description: 'Module to convert CSV to JSON using specific rules',
    }
  ];

  const technicalProficiencies = [
    { topic: 'Language', comment: 'Node.js, React.js, Java, Python, Dart, Golang, C++, Typescript' },
    { topic: 'Database', comment: 'MySQL , MSSql, Oracle 11g, MongoDB' },
    { topic: 'Framework', comment: 'Play framework, Spring boot, Flutter' },
    { topic: 'Scripting', comment: 'PL/SQL, UNIX, Bat' },
    { topic: 'Research Tools', comment: 'Matlab, R, Octave' },
  ];

  const academicProjects = [
    {
      title: 'Recommender System for Apparel Selection',
      tech: 'Python Django framework',
      description: 'A system which provides recommendations of apparel combinations based on their colour.',
    },
    {
      title: 'Postal zip code',
      tech: 'Recognition using neural networks',
      description: 'Java, Matlab Recognizing and converting postal zip codes to digital form using neural networks as a classifier.'
    }, {
      title: '2D structure Detection and Modelling',
      tech: 'Micro Python, Arduino, Lua script, Java Swing, Java Networking.',
      description: 'A mobile robot which moves in an enclosure detecting obstructions and mapping them in the server.This information is used to make a 2D model',
    }, {
      title: 'Project Path',
      tech: 'JSP, HTML, CSS, Javascript, Ajax, JQuery, Apache Tomcat, MySQL',
      description: 'An in -house solution for tracking project progress by guides and team members, with grading and evaluation included.',
    }, {
      title: 'Hand Gesture Recognition Library',
      tech: 'Matlab',
      description: 'A library to provide interfaces to support hand gesture recognition at real - time.Functions like mouse click, sound control, zoom in /out using hand gestures.'
    }
  ];

  const personalProjects = [
    {
      title: 'Cross & Knots Battle Arena',
      tech: 'Java',
      description: 'This project provides a simulation platform to extend abstract classes and write custom logic to win a cross & knot game.',
    },
    {
      title: 'Ant colony simulation',
      tech: 'Java',
      description: 'Exploring ant colony optimisation'
    },
    {
      title: 'Virtual Lab',
      tech: 'Java, Swing',
      description: 'A virtual hardware lab for logic gates'
    }
  ]

  const certifications = [
    'Advanced Certification in Artificial Intelligence and Machine Learning - IIIT Hyderabad (2018)',
  ];

  const achievements = [
    'Core committee member for Gateways-2015 (national level IT Fest)',
    'University Level Student Council Member (Christ University 2015)',
    'Prabudha Bhattacharya Memorial Prize (best project work in Computer Science 2013-2014)',
  ];

  const getList = (list) => (
    <ul>
      {list.map(item => <li>{item}</li>)}
    </ul>
  )

  const getTable = (data) => (
    <div>
    <br />
      <table style={{ borderTop: '1px solid black', borderLeft: '1px solid black', width: '100%' }}>
        {data.map((row => (
          <tr>
            {Object.values(row).map((column) => (
              <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black' }}>{column}</td>
            ))}
          </tr>
        )))}
      </table>
      <br />
    </div>
  );

  return (
    <div style={{ maxWidth: '85%', margin: 'auto' }}>
      <div id="contact">
        <center>
          <div><h3>Jonathan Fidelis Paul</h3></div>
          <div>1stFloor, #23, 5th Netaji Cross, Old Post Office Road, Ramamurthy Nagar, Bengaluru - 560016, Karnataka </div>
          <div><a href="mailto:jfdpaul@gmail.com">jfdpaul@gmail.com</a> | 9538225911 | <a href="https://github.com/jfdpaul">https://github.com/jfdpaul</a></div>
        </center>
      </div>
      <hr />
      <div id="brief">
        <center>
          <p>I provide solutions using my experience with designing and developing software systems, have led
          teams to achieve goals, possess the drive to automate redundant tasks and expertise in
          troubleshooting problems following first principles. Looking forward to an eventful career with a
    motivated and challenging team.</p>
        </center>
      </div>
      <div id="professional_xp">
        <b>Professional Experience</b>
        {getList(professionalXp)}
      </div>
      <div id="publications">
        <div><b>Publications</b></div>
        <div>
          {getTable(publications)}
        </div>
      </div>
      <div id="professional_projects">
        <div><b>Professional Projects</b></div>
        <div>
          {getTable(professionalProjects)}
        </div>
      </div>
      <div id="technical_proficiencies">
        <div><b>Technical Proficiencies</b></div>
        <div>
          {getTable(technicalProficiencies)}
        </div>
      </div>

      <div id="academic_projects">
        <div><b>Academic Projects</b></div>
        <div>
          {getTable(academicProjects)}
        </div>
      </div>

      <div id="personal_projects">
        <div><b>Personal Projects</b></div>
        <div>
          {getTable(personalProjects)}
        </div>
      </div>

      <div id="certifications">
        <div><b>Certifications</b></div>
        {getList(certifications)}
      </div>

      <div id="achievements">
        <div><b>Achievements</b></div>
        {getList(achievements)}
      </div>
    </div>
  );
}

Resume.propTypes = {

}

export default Resume
