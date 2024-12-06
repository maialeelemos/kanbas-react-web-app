import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useState } from "react";
import * as coursesClient from "../../Courses/client";
import * as assignmentClient from "../Assignments/client";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [assignment, setAssignment] = useState(() => {
    return (
      assignments.find((a: any) => a._id === aid) || {
        course: cid,
        _id: aid,
        title: "Assignment Name",
        description: "New Assignment Description",
        points: "100",
        dueDateTime: "",
        availableDateTime: "",
        untilDateTime: "",
      }
    );
  });
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = () => {
    return currentUser.role === "FACULTY";
  };

  function convertToDate(dateTime: string): string {
    return dateTime === undefined ? "" : dateTime.substring(0, 10);
  }

  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const assignemnt = await coursesClient.createAssignmentForCourse(
      cid,
      assignment
    );
    dispatch(addAssignment(assignemnt));
  };

  const saveAssignment = async (assignment: any) => {
    await assignmentClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  return (
    <div id="wd-assignments-editor" className="ms-4">
      <label htmlFor="wd-name" className="form-label">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        className="form-control"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <br />
      <textarea
        id="wd-description"
        className="form-control"
        style={{ height: 200 }}
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      >
        {assignment?.description}
      </textarea>
      <br />
      <div>
        <div className="row">
          <label htmlFor="wd-points" className="col-3 col-form-label text-end">
            Points
          </label>
          <div className="col-9">
            <input
              id="wd-points"
              value={assignment.points}
              className="form-control"
              onChange={(e) =>
                setAssignment({ ...assignment, points: e.target.value })
              }
            />
          </div>
        </div>
        <br />
        <div className="row">
          <label htmlFor="wd-group" className="col col-form-label text-end">
            Assignment Group
          </label>
          <div className="col-9">
            <div className="input-group">
              <select id="wd-group" className="form-control">
                <option value="">ASSIGNMENTS</option>
              </select>

              <span className="input-group-text bg-white">
                <IoIosArrowDown />
              </span>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <label
            htmlFor="wd-display-grade-as"
            className="col col-form-label text-end"
          >
            Display Grade as
          </label>
          <div className="col-9">
            <div className="input-group">
              <select id="wd-display-grade-as" className="form-control">
                <option value="">Percentage</option>
              </select>

              <span className="input-group-text bg-white">
                <IoIosArrowDown />
              </span>
            </div>
          </div>
        </div>
        <br />

        <div className="row">
          <label
            htmlFor="wd-submission-type"
            className="col-3 col-form-label text-end"
          >
            Submission Type
          </label>
          <br />

          <div className="col border rounded">
            <div className="input-group">
              <select id="wd-submission-type" className="form-control mt-2">
                <option value="">Online</option>
              </select>

              <span className="input-group-text mt-2 bg-white">
                <IoIosArrowDown />
              </span>
            </div>

            <br />
            <label className="form-label">
              <b>Online Entry Options</b>
            </label>
            <br />
            <input
              id="wd-text-entry"
              type="checkbox"
              name="text-entry"
              className="form-check-input"
            />
            <label
              htmlFor="wd-text-entry"
              className="form-check-label ps-3 mb-3"
            >
              Text Entry
            </label>
            <br />
            <input
              id="wd-website-url"
              type="checkbox"
              name="website-url"
              className="form-check-input"
            />
            <label
              htmlFor="wd-website-url"
              className="form-check-label ps-3 mb-3"
            >
              Website URL
            </label>
            <br />
            <input
              id="wd-media-recordings"
              type="checkbox"
              name="media-recordings"
              className="form-check-input"
            />
            <label
              htmlFor="wd-media-recordings"
              className="form-check-label ps-3 mb-3"
            >
              Media Recordings
            </label>
            <br />
            <input
              id="wd-student-annotation"
              type="checkbox"
              name="student-annotation"
              className="form-check-input"
            />
            <label
              htmlFor="wd-student-annotation"
              className="form-check-label ps-3 mb-3"
            >
              Student Annotation
            </label>
            <br />
            <input
              id="wd-file-upload"
              type="checkbox"
              name="file-upload"
              className="form-check-input"
            />
            <label
              htmlFor="wd-file-upload"
              className="form-check-label ps-3 mb-3"
            >
              File Uploads
            </label>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <label htmlFor="wd-assign-to" className="col-form-label col-3 text-end">
          Assign
        </label>

        <div className="col-9 border rounded">
          <div className="row">
            <label htmlFor="wd-assign-to" className="col-3 col-form-label">
              <b>Assign to</b>
            </label>
            <div className="p-2">
              <input
                id="wd-assign-to"
                value={"Everyone"}
                className="form-control p-2"
              />
            </div>
          </div>

          <div className="mt-1">
            <label htmlFor="wd-due-date">
              <b>Due</b>
            </label>
            <input
              id="wd-due-date"
              type="date"
              value={
                assignment && assignment.dueDateTime
                  ? convertToDate(assignment.dueDateTime)
                  : ""
              }
              className="form-control p-2"
              onChange={(e) =>
                setAssignment({ ...assignment, dueDateTime: e.target.value })
              }
            />
          </div>

          <div className="row mt-3 mb-4">
            <div className="col-6">
              <label htmlFor="wd-available-from">
                <b>Available from</b>
              </label>
              <input
                id="wd-available-from"
                type="date"
                value={
                  assignment && assignment.availableDateTime
                    ? convertToDate(assignment.availableDateTime)
                    : ""
                }
                className="form-control p-2"
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    availableDateTime: e.target.value,
                  })
                }
              />
            </div>

            <div className="col-6">
              <label htmlFor="wd-available-until">
                <b>Until</b>
              </label>
              <input
                id="wd-available-until"
                type="date"
                value={
                  assignment && assignment.untilDateTime
                    ? convertToDate(assignment.untilDateTime)
                    : ""
                }
                className="form-control p-2"
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    untilDateTime: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>

        {isFaculty() && (
          <div className="mt-3">
            <Link to={`/Kanbas/Courses/${assignment?.course}/Assignments`}>
              <button
                type="button"
                className="btn btn-danger float-end me-1"
                onClick={() => {
                  assignment.editing
                    ? saveAssignment({ ...assignment, editing: false })
                    : createAssignmentForCourse();
                  setAssignment({});
                }}
              >
                Save
              </button>
            </Link>
            <Link to={`/Kanbas/Courses/${assignment?.course}/Assignments`}>
              <button
                type="button"
                className="btn btn-secondary float-end me-3"
                onClick={() => setAssignment({})}
              >
                Cancel
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
