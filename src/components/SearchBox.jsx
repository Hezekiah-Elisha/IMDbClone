"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function SearchBox() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(search === '') return;
        router.push(`/search/${search}`);
    }

    return (
        <form className={"max-w-6xl mx-auto w-full flex flex-row justify-between align-middle items-center"} onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Keywords..." className={"bg-transparent outline-none w-full h-14 flex-1"} onChange={(e)=>setSearch(e.target.value)} value={search} />
            <button className={`disabled:text-white text-amber-600}`} disabled={search === ''}>Search</button>
        </form>
    );
}