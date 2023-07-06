import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats, MdArticle } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "stats",
    path: "/",
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "all-jobs",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "add job",
    path: "add-job",
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "my listings",
    path: "my-listings",
    icon: <ImProfile />,
  },
  {
    id: 5,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];

export default links;
