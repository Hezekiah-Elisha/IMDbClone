import NavbarItem from "@/components/NavabarItem";

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-center align-middle bg-gray-600 dark:bg-amber-600 gap-4 p-4 lg:text-lg">
            <NavbarItem title="Trending" param="fetchTrending"/>
            <NavbarItem title="Top Rated" param="fetchTopRated"/>
        </nav>
    );
}