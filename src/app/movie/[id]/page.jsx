import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default async function MoviePage({params}) {
    const movieId = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    const data = await res.json();
    if(!res.ok) {
        throw new Error(data.message || "Something went wrong!");
    }
    const movie = data;

    return (
        <div className={"flex flex-col md:flex-row w-full max-w-6xl mx-auto"}>
            <div className={"flex flex-row justify-center align-middle items-center w-full md:w-1/2"}>
                <Image
                    width={1920}
                    height={1080}
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                    alt={movie.name || movie.title}
                    className={"rounded-lg hover:grayscale transition-grayscale duration-300 w-full object-cover"}
                />
            </div>
            <div className={"w-full md:w-1/2 space-y-1 p-2"}>
                <h2 className={"text-2xl font-bold"}>{movie.name || movie.title}</h2>
                <p className={"text-lg"}>{movie.overview}</p>
                <p><span className={"font-semibold mr-1"}>Release date:</span>{movie.release_date || movie.first_air_date}</p>
                <p>{movie.vote_count}</p>
            </div>
        </div>
    );
}