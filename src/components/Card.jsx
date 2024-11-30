import Link from "next/link";
import Image from "next/image";
import {FiThumbsUp} from "react-icons/fi";

export default function Card({ result }) {
    return (
        <Link href={`/movie/${result.id}`} className={"m-2 bg-slate-200 dark:bg-gray-800 rounded-lg hover:shadow-2xl"}>
            <Image
                width={1920}
                height={1080}
                src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                alt={result.name || result.title}
                className={"rounded-t-lg hover:grayscale transition-grayscale duration-300"}
            />
            <div className={"flex flex-col p-4"}>
                <h2 className={"text-xl font-bold truncate text-black dark:text-white"}>{result.name || result.title}</h2>
                <p className={"text-sm  text-black dark:text-gray-300 line-clamp-2"}>{result.overview}</p>

                <div className={"flex flex-row justify-between items-center"}>
                    <div>
                        <span className={"text-sm text-black dark:text-gray-300"}>{result.release_date || result.first_air_date}</span>
                    </div>
                    <div className={"flex flex-row gap-1 justify-center align-middle items-center"}>
                        <FiThumbsUp className={"text-blue-500"} />
                        <span className={"text-sm text-black dark:text-gray-300"}>{result.vote_average}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}