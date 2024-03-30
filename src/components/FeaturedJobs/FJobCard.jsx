import PropTypes from "prop-types";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const FJobCard = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-md">
      <figure className="h-[100px]">
        <img className="" src={logo} width={100} height={300} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#434242]">{job_title}</h2>
        <p className=" text-gray-700 font-semibold">{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="mt-4 flex text-gray-700 font-semibold">
          <h2 className="flex mr-4">
            <MdLocationOn className="text-2xl mr-2"></MdLocationOn> {location}
          </h2>
          <h2 className="flex">
            {" "}
            <AiOutlineDollar className="text-2xl"></AiOutlineDollar> {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="bg-[#7e8fff] px-3 py-2 text-white rounded-lg font-semibold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FJobCard;
FJobCard.propTypes = {
  job: PropTypes.object.isRequired,
};
