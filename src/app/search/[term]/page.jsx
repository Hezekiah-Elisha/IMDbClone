import Image from "next/image";
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;


export default async function SearchPage({params}) {
    const term = params.term;
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`);
    const data = await res.json();
    const results = data.results;
    return (
        results && results.length > 0 ? (
            <Results results={results} />
        ) : (
            <div className={"flex flex-col items-center justify-center w-full h-screen"}>
                <h2 className={"text-3xl font-bold"}>{`No results found for '${term}'`}</h2>
                <p className={"text-xl"}>Please try again with a different keyword.</p>
            </div>
        )
    );
}