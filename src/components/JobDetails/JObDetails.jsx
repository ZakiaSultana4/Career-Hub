import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobs } from "../../utility/localstorage";


const JObDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const { address, email, phone } = job.contact_information;
  const handleApplyJob = (job) => {
    saveJobs(job)

  };

  return (
    <div className="min-h-[90vh]">
      <div className="text-[#5a50a8] bg-[#f9f8ff] min-h-[30vh] text-center flex justify-center items-center text-6xl font-semibold">
        Job Details
      </div>
      <div className=" flex my-10 gap-5">
        <div className=" flex-1">
          <div className="flex">
            <h1 className=" text-black">
              <p className="text-black">Job Description:</p>
              <p className=" text-gray-700">{job.job_description}</p>
            </h1>
          </div>
          <div className="flex">
            <h1 className=" text-black">
              Job responsibility:
              <p className=" text-gray-700">{job.job_responsibility}</p>
            </h1>
          </div>
          <h1>Educational Requirements:{job.educational_requirements}</h1>
          <h1>Experiences:{job.experiences}</h1>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#f4f1ff] flex-1 px-12 py-6 ">
            <p className=" font-semibold text-2xl"> job Details</p>
            <hr className=" my-3" />
            <p className=" flex font-semibold">
              <p className=" text-black">Salary:</p>
              <p className=" text-gray-600">{job.salary}</p>
            </p>
            <p className=" flex font-semibold">
              <p className=" text-black">Job Details of:</p>
              <p className=" text-gray-600">{job.job_title}</p>
            </p>

            <p>
              <p className="text-black text-xl font-semibold">
                Contact Information:
              </p>
              <hr className="mt-3" />
              <p className=" flex font-semibold">
                <p className=" text-black">Phone:</p>
                <p className=" text-gray-600">{phone}</p>
              </p>
              <p className=" flex font-semibold">
                <p className=" text-black">Email: </p>
                <p className=" text-gray-600">{email}</p>
              </p>
              <p className=" flex font-semibold">
                <p className=" text-black">Address:</p>
                <p className=" text-gray-600">{address}</p>
              </p>
            </p>
          </div>
          <button
            onClick={()=>handleApplyJob(job)}
            className="btn btn-primary w-full mt-5"
          >
            Apply Now
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default JObDetails;
