import { useSelector } from "react-redux";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);

  const prevPage = () => {
    console.log("prev page");
  };

  const nextPage = () => {
    console.log("next page");
  };

  return (
    <Wrapper>
      <button
        className="prev-btn"
        onClick={prevPage}
      >
        <HiChevronDoubleLeft />
      </button>
      <button className="btn-container">wee</button>
      <button
        className="prev-btn"
        onClick={nextPage}
      >
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
