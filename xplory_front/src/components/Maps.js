import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};


const Maps = () => {
    const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDIBoKdzvsBBqkwRpuXsEZ0-UjG98CC4zk"
  })
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

const position = {
  lat: 37.772,
  lng: -122.214
}
const marker = React.useRef(null);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
    return (isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
    <Marker ref={marker} position={position} draggable={true} onDragEnd={(e)=>{console.log({e})
    
    console.log('lat',e.latLng.lat(),'lng',e.latLng.lng())
    
    }} />
      </GoogleMap>
  ) : <></>
    )
}

export default Maps
