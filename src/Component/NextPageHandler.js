
export const NextPageHandler = async ({ data, category, pageSize, setError, setData }) => {
    try {
        const nextPage = Math.floor(data.length / pageSize) + 1; // Calculate the next page
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=in&page=${nextPage}&pageSize=${pageSize}&category=${category}&apiKey=32ad1ec8ba01499293a3492f3141822e`
        );
        if (!response.ok) {
            throw new Error("Could not fetch data " + response.status);
        }
        const newData = await response.json();
        setData(prevData => [...prevData, ...newData.articles]);
    } catch (error) {
        setError("Could not load more news.");
    }
}

