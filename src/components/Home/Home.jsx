import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    const categories=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <CategoryList categories={categories}></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;