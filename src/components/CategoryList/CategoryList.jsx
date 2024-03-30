import PropTypes from "prop-types";
const CategoryList = ({ categories }) => {
  return (
    <div className=" my-16">
      <h2 className="text-5xl text-center font-semibold">Job Category List</h2>
      <p className="text-center my-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className=" flex gap-10 items-center justify-center mt-10">
        {categories.map((category) => (
          <div key={category.id} className="bg-[#f9f9ff]  px-5 py-3">
            <img src={category.logo} alt="" />
            <p className=" font-semibold text-xl">{category.category_name}</p>
            <p className=" text-slate-400"> {category.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
CategoryList.propTypes = {
  categories: PropTypes.object.isRequired,
};
