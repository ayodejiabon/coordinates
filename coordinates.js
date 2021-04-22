//function to return radian value of points
  const toRad = value => {
    return value * Math.PI / 180;
  }

  const calculateDistance = (A, B) => {

    //destrucure point A to get latitude and longitude
    let latitudeA =  A.lat;
    let longitudeA =  A.lng;

    //destrucure point B to get latitude and longitude
    let latitudeB =  B.lat;
    let longitudeB =  B.lng;

    //throw error if any of the variables are empty
    if (!latitudeA || !longitudeA || !latitudeB || !longitudeB){
      throw 'Invalid data structure';
    }

    //throw error if any of the variables are not numbers
    if (isNaN(latitudeA) || isNaN(longitudeA) || isNaN(latitudeB) || isNaN(longitudeB)) {
      throw 'All points must be numbers';
    }

    //throw error if any of the latitude variables are invalid
    if (latitudeA < -90 || latitudeA > 90 || latitudeB < -90 || latitudeB > 90 ) {
      throw 'Invalid point A or point B latitude';
    }

    //throw error if any of the longitud variables are invalid
    if (longitudeA < -180 || longitudeA > 180 || longitudeB < -180 || longitudeB > 180 ) {
      throw 'Invalid point A or point B longitude';
    }


    let R = 6371; // Radius of the earth in KM
    let dLat = toRad(latitudeB-latitudeA);
    let dLon = toRad(longitudeB-longitudeA);

    let lat1 = toRad(latitudeA);
    let lat2 = toRad(latitudeB);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var distance = R * c; // distance returned in Kilometers

    if (distance <= 25) {
      return true;
    }
    return false;
  }

  var answer = calculateDistance({lat: 6.5244, lng: 3.3792}, {lat: 9.0765, lng: 7.3986});
  console.log(answer);