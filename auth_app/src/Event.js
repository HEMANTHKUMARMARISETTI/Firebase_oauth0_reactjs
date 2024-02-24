import React, { useState } from 'react';

const YourComponent = () => {
  const [eventType, setEventType] = useState('');
  const [branch, setBranch] = useState('');

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handlePostRequest = async () => {
    try {
      const url = 'https://ap-south-1.aws.data.mongodb-api.com/app/application-1-jlzzk/endpoint/Anveshna';
      const data = {
        eventType,
        branch,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result); // You can handle the result as needed
    } catch (error) {
      console.error('Error during POST request:', error.message);
    }
  };

  return (
    <div>
      <label>
        Event Type:
        <input type="text" value={eventType} onChange={handleEventTypeChange} />
      </label>
      <br />
      <label>
        Branch:
        <input type="text" value={branch} onChange={handleBranchChange} />
      </label>
      <br />
      <button onClick={handlePostRequest}>Post Request</button>
    </div>
  );
};

export default YourComponent;
