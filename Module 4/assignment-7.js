'use strict';
let form = document.querySelector("form");
const results = document.getElementById("results");

async function getRoute(query) {
    try {
        const response = await fetch(`${form.action}?query=${query}`);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}
function getCoordinates(address) {
    
    return lat, lon
}
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const address = document.getElementById("address").value;

    const query = `{
        plan(
            fromPlace: "${address}::${coordinates}",
            toPlace: "Karaportti 2, Espoo::60.224235547633086, 24.758676982632586",
        ) { itineraries{
                duration,
                legs {
                    mode
                    startTime
                    endTime
                    from {
                        lat
                        lon
                        name
                        stop {
                            code
                            name
                        }
                    },
                    to {
                        lat
                        lon
                        name
                    },
                    agency {
                        gtfsId
                        name
                    },
                    distance
                    legGeometry {
                        length
                        points
                    }
                }
            }
        }
    }`
    getRoute(query)
});
