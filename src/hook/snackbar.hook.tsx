import { useCallback } from "react";
import { useSnackbar } from "notistack";

import { SNACKBAR_TYPE } from "constants/common";

export const useMessage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showMessage = useCallback(
    (type, message) => {
      enqueueSnackbar(message, {
        variant: type,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    },
    [enqueueSnackbar]
  );

  const showErrorMessage = useCallback(
    (message) => {
      showMessage(SNACKBAR_TYPE.Error, message);
    },
    [showMessage]
  );

  const showSuccessMessage = useCallback(
    (message) => {
      showMessage(SNACKBAR_TYPE.Success, message);
    },
    [showMessage]
  );

  return { showErrorMessage, showSuccessMessage };
};
