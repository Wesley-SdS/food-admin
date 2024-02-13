import { LogOut } from "lucide-react";

export function Profile (){
    return( <div className="flex items-center gap-3" >
        <img src="https://github.com/diego3g.png" alt="" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col truncate">
            <span className="text-sm font-semibold text-zinc-700">Diego</span>
            <span className=" truncate text-sm text-zinc-500" >Diego@dsdsdsdsddsddsddsdsdsdsdexample.com</span>
        </div>
        <button type="button" className="ml-auto p-2 rounded-md hover:bg-violet-100">
            <LogOut className="h-5 w-5 text-zinc-500" />
        </button>
    </div>

    )
}