// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Attractions({ data }: any) {
  return (
    <div className="space-y-8">
      {data?.map((item: any, index: number) => (
        <div key={index} className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex lg:items-center lg:mr-4">
            {/* <Avatar className="h-9 w-9 lg:h-12 lg:w-12">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>img</AvatarFallback>
            </Avatar> */}
            <div className="lg:ml-4 space-y-1">
              <p className="text-sm font-bold leading-none">{item.name}</p>
              <p className="text-sm text-muted-foreground pt-1 pr-10">
                {item.description}
              </p>
            </div>
          </div>
          <div className="mt-4 lg:mt-0 lg:text-right lg:font-normal">
            {item.type}
          </div>
        </div>
      ))}
    </div>
  );
}
