import * as React from "react";
import {Suspense} from "react";
import MovieInfo, {getMovie} from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type IParams = Promise<{id : string}>
// interface IParams {
//     params: {id: string};
// }

export async function generateMetadata(props: {params : IParams}) {
    const {id} = await props.params;
    const movie = await getMovie(id)
    return {
        title: movie.title,
    };
}

export default async function MovieDetailPage(props: {params: IParams}) {
    // @ts-ignore
    const {id} = await props.params;

    return (
        <div>
            <Suspense fallback={<h1>Loading movie info </h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie Videos </h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}