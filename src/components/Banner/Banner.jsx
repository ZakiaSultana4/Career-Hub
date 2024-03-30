import im from "../../assets/imag.png";
const Banner = () => {
  return (
    <div className=" h-[90vh] flex   container  mx-auto px-10 bg-[#f9f9ff]">
      <div className="">
        <div className="flex items-center flex-col justify-center mt-36">
          <h2 className=" text-6xl   text-left font-bold">
            <span> One Step</span>
            <br />
            <span> Choose To Your</span>
            <br />
            <span className=" text-[#7e8fff] text-center ">Dream Job</span>
          </h2>
        </div>
        <p className=" text-left text-[#949496] my-5 px-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus autem
          voluptatem hic nam nihil fugiat beatae placeat, dolore officia illo
          quae cumque odit atque ad quidem modi quis eligendi velit.
        </p>
        <div className="text-left ml-8">
          <button className=" bg-[#7e8fff] px-3 py-2 text-white rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      </div>

      <img src={im} alt="" className=" " />
    </div>
  );
};

export default Banner;
