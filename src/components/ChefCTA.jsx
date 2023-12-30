import chef from "../images/ChefCTA/chef.png";

const ChefCTA = () => {
  return (
    <section className="chef-cta | padding-x max-width mt-[14rem] mb-[6rem]">
      <div className="max-w-[508px] pb-[5rem]">
        <h2 className="text-4xl font-bold">
          Everyone can be a chef in their own kitchen
        </h2>
        <p className="text-[#00000099] mt-3">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
        <button className="mt-[3rem] bg-black text-white text-[13px] px-8 py-3 rounded-xl">
          Learn More
        </button>
      </div>
      <div className="chef-cta-img-container">
        <div>
          <img
            src={chef}
            alt="a chef holding a plate and pointing to the food isnide it"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
export default ChefCTA;
