import * as React from "react";
import {Suspense} from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";


export default async function MovieDetail({params}) {
    // @ts-ignore
    const {id} = await params


    return (
        <div>
            <h3>Movie detail page</h3>
            <Suspense fallback={<h1>Loading movie info </h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie Videos </h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}