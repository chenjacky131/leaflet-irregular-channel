# leaflet-irregular-channel

a leaflet plugin for creating a irregular channel

####Requirements
* leaflet1.7.1

[demo](http://www.baidu.com) 

####Instructions
installing
````
npm install leaflet-irregular-channel -S
````
including
````
import 'leaflet-irregular-channel'
````
####Usage example
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
  let channelInstance = L.irregularChannel(data, map);
````
####Api reference