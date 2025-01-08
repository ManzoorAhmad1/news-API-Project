import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import LoaderBar from "../Validation/LoaderBar";
import Error from "../Validation/Error";
import InfiniteScroll from "react-infinite-scroll-component";
const CustomHook = ({ category, pageSize }) => {
    const [data, setData] = useState([]);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const NextPageHandler = async () => {
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                setProgress(20);
                const response = await fetch(
                    `https://newsapi.org/v2/top-headlines?country=in&pageSize=${pageSize}&category=${category}&apiKey=32ad1ec8ba01499293a3492f3141822e`
                );
                setProgress(40);
                if (!response.ok) {
                    throw new Error("Could not fetch data " + response.status);
                }
                setProgress(70);
                const data = await response.json();
                setData(data.articles);
                setLoading(true);
                setProgress(100);
            } catch (error) {
                setLoading(false);
                setError("could not fetch Data ! some error occured");
                setProgress(100)
            }
        };

        fetchData();
    }, [pageSize, category]);
    return (
        <div>
            <Fragment>
                <InfiniteScroll
                    dataLength={data.length}
                    // next={nextPageHandler}
                    hasMore={true}
                    // loader={<Loader />}
                    scrollableTarget="scrollableDiv"
                >
                    {!loading ? (
                        <div>
                            <LoaderBar progress={progress} />

                        </div>

                    ) : (
                        <div>
                            <Card>
                                {data.map((news) => (
                                    <div
                                        key={news.url}
                                        className="card"
                                        style={{ width: "18rem", margin: "2rem" }}
                                    >
                                        <img src={news.urlToImage} className="card-img-top" alt="error" />
                                        <div className="card-body">
                                            <h5 className="card-title">{news.title}</h5>
                                            <p className="card-text">{news.description}</p>
                                            <p className="card-date">{news.publishedAt}</p>
                                            <Link to={news.url} className="btn btn-primary">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                ))}

                            </Card>

                        </div>
                    )

                    }
                    <br />
                    {!loading && error && <Error message={error} />}
                </InfiniteScroll>
            </Fragment>
        </div>
    )
};

export default CustomHook;



