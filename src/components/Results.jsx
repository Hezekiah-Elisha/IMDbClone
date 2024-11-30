import Image from "next/image";
import Card from "@/components/Card";

export default function Results({ results }) {
    return (
        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-6xl mx-auto py-4"}>
            {results.map((result) => (
                <Card key={result.id} result={result} />
            ))}
        </div>
    );
}