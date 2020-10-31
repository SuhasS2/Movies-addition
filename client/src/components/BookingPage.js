import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { 
  Container,
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle
 } from "reactstrap";

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const { movieId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMovieDetail();
    console.log(data)
  }, []);

  function onClickBook() {
    alert("Ticket Booked Successfully");
  }

  function getMovieDetail() {
    setLoading(true);
    fetch(`http://localhost:5000/getMovies/${movieId}`)
      .then((response) => response.json())
      .then((result) => {
        const [movieDetails]=result;
        setLoading(false);
        setData(movieDetails);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  }

  
  return (
    <Container>
      {loading ? (
        <h3>Loading.......</h3>
      ) : (
        <>
        <section className="movie-details-section">
          <br/>
          <h1 color="tomato">Movie Details</h1>
          <br />
          <h2>{data.title}</h2>
          <br/>
          <Card>
            <CardImg
                top
                style={{ height: "480px", width: "360px" }}
                src={data.poster}
                alt="Card image cap"
              />
            <CardBody>
            <CardText>
                  <h3>ImdbId:{data.imdbId}</h3>
                  <h4>Year:{data.year}</h4>
                </CardText>
                <Button className="btn btn-dark">
                  Back
                </Button> 
            </CardBody>
          </Card>
        </section>
        </>
      )}
    </Container>
  );
}