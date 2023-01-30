import '../styles/Error/GetError.css';

const ErrorBoundery = ({ error_msg }) => {
  return (
    <div className="error-msg-container">
      <h2 className="error-message">
        Error Occurred in server!
        <br />
        {error_msg.message}, code:{error_msg.code}
      </h2>
    </div>
  );
}

export default ErrorBoundery;