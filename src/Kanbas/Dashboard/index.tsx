import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addEnrollment, deleteEnrollment } from "./reducer";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer); // TODO: Do I delete this?
  const [showEnrolled, setShowEnrolled] = useState(true);
  const dispatch = useDispatch();
  const isFaculty = () => {
    return currentUser.role === "FACULTY";
  };
  const isStudent = () => {
    return currentUser.role === "STUDENT";
  };
  function isEnrolledCourse(c: any) {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === c._id
    );
  }
  function navigateOnEnrollment(course: any): string {
    const isEnrolled = enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === course._id
    );
    if(isEnrolled) {
      return `/Kanbas/Courses/${course._id}/Home`
    } else {
    return "";
    }
  }
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isStudent() && (
        <button
          id="wd-enrollments-btn"
          className="btn btn-primary float-end"
          onClick={() => setShowEnrolled(!showEnrolled)}
        >
          Enrollments
        </button>
      )}
      {isFaculty() && (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </div>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div
              className="wd-dashboard-course col mt-4"
              style={{ width: "270px" }}
            >
              <div className="card rounded-3 overflow-hidden">
              <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark overflow-hidden"
                  to={navigateOnEnrollment(course)}
                >
                  <img
                    src={`/images/${
                      course.image ? course.image : "reactjs.jpg"
                    }`}
                    width="100%"
                    height={160}
                    alt="course"
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    {showEnrolled ? (
                      <button className="btn btn-primary"> Go </button>
                    ) : isEnrolledCourse(course) ? (
                      <button
                        className="btn btn-danger"
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(deleteEnrollment({ user: currentUser._id, course: course._id }))
                        }}
                      >
                        {" "}
                        Unenroll{" "}
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(addEnrollment({ user: currentUser._id, course: course._id }))
                        }}
                      >
                        {" "}
                        Enroll{" "}
                      </button>
                    )}
                    {isFaculty() && (
                      <span>
                        <button
                          onClick={(event) => {
                            event.preventDefault(); // which navigates to the course's screen
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault(); // which navigates to the course's screen
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
