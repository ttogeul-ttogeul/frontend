import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/src/components/ui/alert-dialog";
import { useAlert } from "./hooks";

export default function Alert() {
  const { alert, handleAlert, alertMessage } = useAlert();
  return (
    <AlertDialog open={alert}>
      <AlertDialogContent aria-label="alertdialog">
        <AlertDialogTitle className="hidden" />
        <AlertDialogDescription className="whitespace-pre-line">
          {alertMessage || "메시지를 길게 써보겠습니다. 이것은 메시지입니다."}
        </AlertDialogDescription>
        <AlertDialogAction
          onClick={() => handleAlert(false)}
          className="w-full"
        >
          확인
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
}
