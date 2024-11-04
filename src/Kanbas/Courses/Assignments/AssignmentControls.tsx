import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

export default function AssignmentControls() {
  const { cid } = useParams();
  const navigate = useNavigate();
  function stringNewAssignment(): string {
    const aid = new Date().getTime().toString();
    return `/Kanbas/Courses/${cid}/Assignments/${aid}`;
  }
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = () => {
    return currentUser.role === "FACULTY";
  };
  return (
    <div id="wd-assignment-controls" className="text-nowrap mt-3">
      {isFaculty() && (
        <button
          id="wwd-add-assignment"
          className="btn btn-danger me-1 mb-1 float-end w-20"
          onClick={() => navigate(stringNewAssignment())}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
      )}
      <button
        id="wd-add-assignment-group"
        className="btn btn-secondary me-1 mb-1 float-end w-20"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <div className="input-group w-50">
        <span className="input-group-text mb-1 bg-white">
          <IoSearchOutline />
        </span>
        <input
          id="wd-search-assignment"
          placeholder="Search..."
          className="form-control me-1 mb-1"
        />
      </div>
    </div>
  );
}
