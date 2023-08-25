import { Button } from "react-bootstrap";

export default function CareersCard(props) {
  return (
    <div className={props.class ? props.class : "Careers-Card"}>
      <div className="Careers-bg">
        <h3 className="Careers-h3">{props.title}</h3>
      </div>
      <div className="Careers-icon">
        <div className={props.icon}></div>
      </div>
      <div className="Careers-address">{props.address}</div>
      <div className="Careers-experience">{props.experience}</div>
      <div className="Careers-workingHours">{props.workingHours}</div>
      <div className="Careers-button">
        <Button href={props.details} className="button">
          Details
        </Button>
      </div>
    </div>
  );
}
