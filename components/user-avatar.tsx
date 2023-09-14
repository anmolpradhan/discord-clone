import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "./ui/avatar";

interface UseAvatarInterface{
    src?:string;
    className?:string
}

const UseAvatar = ({src,className}:UseAvatarInterface) => {
    return (
        <Avatar className={cn("h-7 w-7 md:h-10 md:w-10",className)}>
            <AvatarImage src={src}/>
        </Avatar>
    );
}
 
export default UseAvatar;