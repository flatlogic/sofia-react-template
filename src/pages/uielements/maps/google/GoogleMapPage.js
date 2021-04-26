import React from "react";
import {
  Marker,
  GoogleMap,
  useJsApiLoader
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = { lat: 53.8847608, lng: 27.4532862 }

function GoogleMapPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg",
  })

  const [, setMap] = React.useState(null)

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div style={{height: "800px"}}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onUnmount={onUnmount}
      >
        <Marker position={{ lat: 40.6976701, lng: -74.2598654 }}/>
      </GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(GoogleMapPage);
