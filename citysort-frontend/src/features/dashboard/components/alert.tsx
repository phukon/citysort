import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export function AlertDialogDash() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <p className="cursor-pointer hover:underline">Open note ❗</p>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Heads Up! 🌟</AlertDialogTitle>
          <AlertDialogDescription>
            Some data may be missing or based on user contributions. An 'X'
            represents missing information.<br/><br/> I strive for accuracy, but there
            might be limitations. Your understanding is appreciated.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogAction>Got it!</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
}
