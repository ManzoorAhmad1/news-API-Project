import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import LoaderBar from "../Validation/LoaderBar";
import Error from "../Validation/Error";

const Health = () => {
    const [data, setData] = useState([]);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [pageSize, setPageSize] = useState(5)
    const [isDesibled, setDesibled] = useState(false)
    const nextPageHandler = () => {
        setPageSize(pageSize + 5)

    }
    const previousPageHadler = () => {
        if (pageSize === 5) {
          setDesibled(true);
        }
        setPageSize((prevPageSize) => Math.max(prevPageSize - 5, 5));
      };
    useEffect(() => {
        const fetchData = async () => {
            try {
                setProgress(20);
                const response = await fetch(
                    `https://newsapi.org/v2/top-headlines?country=in&pageSize=${pageSize}&category=health&apiKey=32ad1ec8ba01499293a3492f3141822e`
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
    }, [pageSize]);

    return (
        <Fragment>
            {!loading ? (
                <LoaderBar progress={progress} />
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
                    <div className="button">
                        <button onClick={previousPageHadler} disabled={isDesibled}>Previous</button>
                        <button onClick={nextPageHandler}>Next</button>
                    </div>
                </div>
            )

            }
            <br />

            {!loading && error && <Error message={error} />}
        </Fragment>
    );
};

export default Health;
