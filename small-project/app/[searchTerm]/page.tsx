import getWikiResults from "@/lib/getWikiResults"

type Props = {
    params: {
        searchTerm: string
    }
}

export default async function page({ params: {searchTerm}}: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages

    const content = (
        <main>
            {results ? Object.values(results).map(result => {
                return <p>{JSON.stringify(result)}</p>
            }) : <h2 className="p-2 text-xl">{`${searchTerm} Not found!`}</h2>}
        </main>
    )
  return content
}