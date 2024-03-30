import { useEffect, useState } from "react";
import FJobCard from "./FJobCard";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showJob, setShowJob] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-5xl text-center font-semibold">
          Featured Jobs:{jobs.length}
        </h2>
        <p className="text-center my-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 my-7">
        {jobs.slice(0, showJob).map((job) => (
          <FJobCard key={job.id} job={job} />
        ))}
      </div>

      <div className= {showJob === jobs.length ? "hidden" : ""} >
        <button onClick={() => setShowJob(jobs.length)}
         className="bg-[#7e8fff] px-3 py-2 text-white rounded-lg font-semibold"> Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
