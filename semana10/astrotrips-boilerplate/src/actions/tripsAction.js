import axios from "axios";

const setTrips = (trips) => ({
    type: 'SET_TRIPS',
    payload: { 
        trips,
    }
})

export const getTrips = () => async (dispatch) => {
    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/rafacazal/trips`)

    dispatch(setTrips(response.data.trips))
}

// const setTripsDetails = (tripId) => ({
//     type: 'SET_TRIPSId',
//     payload: { 
//         trips,
//     }
// })

// export const getTripsDetails = () => async (dispatch) => {
//     const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/rafacazal/trip/${trip.id}?=`)

//     dispatch(setTrips(response.data.trips))
// }