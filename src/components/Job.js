import React from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment";

import Wrapper from "../assets/wrappers/Job";
import { JobInfo } from "../components";

function Job({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) {
  const dispatch = useDispatch();

  const date = moment(createdAt).format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.chartAt(0)}</div>
        <h5>{position}</h5>
        <p>{company}</p>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => console.log("edit-job")}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => console.log("delete-job")}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
}

export default Job;
