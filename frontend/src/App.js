import './App.css';
import React, {useState} from "react"


function App() {

  const [bandInput, setBandInput ]= useState("")
  const [albumTitleInput, setAlbumTitleInput] = useState("")
  const [albumYearInput, setAlbumYearInput] = useState("")

  const changeInput = (event) => {

    if (event.target.name === "band") {
      setBandInput(event.target.value)
    } else if (event.target.name === "title") {
      setAlbumTitleInput(event.target.value)
    } else if(event.target.name === "year") {
      setAlbumYearInput(event.target.value)
    }
  }

  const submitForm = (event) => {
    event.preventDefault()

    const newObj = {
      band: bandInput,
      albumTitle: albumTitleInput,
      albumYear: albumYearInput
    }

    const method = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObj)
    }

    fetch("http://localhost:3000/new-album", method)
      .then(res=> res.json())
      .then(data => {

        console.log("Success:", data)

        setBandInput("");
        setAlbumTitleInput("");
        setAlbumYearInput("");
      })
      .catch(err => {
        console.error("Error:", err)
      })
  }

  return (
    <div >
      <h1>Add an Album to the Collection!</h1>

      <form onSubmit={submitForm}>
        <div>
          <label>Band Name:</label>
          <input type="text" name="band" onChange={changeInput} value={bandInput}/>
        </div>
        <div>
          <label>Album Title:</label>
          <input type="text" name="title" onChange={changeInput} value={albumTitleInput}/>
        </div>
        <div>
          <label>Album Year:</label>
          <input type="number" name="year" onChange={changeInput} value={albumYearInput}/>
        </div>
        <button>Add Album</button>
      </form>
    </div>
  );
}

export default App;
