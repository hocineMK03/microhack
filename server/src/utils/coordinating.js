const { distinct } = require("../models/plans");

class Coordinating {
    getTheNearestWorkers(workersSize, userCoorDict, taskLatitude, taskLongitude) {
        let searchRadius = 0.5;
        let nearestWorkers = [];

        // Function to calculate distance between two coordinates using Haversine formula
        function calculateDistance(lat1, lon1, lat2, lon2) {
            const R = 6371; // Radius of the earth in km
            const dLat = (lat2 - lat1) * Math.PI / 180;  // Convert degrees to radians
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c; // Distance in km
            return distance;
        }

        console.log("Task Location:", taskLatitude, taskLongitude);

        
        while (workersSize > 0) { // Example maximum search radius of 10 km
            for (let workerId in userCoorDict) {
                let workerCoords = userCoorDict[workerId];
                console.log("Worker Coordinates:", workerCoords);
                let distance = calculateDistance(taskLatitude, taskLongitude, workerCoords.latitude, workerCoords.longitude);
                console.log("Distance to Task:", distance);
                if (distance <= searchRadius) {
                    nearestWorkers.push({ id: workerId, distance: distance });
                    delete userCoorDict[workerId];
                    workersSize--; // Decrement workersSize when a worker is found within the search radius
                }
            }
            searchRadius += 100.3; // Increase the search radius
        }

        
        nearestWorkers.sort((a, b) => a.distance - b.distance);

        return nearestWorkers;
    }
}



module.exports=new Coordinating
// Example usage
// const coordinating = new Coordinating();
// const workersSize = 3; // Example size of workers
// const userCoorDict = {
//     1: { latitude: 31.7128, longitude: -120.0060 }, // Example worker coordinates
//     2: { latitude: 39.0522, longitude: -121.2437 },
//     3: { latitude: 39.0522, longitude: -121.2437 },
//     3: { latitude: 18.0522, longitude: -121.2437 },
//     Add more worker coordinates here
// };
// const taskLatitude = 37.7749; // Example task coordinates
// const taskLongitude = -122.4194;
// const nearestWorkers = coordinating.getTheNearestWorkers(workersSize, userCoorDict, taskLatitude, taskLongitude);
// console.log(nearestWorkers);
