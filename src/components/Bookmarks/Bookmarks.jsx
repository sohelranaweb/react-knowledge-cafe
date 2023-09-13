import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-slate-200 ml-4 mt-4">
      <div>
        <h1 className="text-2xl text-center text-purple-500 font-bold">
          Reading Time: {readingTime} min
        </h1>
      </div>
      <h1 className="text-3xl text-center pt-3">
        Bookmarks: {bookmarks.length}
      </h1>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};
export default Bookmarks;
