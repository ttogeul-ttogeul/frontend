import { useAtom } from "jotai";
import { useCallback } from "react";
import { alertMessageState, alertState } from "../store";

export const useAlert = () => {
  const [alert, setAlert] = useAtom(alertState);
  const [alertMessage, setAlertMessage] = useAtom(alertMessageState);

  const handleAlert = useCallback(
    (alertState: boolean) => {
      setAlert(alertState);
    },
    [setAlert],
  );

  return { alert, handleAlert, setAlertMessage, alertMessage };
};
