import React,{useState,useEffect} from 'react'
import {Card,Button,Row,Col} from 'react-bootstrap'
import SpinnerGif from '../../img/spinner.gif'
const Launch = ({launch}) => {
  const [show, setShow] = useState(false)

    var missionStatus;
    if (launch.upcoming) {
        missionStatus = <h1>{launch.mission_name}<span className="badge bg-primary">upcoming</span></h1>
    } else {
      if(launch.launch_success){
        missionStatus = <h1>{launch.mission_name}<span className="badge bg-success">success</span></h1>
      }else{
        missionStatus = <h1>{launch.mission_name}<span className="badge bg-danger">failure</span></h1>
      }
    }
    return (
        <>
<Card style={{ width: '100%',height:'10%',marginBottom:'10px' }}>
  <Card.Body>
    <Card.Title>
    {missionStatus}
    </Card.Title>
      {show && 
         <Row>
  <Col xs={12} md={1}>
    <Card.Img variant="top" src={SpinnerGif} style={{ width: '50px',height:'50px' }} />
    </Col>
    <Col xs={12} md={11}>
    <Card.Text style={{maxHeight:0}}>
    <p style={{color:'#000'}} >{launch.launch_date_utc} | </p>
    {launch.details}
    </Card.Text>
      <br/>
      <br/>
    </Col>
    </Row>

    }
  </Card.Body>
  <Button style={{ width: '8%',marginLeft:'20px' }} onClick={() => setShow(!show)}> {show ? 'hide' : 'view'}</Button>
  <br/>
 
</Card>
      </>
    )
}

export default Launch
