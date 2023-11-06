import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export function AlertDialogDash2() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <p className="cursor-pointer hover:underline font-semibold leading-none tracking-tight">
          📝Note
        </p>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Heads Up! 🌟</AlertDialogTitle>
          <AlertDialogDescription>
            Based on the survey form. The visuals are better with more data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogAction>Got it!</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
}
