import React from 'react'

export default function IpInfo({data}) {
  return (
    <div>
        <h6>IP Address</h6>
        <p>{data.ip}</p>
        {/* <p>8.8.8.8</p> */}
        <h6> Location</h6>
        {/* <p>{data.location.region}</p> */}
        <p>California</p>
        <h6> Timezone</h6>
        {/* <p>UTC {data.location.timezone}</p> */}
        <p>UTC -08:00</p>
        <h6>ISP</h6>
        {/* <p>{data.isp}</p> */}
        <p>Google LLC</p>
      </div>
  )
}
