import MenuItem from "@/components/MenuItem";
import {AiFillHome} from "react-icons/ai";
import {BsFill1CircleFill} from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "@/components/DarkModeSwitch";

export default function Header() {
    return (
        <header className="flex flex-row justify-between align-middle items-center p-3 max-w-6xl mx-auto">
            <div className="flex flex-row gap-4">
                <MenuItem title="Home" address="/" Icon={AiFillHome}/>
                <MenuItem title="About" address="/about" Icon={BsFill1CircleFill}/>
            </div>
            <div className="flex flex-row justify-center align-middle items-center gap-4">
                <DarkModeSwitch/>
                <Link href="/" className="flex gap-1 items-center">
                    <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded">IMDb</span>
                    <span className="text-xl hidden sm:inline">Clone</span>
                </Link>
            </div>
        </header>
    );
}