import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4974.4709465944425!2d84.04071001414925!3d28.162249055094527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995bd8bfa073e81%3A0x5234f3b46803ec0!2sRithepani%2C+Lekhnath+33700!5e0!3m2!1sen!2snp!4v1557720062589!5m2!1sen!2snp"
        title="location"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
