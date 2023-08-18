import React, { useState } from "react";

export default function NewPlayerForm() {
  const [formData, setFormData] = useState({
    name: "",
    // id: "",
    breed: "",
    imageUrl: "",
    team: "",
  });

  const [submitData, setSubmitData] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );
      const result = await response.json();
      console.log(result);

      setSubmitData({
        name: result.name,
        // id: result.id,
        breed: result.breed,
        imageUrl: result.imageUrl,
        team: result.team,
      });
    } catch (error) {
      console.error(error);
    }
  }
  async function handleInputChange(event) {
    try {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>New Player Form 🐾</h3>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          //   id="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />

        {/* <label>Player ID:</label>
      <input
          type="text"
          name="id"
          id="id"
          value={formData.id}
          onChange={handleInputChange}
        />
        <br /> */}

        <label>Breed:</label>
        <input
          type="text"
          name="breed"
          id="breed"
          value={formData.breed}
          onChange={handleInputChange}
        />
        <br />

        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          value={formData.imageUrl}
          placeholder="image URL"
          onChange={handleInputChange}
        />
        <br />

        <label>Team:</label>
        <input
          type="text"
          name="team"
          id="team"
          value={formData.team}
          onChange={handleInputChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      {submitData && (
        <div>
          <p>Name: {submitData.name}</p>
          {/* <p>ID: {submitData.id}</p> */}
          <p>Breed: {submitData.breed}</p>
          <p>
            <img src={submitData.imageUrl} alt="Player" />
          </p>
          <p>Team: {submitData.team}</p>
        </div>
      )}
    </div>
  );
}
