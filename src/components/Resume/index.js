import './index.scss'

const Contact = () => {
  return (
    <div className='text-area'>
    <div className="resume">
      <h1>Resume</h1>
      <div className="resume-section">
        <h2>Education</h2>
        <p>
        <ul>
          <li>
            <strong>Degree:</strong>Bachelor of Science Applied information management systems
          </li>
          <li>
            <strong>Institution:</strong> Loyola Marymount University
          </li>
          <li>
            <strong>Year:</strong> 2018
          </li>
          
        </ul>
        </p>
      </div>

      <div className="resume-section">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Position:</strong> Data Analyst
            <br />
            <strong>Company:</strong> GoBankingRates
            <br />
            <strong>Duration:</strong> April 2022 - Present
            <br />
            <strong>Description:</strong> Description of role
          </li>
          {/* Add more experience items as needed */}
        </ul>
      </div>

      <div className="resume-section">
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      {/* You can add more sections like projects, certifications, etc. */}
    </div>
    </div>
  );
};

export default Contact;
