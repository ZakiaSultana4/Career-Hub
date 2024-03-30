import { useEffect, useState } from "react";
import { getJobs } from "../utility/localstorage";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statictis = () => {
  const [displayJobs, setDisplayJobs] = useState([]);
  useEffect(() => {
    const storedJob = getJobs();
    setDisplayJobs(storedJob);
  }, []);

  return (
    <div className=" min-h-[80vh] my-10">
       <div className="text-[#5a50a8] bg-[#f9f8ff] min-h-[30vh] text-center flex justify-center items-center text-6xl font-semibold">
        Choose your Job
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
        data={displayJobs}
          width={500}
          height={300}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          
        >
          <CartesianGrid strokeDasharray="3 2" />
          <XAxis dataKey="job_title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="salary" stackId="Salary" fill="#26A9E2"/>
          <Bar dataKey="job_type" stackId="job_type" fill="#7E90FE"  />
          <Bar dataKey="remote_or_onsite" stackId="remote_or_onsite" fill="#26A9E2" />
          {/* Add more Bar components for additional stacks */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statictis;
