import React from "react";
import CareerWelcome from "./careers/CareerWelcome";
import Culture from "./careers/Culture";
import BuildTogether from "./careers/BuildTogether";
import Intern from "./careers/Intern";
import Upskill from "./careers/Upskill";
import SocialMedia from "./careers/SocialMedia";

function Careers() {
  const positions = [
    {
      title: "Senior React Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "On-site",
      type: "Full-time",
    },
    {
      title: "Project Manager",
      department: "Management",
      location: "Hybrid",
      type: "Full-time",
    },
    {
      title: "AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "DevOps Specialist",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
    },
  ];

  return (
    <>
      <CareerWelcome />
      <Culture />
      <BuildTogether />
      <Intern />
      <Upskill />
      <SocialMedia />
      {/* <div className="container py-5">
        <div className="text-center mb-5">
          <h1>Join Our Team</h1>
          <p className="lead">
            We're looking for talented individuals to help us shape the future
          </p>
        </div>

        <div className="row g-4">
          {positions.map((position, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{position.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      {position.department} · {position.location}
                    </small>
                  </p>
                  <p className="card-text">
                    <span className="badge bg-primary">{position.type}</span>
                  </p>
                  <button className="btn btn-outline-primary">Apply Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default Careers;
