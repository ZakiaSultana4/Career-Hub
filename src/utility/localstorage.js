import { toast } from "react-toastify";

export const getJobs= () =>{
    const job = localStorage.getItem('jobs');
    if(job){
        return JSON.parse(job);
    }
    return [];
}

export const saveJobs = job => {
    let jobs = getJobs()
    const isExist = jobs.find(b => b.id === job.id)
    if (isExist) {
      return toast.error('Already Added!')
    }
    jobs.push(job)
    localStorage.setItem('jobs', JSON.stringify(jobs))
    toast.success('job Successfully!')
  }
