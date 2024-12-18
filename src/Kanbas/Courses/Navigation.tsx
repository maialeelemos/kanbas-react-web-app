import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const { cid } = useParams();
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((linkname) => (
        <Link
          className={`list-group-item border border-0 ${pathname.includes(linkname) ? "active" : "text-danger"}`}
          to={`/Kanbas/Courses/${cid}/${linkname}`}
        >
          {linkname}
        </Link>
      ))}
    </div>
  );
}
