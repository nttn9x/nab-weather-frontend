import produce from "immer";

export const ENQUEUE_SNACKBAR = "[COMMON] ENQUEUE_SNACKBAR";
export const CLOSE_SNACKBAR = "[COMMON] CLOSE_SNACKBAR";

const initialState: any[] = [];

export interface EnqueueAction {
  type: typeof ENQUEUE_SNACKBAR;
  notifications: any[];
}

export interface CloseAction {
  type: typeof CLOSE_SNACKBAR;
  key: string;
}

type Actions = EnqueueAction | CloseAction;

const reducer = produce((draft, action: Actions) => {
  switch (action.type) {
    case ENQUEUE_SNACKBAR:
      return [...draft, ...action.notifications];
    case CLOSE_SNACKBAR:
      return draft.filter(
        (notification: any) => notification.key !== action.key
      );
  }
}, initialState);

export { initialState, reducer as default };
