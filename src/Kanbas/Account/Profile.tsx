import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  function convertToDate(dateTime: string): string {
    return dateTime === undefined ? "" : dateTime.substring(0, 10);
  }
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <input
            id="wd-username"
            className="form-control mb-2"
            defaultValue={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <input
            id="wd-password"
            type="password"
            className="form-control mb-2"
            defaultValue={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <input
            id="wd-firstname"
            className="form-control mb-2"
            defaultValue={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <input
            id="wd-lastname"
            className="form-control mb-2"
            defaultValue={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <input
            id="wd-dob"
            type="date"
            className="form-control mb-2"
            defaultValue={convertToDate(profile.dob)}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <input
            id="wd-email"
            type="email"
            className="form-control mb-2"
            defaultValue={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            id="wd-role"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button
            onClick={signout}
            className="btn btn-danger w-100 mb-2"
            id="wd-signout-btn"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
