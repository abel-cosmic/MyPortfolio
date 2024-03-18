import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from '../ui/tooltip'
  
  const IconBadge = ({ icon, name }: { icon: any; name: string }) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="cursor-pointer rounded-2xl">{icon}</TooltipTrigger>
          <TooltipContent>{name}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }
  export default IconBadge
  