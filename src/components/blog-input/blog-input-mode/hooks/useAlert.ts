import { useSetAtom } from "jotai";
import { alertMessageState, alertOpenState } from "../store";

export default function useAlert() {
  const setAlertOpen = useSetAtom(alertOpenState);
  const setAlertMessage = useSetAtom(alertMessageState);

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertOpen(true);
  };

  return { showAlert };
}
