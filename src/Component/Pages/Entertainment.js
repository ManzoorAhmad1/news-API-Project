
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import { useEffect, useState } from "react";
const Entertainment = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(" https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=32ad1ec8ba01499293a3492f3141822e")
            const data = await response.json();
            setData(data.articles)
        }
        fetchData();
    }, [])

    return (

        <Card>
            {Data.map((news) => {
                return (
                    <div key={news.url}>
                        <div className="card" style={{ width: "18rem", margin: "2rem" }} >
                            {news.img}
                            <div className="card-body">
                                <img src={news.urlToImage} className="card-img-top" alt="..." />
                                <h5 className="card-title">{news.title}</h5>
                                <p className="card-text">{news.description}</p>
                                <p className="card-date">{news.date}</p>
                                <Link to={news.url} className="btn btn-primary">Read More</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Card>

    )
}
export default Entertainment;
