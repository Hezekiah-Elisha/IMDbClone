"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");

    return (
        <div>
            <Link href={`/?genre=${param}`} className={`font-semibold text-white hover:text-amber-600
                ${param === genre ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg" : ""}
            `}>
                <p className="">{title}</p>
            </Link>
        </div>
    );
}