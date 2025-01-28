import bannerImg from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div>
      <div className="bg-[#9538E2] min-h-[440px] mt-4 rounded-3xl">
        <div className=" text-center text-white pt-16 space-y-6">
          <h1 className="text-xl lg:text-4xl lg:font-bold">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-xs md:text-base font-thin mb-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <button className="btn rounded-full">Shop Now</button>
        </div>
      </div>
      <div className="w-7/12 mx-auto border border-white p-3 rounded-3xl relative -top-10 lg:relative lg:-top-36">
        <img className="rounded-3xl" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
