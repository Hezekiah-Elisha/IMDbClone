import Image from "next/image";

export default function Results({ results }) {
    return (
        <div>
            {results.map((result) => (
                <div key={result.id}>
                    <h2>{result.title || result.name}</h2>
                    <p>{result.overview}</p>
                    <img src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} alt={result.title || result.name} />
                </div>
            ))}
        </div>
    );
}