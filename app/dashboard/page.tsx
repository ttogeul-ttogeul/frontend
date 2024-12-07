"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-3">
      <Button size={"sm"} className="w-full">
        공유하기
      </Button>
      <Button size={"default"} className={"w-full bg-gray-50 text-gray-950"}>
        공유하기
      </Button>
      <Button size={"lg"} className={"bg-red-600 text-slate-900"}>
        공유하기
      </Button>
      <br />
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="w-3/12" variant="outline">
            Show Dialog
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
