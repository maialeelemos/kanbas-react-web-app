import { FaPlus, FaTrash } from "react-icons/fa";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { PiNotePencil } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAssignment,
  editAssignment,
  setAssignments,
  updateAssignment,
} from "./reducer";
import * as assignmentsClient from "./client";
import { useEffect } from "react";
import * as coursesClient from "../client";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = () => {
    return currentUser.role === "FACULTY";
  };
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function convertToDate(dateTime: string): string {
    let hours = new Date(dateTime).getHours();
    let suffix = "AM";
    if (hours > 12) {
      hours = new Date(dateTime).getHours() - 12;
      suffix = "PM";
    }
    return `${monthNames[new Date(dateTime).getMonth()]} 
    ${new Date(dateTime).getDate()} at 
    ${hours}:${String(new Date(dateTime).getMinutes()).padStart(
      2,
      "0"
    )}${suffix}`;
  }

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div id="wd-assingnments">
      <AssignmentControls />
      <br />
      <br />
      <ul className="list-group rounded-0">
        <li className="list-group-item p-0 fs-5 border-gray">
          <div className="wd-title bg-secondary d-flex justify-content-between align-items-center p-3 p-3 border">
            <div className="list-group d-flex flex-row">
              <BsGripVertical className="me-2 fs-3" />
              <IoIosArrowDown className="me-2 fs-3" />
              <h3 id="wd-assignments-title" className="mb-0">
                ASSIGNMENTS
              </h3>
            </div>
            <div className="d-flex align-items-center">
              <span className="wd-percentage border border-dark rounded-pill p-2 me-3">
                40% of Total
              </span>
              <FaPlus className="me-3" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          <ul id="wd-assignment-list" className="list-group rounded-0">
            {assignments.map((assignment: any) => (
              <li className="wd-assignment-link-item p-3 ps-1 d-flex align-items-center justify-content-between border">
                <div className="d-flex align-items-center flex-grow-1">
                  <BsGripVertical className="me-4 fs-3" />
                  <PiNotePencil className="me-4 fs-3 text-success" />
                  <a
                    href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                    className="wd-assignment text-reset text-decoration-none nav-link"
                    onClick={() =>
                      isFaculty() && dispatch(editAssignment(assignment._id))
                    }
                  >
                    <span className="wd-assignment-text me-2">
                      <b>{assignment.title}</b>
                      <br />
                      <span className="text-danger">
                        Multiple Modules
                      </span> | <b>Not available until</b>{" "}
                      {convertToDate(assignment.availableDateTime)} |
                      <br />
                      <b>Due</b> {convertToDate(assignment.dueDateTime)} |{" "}
                      {assignment.points} pts
                    </span>
                  </a>
                </div>
                {isFaculty() && (
                  <span>
                    <FaTrash
                      className="text-danger me-2 mb-1"
                      onClick={() => {
                        const remove = window.confirm("Delete Assignment?");
                        if (remove) {
                          removeAssignment(assignment._id);
                        }
                      }}
                    />
                  </span>
                )}
                <LessonControlButtons />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
