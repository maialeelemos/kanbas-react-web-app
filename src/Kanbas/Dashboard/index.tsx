import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/CS1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>CS1234 React JS</h5>
                            <p className="wd-dashboard-course-title">Full Stack software developer</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/DS3200/Home">
                        <img src="/images/databasedesign.jpg" width={200} />
                        <div>
                            <h5>DS3200 Database Design</h5>
                            <p className="wd-dashboard-course-title">Data Engineer</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/ARTS2340/Home">
                        <img src="/images/paintingbasics.jpeg" width={200} />
                        <div>
                            <h5>ARTS2340 Painting Basics</h5>
                            <p className="wd-dashboard-course-title">Painting</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/ARTD3460/Home">
                        <img src="/images/processconcept.jpg" width={200} />
                        <div>
                            <h5>ARTD3460 Process & Concept</h5>
                            <p className="wd-dashboard-course-title">Photography 2</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/PSYC1101/Home">
                        <img src="/images/psychology.jpg" width={200} />
                        <div>
                            <h5>PSYC1101 Foundations of Psychology</h5>
                            <p className="wd-dashboard-course-title">Psychology</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/PSYC1101/Home">
                        <img src="/images/introtophoto.jpg" width={200} />
                        <div>
                            <h5>ARTD2360 Introduction to Photography</h5>
                            <p className="wd-dashboard-course-title">Photography 1</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/CS4300/Home">
                        <img src="/images/computergraphics.jpg" width={200} />
                        <div>
                            <h5>CS4300 Computer Graphics</h5>
                            <p className="wd-dashboard-course-title">Computer Graphics</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}