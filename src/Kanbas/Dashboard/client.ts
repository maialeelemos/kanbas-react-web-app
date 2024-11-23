import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollInCourse = async (courseId: string, userId: string) => {
  const { data } = await axios.put(`${ENROLLMENTS_API}/${courseId}/${userId}`);
  return data;
};

export const unenrollInCourse = async (courseId: string, userId: string) => {
  const response = await axios.delete(`${ENROLLMENTS_API}/${courseId}/${userId}`);
  return response.data;
};

export const getEnrollments = async () => {
    const response = await axios.get(`${ENROLLMENTS_API}`);
    return response.data;
};

