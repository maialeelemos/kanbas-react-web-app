import { FaPlus } from "react-icons/fa";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { PiNotePencil } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
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
            <li className="wd-assignment-link-item p-3 ps-1 d-flex align-items-center justify-content-between border">
              <div className="d-flex align-items-center flex-grow-1">
                <BsGripVertical className="me-4 fs-3" />
                <PiNotePencil className="me-4 fs-3 text-success" />
                <a
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  className="wd-assignment text-reset text-decoration-none nav-link"
                >
                  <span className="wd-assignment-text me-2">
                    <b>A1</b>
                    <br />
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 6 at 12:00am | <br />
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                  </span>
                  </a>
              </div>
              <LessonControlButtons />
            </li>

            <li className="wd-assignment-link-item p-3 ps-1 d-flex align-items-center justify-content-between border">
              <div className="d-flex align-items-center flex-grow-1">
                <BsGripVertical className="me-4 fs-3" />
                <PiNotePencil className="me-4 fs-3 text-success" />
                <a
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  className="wd-assignment text-reset text-decoration-none"
                >
                  <span className="wd-assignment-text me-2">
                    <b>A2</b>
                    <br />
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 13 at 12:00am | <br />
                    <b>Due</b> May 20 at 11:59pm | 100 pts
                  </span>
                  </a>
              </div>
              <LessonControlButtons />
            </li>

            <li className="wd-assignment-link-item p-3 ps-1 d-flex align-items-center justify-content-between border">
              <div className="d-flex align-items-center flex-grow-1">
                <BsGripVertical className="me-4 fs-3" />
                <PiNotePencil className="me-4 fs-3 text-success" />
                <a
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  className="wd-assignment text-reset text-decoration-none"
                >
                  <span className="wd-assignment-text me-2">
                    <b>A3</b>
                    <br />
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 20 at 12:00am | <br />
                    <b>Due</b> May 27 at 11:59pm | 100 pts
                  </span>
                  </a>
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
