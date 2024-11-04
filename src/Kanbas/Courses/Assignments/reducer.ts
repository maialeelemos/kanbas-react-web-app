import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: assignment.aid,
        title: assignment.title,
        course: assignment.course,
        description: assignment.description,
        points: assignment.points,
        dueDateTime: assignment.dueDateTime,
        availableDateTime: assignment.availableDateTime,
        untilDateTime: assignment.untilDateTime
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignments }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignments._id ? assignments : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;
