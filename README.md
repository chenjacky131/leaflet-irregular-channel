# leaflet-irregular-channel

a leaflet plugin for creating a irregular channel

<h4>Requirements</h4>
* leaflet1.7.1

[demo](https://chenjacky131.github.io/leaflet-irregular-channel/index.html) 

<h4>Instructions</h4>

installing
````
npm install leaflet-irregular-channel -S
````
including
````
import irregularChannel from 'leaflet-irregular-channel';
````
<h4>Usage example</h4>

````
  const data = [
    {
      lat: 24.43683529482618, 
      lng: 118.04363250732423,
      widthLeft: 100,
      widthRight: 100
    },
    {
      lat: 24.396507684805687, 
      lng: 118.12808990478517,
      widthLeft: 200,
      widthRight: 100
    },
    {
      lat: 24.473400349324073,
      lng: 118.21907043457033,
      widthLeft: 100,
      widthRight: 200
    } 
  ]
  let channelInstance = irregularChannel(data, map);
````