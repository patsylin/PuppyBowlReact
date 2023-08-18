import AllPlayers from "../components/AllPlayers";

const cohortName = '2306-GHP-ET-WEB-FT-SF';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        const result = await response.json();
        if (result.error) throw result.error;
        return result
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

export default fetchAllPlayers
