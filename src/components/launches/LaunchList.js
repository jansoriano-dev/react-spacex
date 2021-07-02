import React from 'react'
import Launch from './Launch'
import Spinner from 'react-bootstrap/Spinner'
const LaunchList = ({launches,isLoading}) => {
    let latestLaunches = launches.reverse();
    return isLoading?(<div style={{margin:'auto',display: 'block'}}><Spinner animation="border" variant="primary" /></div>):(
        <div >
            {latestLaunches.map(launch =>(
                <Launch key={launch.flight_number} launch={launch}/>
            ))}
        </div>
    )
}

export default LaunchList
