import {
  pushErrorMessage,
  pushSuccessMessage,
  pushWarningMessage,
} from "store/common/action/notification.action";

const message = "Test";

describe("Notification Action", () => {
  it("Push error message", () => {
    const action = pushErrorMessage(message);

    expect(action.notifications.length).toEqual(1);
  });

  it("Push success message", () => {
    const action = pushSuccessMessage(message);

    expect(action.notifications.length).toEqual(1);
  });

  it("Push warning message", () => {
    const action = pushWarningMessage(message);

    expect(action.notifications.length).toEqual(1);
  });
});
