
//repository entity used to get repository info from github
type Repository = {
    id: number;
    name: string;
    full_name: string;
}

type Time = {
    dateTime: string;
}

async function getRepository(): Promise<Repository> {
    return httpGet<Repository>('https://api.github.com/repos/vercel/next.js');
}

async function getTime(): Promise<Time> {
    return httpGet<Time>('https://timeapi.io/api/time/current/zone?timeZone=Europe/Chisinau');
}

//with await
// async function httpGet<TResponse>(url: string): Promise<TResponse> {
//     const response = await fetch(url);
//     const responseJson: TResponse = await response.json();
//     return responseJson;
// }

//without await
function httpGet<TResponse>(url: string): Promise<TResponse> {
    const response = fetch(url)
        .then(response => response.json() as TResponse)
        .catch(e => {
            console.log(e);
            return {} as TResponse;
        });

    return response;
}

export default async function Page({ params, searchParams }:
    {
        params: { id: number },
        searchParams: { someParam: number }
    }) {

    const [routeParams, queryParams] = await Promise.all([params, searchParams]);
    const [repository, time] = await Promise.all([getRepository(), getTime()])

    return (
        <div>
            Id: {routeParams.id}
            <br></br>
            someParam: {queryParams.someParam}
            <div>
                Repository: {repository.id} {repository.name}
            </div>
            <div>
                Time: {time.dateTime}
            </div>
        </div>
    )
}
