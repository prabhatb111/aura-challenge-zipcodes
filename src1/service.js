const data = require('./data.json');

const find = (filter) => {
    // Sample filters
    //{ "zip": "002","primary_city":"Amherst","latLong":"42.37, -72.52","radius":100 }
    const radius = (filter.radius)?filter.radius:100;
    const items = data.filter(item => {
        let flag = true;
        for (let key in filter) {
            if(key == 'latLong'){
                const latLong= filter[key];
                const latLongArray = latLong.split(",");
                const lat = latLongArray[0].trim();
                const lng = latLongArray[1].trim();
                let distanceCount = distance(lat, lng, item.latitude, item.longitude, "M");
                if(distanceCount > radius ){
                    flag = false;  
                }
            }else if (item[key] && item[key].indexOf(filter[key]) == -1 ) {
                flag = false;
            }
        }
        return flag;
    });
    return items
}


const distance = (lat1, lon1, lat2, lon2, unit) => {

    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
        dist = 1;
    }
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
}

module.exports = {find}

