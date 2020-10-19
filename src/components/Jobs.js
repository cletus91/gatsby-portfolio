import React, { useState } from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        company
        date
        strapiId
        position
        description {
          name
          id
        }
        strapiId
      }
    }
  }
`;

const Jobs = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiJobs: { nodes: jobs },
  } = data;
  const [value, setValue] = useState(0);
  const { company, date, description: desc, position } = jobs[value];

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                className={`job-btn ${index === value && `active-btn`}`}
                onClick={() => {
                  setValue(index);
                }}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map((item) => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Jobs;
