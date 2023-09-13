import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  //   console.log(blog);
  const {
    author,
    author_img,
    cover,
    hashtags,
    posted_date,
    reading_time,
    title,
  } = blog;

  return (
    <div className=" mb-8 space-y-4">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h1 className="text-2xl font-bold">{author}</h1>
            <p className="text-base text-[#11111199]">{posted_date}</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-medium">
            {reading_time} <span className="text-[#11111199]">min read</span>
            <button className="ml-2" onClick={() => handleAddToBookmark(blog)}>
              <FaBookmark></FaBookmark>
            </button>
          </p>
        </div>
      </div>
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className="text-xl font-medium text-[#11111199]">
        {hashtags.map((hash, indx) => (
          <span key={indx}>
            <a href="">#{hash}</a>{" "}
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-500 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
