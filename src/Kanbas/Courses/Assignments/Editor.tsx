import { IoIosArrowDown } from "react-icons/io";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="ms-4">
      <label htmlFor="wd-name" className="form-label">
        Assignment Name
      </label>
      <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
      <br />
      <textarea
        id="wd-description"
        className="form-control"
        style={{ height: 200 }}
      >
        The assignment is available online. Submit a link to the landing page of
        your Web applicaiton running on Netlify. The landing page should include
        the following: Your full name and section, Links to each of the lab
        assignments, Links to the Kanbas application, Links to all relevant
        source code repositories. The Kanbas application should include a link
        to navigate back to the landing page.
      </textarea>
      <br />
      <div>
        <div className="row">
          <label htmlFor="wd-points" className="col-3 col-form-label text-end">
            Points
          </label>
          <div className="col-9">
            <input id="wd-points" value={100} className="form-control" />
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
              value="2024-05-13"
              className="form-control p-2"
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
                value="2024-05-06"
                className="form-control p-2"
              />
            </div>

            <div className="col-6">
              <label htmlFor="wd-available-until">
                <b>Until</b>
              </label>
              <input
                id="wd-available-until"
                type="date"
                value="2024-05-20"
                className="form-control p-2"
              />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <button type="button" className="btn btn-danger float-end me-1">
            Save
          </button>
          <button type="button" className="btn btn-secondary float-end me-3">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
