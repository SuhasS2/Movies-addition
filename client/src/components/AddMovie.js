import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import {Input, Button, Container} from 'reactstrap';

export default function AddMovie(){
    const [title,setTitle] = useState('')
    const [year,setYear] = useState('')
    const [imdbId,setImdbId] = useState('')
    const [poster,setPoster] = useState('')
    
    const history = useHistory();

        function onClickInsert() {
           console.log(imdbId) 
           axios.post(`http://localhost:5000/addMovie`,{
               title,
               year,
               imdbId,
               poster
           }).then(res =>{
               console.log(res)
               console.log(res.data)
           })
           alert(`Movie Inserted`)
        }

    return(
        <Container>
            <h1>Add Details Here</h1>
            <section>
                <p>Enter Movie Name</p>
                <Input placeholder="Movie Name" onChange={e => {setTitle(e.target.value)}}/>
                <br />
                <p>Enter the Year</p>
                <Input placeholder="Year" onChange={e => {setYear(e.target.value)}}/>
                <br />
                <pr>Enter the ImdbId</pr>
                <Input placeholder="Enter the id" onChange={e => {setImdbId(e.target.value)}}/>
                <br />
                <pr>Enter the Poster</pr>
                <Input placeholder="Enter the Poster" onChange={e => {setPoster(e.target.value)}}/>
                <br />
                <Button color="primary" onClick={onClickInsert}>
                    Add data
                </Button>
                <br />
                <Button color='info' onClick={() => history.goBack()}>
                    Back
                </Button>
            </section>
        </Container>
    )
}