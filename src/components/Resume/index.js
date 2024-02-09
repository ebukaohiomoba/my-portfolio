import './index.scss'

const Resume = () => {
  return (
    <div className='text-area'>
    <div className="resume">
      <h2>Resume</h2>
      <div className="resume-section">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>Degree:</strong> Your Degree
          </li>
          <li>
            <strong>Institution:</strong> Your University
          </li>
          <li>
            <strong>Year:</strong> Graduation Year
          </li>
        </ul>
      </div>

      <div className="resume-section">
        <h3>Experience</h3>
        <ul>
          <li>
            <strong>Position:</strong> Your Position
            <br />
            <strong>Company:</strong> Company Name
            <br />
            <strong>Duration:</strong> Duration of Employment
            <br />
            <strong>Description:</strong> Description of your role
          </li>
          {/* Add more experience items as needed */}
        </ul>
      </div>

      <div className="resume-section">
        <h3>Skills</h3>
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

export default Resume;
