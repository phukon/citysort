import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Attractions({ data }: any) {
  return (
    <div className="space-y-8">
      {data?.map((item: any, index: number) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>img</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.name}</p>
            <p className="text-sm text-muted-foreground pt-1 pr-10">
              {item.description}
            </p>
          </div>
          <div className="text-right font-medium">{item.type}</div>
        </div>
      ))}
    </div>
  );
}
