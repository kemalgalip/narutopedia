import pageSize from "../pageSize";

export default async function getTopicPage(entityType: string, page: string) {
    const res = await fetch(
        `https://api.narutodb.xyz/${entityType}?page=${page}&limit=${pageSize}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
            },
        }
    );

    if (!res.ok) return undefined;

    return res.json();
}
