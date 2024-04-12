import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getJobs } from "../../utility/localstorage";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJobs = () => {
  const storedJob = getJobs();
  const [displayJobs, setDisplayJobs] = useState([]);
  useEffect(() => {
    const storedJob = getJobs();
    setDisplayJobs(storedJob);
  }, []);
  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(storedJob);
    } else if (filter === "remote") {
      const remoteJobs = storedJob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = storedJob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  return (
    <div>
      <div className="text-[#5a50a8] bg-[#f9f8ff] min-h-[30vh] text-center flex justify-center items-center text-6xl font-semibold">
        Applied Jobs
      </div>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        <div className=" grid grid-cols-2 gap-5 mb-15">
          {displayJobs.map((job) => (
            <div key={job.id}>
              <div className="card card-compact bg-base-100 shadow-md flex border border-gray-300 h-[420px] py-10 px-5">
                <img className=" " src={job.logo} width={200} height={100} />

                <div className="card-body">
                  <h2 className="card-title text-[#434242]">
                    {job.remote_or_onsite}
                  </h2>
                  <h2 className="card-title text-[#434242]">{job.job_title}</h2>
                  <p className=" text-gray-700 font-semibold">
                    {job.company_name}
                  </p>
                  <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                      {job.remote_or_onsite}
                    </button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                      {job.job_type}
                    </button>
                  </div>
                  <div className="mt-4 flex text-gray-700 font-semibold">
                    <h2 className="flex mr-4">
                      <MdLocationOn className="text-2xl mr-2"></MdLocationOn>{" "}
                      {job.location}
                    </h2>
                    <h2 className="flex">
                      {" "}
                      <AiOutlineDollar className="text-2xl"></AiOutlineDollar>{" "}
                      {job.salary}
                    </h2>
                  </div>
                  <div className="card-actions">
                    <Link to={`/job/${job.id}`}>
                      <button className="bg-[#7e8fff] px-3 py-2 text-white rounded-lg font-semibold">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default AppliedJobs;
