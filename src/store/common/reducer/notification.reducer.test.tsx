import {
  pushErrorMessage,
  pushSuccessMessage,
  pushWarningMessage,
} from "store/common/action/notification.action";

import reducer, { initialState } from "./notification.reducer";

const message = "Test";

describe("Notification Action", () => {
  describe("Push error message", () => {
    const action = pushErrorMessage(message);
    const newState = reducer(initialState, action);

    it("error message is set", () => {
      expect(newState.length).toEqual(1);
    });
  });

  describe("Push success message", () => {
    const action = pushSuccessMessage(message);
    const newState = reducer(initialState, action);

    it("success message is set", () => {
      expect(newState.length).toEqual(1);
    });
  });

  describe("Push warning message", () => {
    const action = pushWarningMessage(message);
    const newState = reducer(initialState, action);

    it("warning message is set", () => {
      expect(newState.length).toEqual(1);
    });
  });
});
