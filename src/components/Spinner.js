import { Spinner as SpinnerStrap } from 'reactstrap';

export default function Spinner() {
  return (
    <div style={{ minHeight: '40vh' }} className="d-flex align-items-center justify-content-center">
      <div className="fa-5x fa-pulse">
        <SpinnerStrap type="grow" color="success" />
      </div>
    </div>
  );
}
