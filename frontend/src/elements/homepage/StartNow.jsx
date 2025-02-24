import ImageChildren5 from "../../assets/imgs/homepage/5.jpg";

const StartNow = () => {
  return (
    <div className="">
      <div>
        <img src={ImageChildren5} className="" alt="Trẻ em" />
      </div>
      <div>
        <button
          type="button"
          className="w-64 h-16 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-xl px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Học ngay tại đây
        </button>
      </div>
    </div>
  );
};

export default StartNow;
