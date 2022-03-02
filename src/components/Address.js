import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import IpInfo from "./IpInfo";

export default function Address() {
  const [ipAddress, setIpAddress] = useState("");

  // async function fetchAddress(ipAddress) {
  //   const response = await fetch(
  //     
  //   );
  //   return response.json();
  // }

  // const { refetch, data, ...query } = useQuery("address", () =>
  //   fetchAddress(ipAddress)
  // );

  // useEffect(() => {
  //   if (ipAddress) {
  //     const timeoutId = setTimeout(
  //       () =>
  //         console.log(
  //           `I can see you're not typing. I can use "${ipAddress}" now!`
  //         ),
  //       1000
  //     );

  //     refetch();
  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [refetch, ipAddress]);

  const handleChange = (event) => {
    setIpAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIpAddress(ipAddress);
    // refetch();
  };

  return (
    <div className="container">
      <h1>IP Address Tracker</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={ipAddress}
          onChange={handleChange}
          placeholder="Search for any IP address or domain"
        />
        <button>submit</button>
      </form>

      {ipAddress && (
        <>
          <IpInfo />
          {/* <IpInfo data={data} />
          {query.isLoading && "Loading..."}
          {query.isError && "Error!"}
          {query.data && "Success!"} */}
        </>
      )}
    </div>
  );
}
