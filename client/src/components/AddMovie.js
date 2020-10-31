import React, {useEffect} from 'react';
import axios from 'axios';

export default function AddMovie(){
    // const [title,setTitle] = useState("");
    // const [year,setYear] = useState("");
    // const [imdbId,setImdbId] = useState("");
    // const [poster] = useState("");
    useEffect(() => {
        addMovie();
      }, []);
    
      async function addMovie(){
          console.log("addind movie")
          const body = {title:"Avangers",year:"2010",imdbId:"tt2133",poster:"http://www.omdbapi.com/src/poster.jpg"};
          const result = await axios.post("http://localhost:5000/addMovie", body)
          .then((response) => {
             console.log(response);
          }).catch((error) => {
              console.log("error",error);
          });
      }
    return (<h1>Adding a movie</h1>);
}