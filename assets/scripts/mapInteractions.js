import { gameGraph, ConnectionTypes } from './ScotlandYardGraph.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const DEBUG = false;

// Array to store station data
const stations = {};
const detectivePositions = {};
let mrXPosition = {"station": -1, "ticktes":{
    "Black": 2,
    "DoubleMove": 2
}};

resetCanvas();

function resetCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // map image
    const img = new Image();
    img.src = "assets/images/map.png";

    img.onload = function() {
        // Draw the map as the background 
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        for (let stationID in detectivePositions){
            const img = new Image();
            img.src = 'assets/images/Detective.png';


            img.onload = function() {
                ctx.drawImage(img, detectivePositions[stationID].station.x-10,  detectivePositions[stationID].station.y-10, 30, 30);
            };
        }

        if (mrXPosition.station != -1) {
            const img = new Image();
            img.src = 'assets/images/MrX.png';


            img.onload = function() {
                ctx.drawImage(img, stations[mrXPosition.station].x-10, stations[mrXPosition.station].y-10, 30, 30);
            };
        }

        // Draw some shapes on top of the image
        if (DEBUG) {
            drawStations();
            drawConnections(ConnectionTypes.TAXI);
        }
    };
}

addStation(108, 32, 1);
addStation(247, 37, 2);
addStation(304, 28, 3);
addStation(375, 34, 4);
addStation(586, 34, 5);
addStation(630, 36, 6);
addStation(700, 38, 7);
addStation(72, 58, 8);
addStation(127, 62, 9);
addStation(261, 69.5, 10);
addStation(301, 62, 11);
addStation(338, 67, 12);
addStation(403, 67, 13);
addStation(464, 48, 14);
addStation(524, 36, 15);
addStation(593, 70, 16);
addStation(698, 86, 17);
addStation(31, 90, 18);
addStation(99, 87, 19);
addStation(158, 85, 20);
addStation(218, 110, 21);
addStation(307, 106, 22);
addStation(352, 94, 23);
addStation(425, 96, 24);
addStation(475, 82, 25);
addStation(514, 70, 26);
addStation(527, 95, 27);
addStation(561, 86, 28);
addStation(639, 104, 29);
addStation(726, 115, 30);
addStation(65, 125, 31);
addStation(132, 128, 32);
addStation(183, 122, 33);
addStation(276, 121, 34);
addStation(317, 139, 35);
addStation(349, 147, 36);
addStation(380, 125, 37);
addStation(441, 123, 38);
addStation(488, 108, 39);
addStation(538, 129, 40);
addStation(580, 117, 41);
addStation(686, 133, 42);
addStation(33, 137, 43);
addStation(90, 145, 44);
addStation(159, 155, 45);
addStation(207, 150, 46);
addStation(243, 134, 47);
addStation(284, 159, 48);
addStation(363, 168, 49);
addStation(395, 149, 50);
addStation(461, 150, 51);
addStation(498, 137, 52);
addStation(548, 166, 53);
addStation(580, 152, 54);
addStation(629, 146, 55);
addStation(714, 173, 56);
addStation(47, 168, 57);
addStation(111, 167, 58);
addStation(150, 201, 59);
addStation(183, 185, 60);
addStation(220, 194, 61);
addStation(254, 176, 62);
addStation(294, 210, 63);
addStation(329, 211, 64);
addStation(355, 194, 65);
addStation(389, 197, 66);
addStation(420, 178, 67);
addStation(478, 177, 68);
addStation(521, 185, 69);
addStation(578, 181, 70);
addStation(623, 174, 71);
addStation(676, 169, 72);
addStation(54, 197, 73);
addStation(80, 216, 74);
addStation(121, 222, 75);
addStation(174, 219, 76);
addStation(191, 239, 77);
addStation(226, 228, 78);
addStation(260, 215, 79);
addStation(327, 249, 80);
addStation(360, 248, 81);
addStation(384, 231, 82);
addStation(418, 239, 83);
addStation(460, 203, 84);
addStation(495, 206, 85);
addStation(533, 218, 86);
addStation(574, 236, 87);
addStation(603, 255, 88);
addStation(612, 216, 89);
addStation(660, 204, 90);
addStation(705, 208, 91);
addStation(43, 232, 92);
addStation(45, 269, 93);
addStation(83, 264, 94);
addStation(137, 253, 95);
addStation(213, 275, 96);
addStation(245, 266, 97);
addStation(275, 254, 98);
addStation(303, 265, 99);
addStation(350, 281, 100);
addStation(388, 266, 101);
addStation(456, 240, 102);
addStation(501, 229, 103);
addStation(546, 259, 104);
addStation(645, 245, 105);
addStation(686, 242, 106);
addStation(726, 239, 107);
addStation(646, 310, 108);
addStation(249, 308, 109);
addStation(280, 280, 110);
addStation(289, 308, 111);
addStation(322, 293, 112);
addStation(362, 304, 113);
addStation(398, 306, 114);
addStation(462, 281, 115);
addStation(549, 310, 116);
addStation(598, 317, 117);
addStation(554, 344, 118);
addStation(713, 332, 119);
addStation(28, 356, 120);
addStation(64, 358, 121);
addStation(100, 353, 122);
addStation(189, 353, 123);
addStation(242, 337, 124);
addStation(329, 315, 125);
addStation(431, 313, 126);
addStation(492, 330, 127);
addStation(583, 444, 128);
addStation(598, 353, 129);
addStation(309, 343, 130);
addStation(349, 333, 131);
addStation(392, 329, 132);
addStation(462, 371, 133);
addStation(513, 360, 134);
addStation(634, 376, 135);
addStation(683, 391, 136);
addStation(159, 373, 137);
addStation(253, 359, 138);
addStation(319, 369, 139);
addStation(385, 362, 140);
addStation(488, 394, 141);
addStation(554, 407, 142);
addStation(609, 411, 143);
addStation(39, 400, 144);
addStation(75, 400, 145);
addStation(105, 393, 146);
addStation(142, 395, 147);
addStation(169, 412, 148);
addStation(199, 395, 149);
addStation(227, 378, 150);
addStation(249, 398, 151);
addStation(274, 378, 152);
addStation(295, 406, 153);
addStation(344, 388, 154);
addStation(368, 410, 155);
addStation(397, 422, 156);
addStation(449, 433, 157);
addStation(498, 420, 158);
addStation(510, 472, 159);
addStation(625, 444, 160);
addStation(668, 425, 161);
addStation(726, 420, 162);
addStation(108, 425, 163);
addStation(148, 437, 164);
addStation(210, 436, 165);
addStation(289, 436, 166);
addStation(331, 441, 167);
addStation(357, 460, 168);
addStation(391, 451, 169);
addStation(452, 471, 170);
addStation(650, 514, 171);
addStation(558, 470, 172);
addStation(637, 482, 173);
addStation(682, 457, 174);
addStation(707, 486, 175);
addStation(41, 460, 176);
addStation(75, 447, 177);
addStation(126, 462, 178);
addStation(180, 461, 179);
addStation(233, 484, 180);
addStation(276, 469, 181);
addStation(295, 490, 182);
addStation(314, 462, 183);
addStation(388, 483, 184);
addStation(445, 521, 185);
addStation(484, 503, 186);
addStation(541, 509, 187);
addStation(598, 501, 188);
addStation(76, 504, 189);
addStation(119, 529, 190);
addStation(143, 500, 191);
addStation(192, 549, 192);
addStation(258, 513, 193);
addStation(274, 536, 194);
addStation(313, 529, 195);
addStation(339, 488, 196);
addStation(352, 516, 197);
addStation(516, 537, 198);
addStation(599, 535, 199);

// Function to create stations
function addStation(x, y, id) {
    stations[id] = { x, y, radius: 15, id };
}

// Function to draw stations
function drawStations() {
    Object.entries(stations).forEach(([id, station]) => {
        ctx.beginPath();
        ctx.arc(station.x, station.y, station.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(0, 150, 255, 0.5)';
        ctx.fill();
        ctx.stroke();
    });
}

function drawConnections(ConnectionType=null){
    Object.entries(stations).forEach(([id, station]) => {
        const connectedStations = gameGraph.getConnections(id, ConnectionType);
        for (const destination of connectedStations){
            ctx.moveTo(station.x, station.y);
            ctx.lineTo(stations[destination.station].x, stations[destination.station].y);
            ctx.stroke();
        }
    });
}

// Function to check if a click is inside a station
function isInsideStation(x, y, station) {
    const dist = (x - station.x) ** 2 + (y - station.y) ** 2;
    return dist <= station.radius ** 2;
}

// Add event listener for mouse move to change cursor
canvas.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if mouse is over any station
    let isOverStation = false;
    Object.entries(stations).forEach(([id, station]) => {
        if (isInsideStation(mouseX, mouseY, station)) {
            isOverStation = true;
        }
    });

    // Change cursor based on hover state
    if (isOverStation) {
        canvas.style.cursor = 'pointer';  // Change to a clickable cursor
    } else {
        canvas.style.cursor = 'default';  // Change back to default cursor
    }
});


// Add event listener for mouse down (click) to detect left or right click
canvas.addEventListener('mousedown', function(event) {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Check which mouse button was clicked
    if (event.button === 0) { // Left click
        Object.entries(stations).forEach(([id, station]) => {
            if (isInsideStation(clickX, clickY, station)) {
                moveDetective(station);
            }
        });
    } else if (event.button === 2) { // Right click
        Object.entries(stations).forEach(([id, station]) => {
            if (isInsideStation(clickX, clickY, station)) {
                moveMrX(station);
            }
        });
        event.preventDefault(); // Prevent the default right-click menu from appearing
    }
});

// Disable the right-click context menu on canvas
canvas.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent the default right-click menu
});

async function createDropdown(options){
    const overlay = document.createElement("div");
    overlay.className = "dropdown-overlay";

    overlay.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });


    const select = document.createElement("select");
    select.className = "dropdown-select";

    const defaultOption = document.createElement("option");
    defaultOption.value = "default"
    defaultOption.textContent = "--- select a transportation mode ---";
    
    select.appendChild(defaultOption);

    // Loop through possible transportation types and create option elements
    options.forEach(optionText => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
    });

    // Add them to the DOM
    document.body.appendChild(select);
    document.body.appendChild(overlay)


    const selectedType = await new Promise(resolve => {
        select.addEventListener("change", () => {
            resolve(select.value);
        });
    });

    // remove the dropdown
    select.remove();
    overlay.remove();

    return selectedType;
}

let lastSelectedStation = -1;
async function moveDetective(station)
{
    // not enough Detectives
    const amountDetectives = Object.keys(detectivePositions).length;
    if (amountDetectives < 2) {
        detectivePositions[station.id] = {station, "tickets": {
            "Taxi": 10,
            "Bus": 8,
            "Underground": 4,
        }};

        resetCanvas();
    } 

    // Save last clicked station to move a detective on the next click
    else if(lastSelectedStation == -1 && detectivePositions[station.id]) {
        lastSelectedStation = station.id;
    }
    
    // Move the detective to the new station and there isn't already another detective
    else if (lastSelectedStation != -1 && !detectivePositions[station.id]){
        // check if the new station is reachable with one available ticket
        
        // filter the correct connections and if they are possible to execute with the detective's tickets
        const possibleConnections = gameGraph.getConnections(lastSelectedStation).filter(conn => conn.station === station.id && detectivePositions[lastSelectedStation].tickets[conn.type] > 0)

        // no connection to next station
        if (possibleConnections.length == 0){
            // ERROR Message
            const msg = document.createElement("div");
            msg.className = "error-message";
            msg.textContent = `There are no connections between ${lastSelectedStation} and ${station.id} \n or you don't have enough tickets!`;

            document.body.appendChild(msg);

            // Trigger fade-out after 1 second
            setTimeout(() => {
                msg.style.opacity = 0;
            }, 1000);

            // Remove from DOM after fade-out is done (1s + small buffer)
            setTimeout(() => {
                msg.remove();
            }, 2000);
        }

        // only one possible connection to next station
        else if(possibleConnections.length == 1){
            detectivePositions[station.id] =  {station, "tickets": detectivePositions[lastSelectedStation].tickets};
            detectivePositions[station.id].tickets[possibleConnections[0].type] -= 1
            delete detectivePositions[lastSelectedStation];
        }

        // multiple ways to reach next station
        else{
            // Dropdown: Which type of transportation should be used
            const selectedType = await createDropdown(possibleConnections.map(conn => conn.type))

            // Move the detective
            detectivePositions[station.id] =  {station, "tickets": detectivePositions[lastSelectedStation].tickets};
            detectivePositions[station.id].tickets[selectedType] -= 1
            delete detectivePositions[lastSelectedStation];
        }
        
        lastSelectedStation = -1;
        resetCanvas();
    }
}

async function moveMrX(station)
{
    if (mrXPosition.station != -1){
        const possibleTickets = Object.keys(mrXPosition.ticktes).filter(ticket => mrXPosition.ticktes[ticket] > 0);
        
        // Ticket(s) available
        if (possibleTickets.length > 0){
            possibleTickets.push("None");

            // Dropdown: Which type of transportation should be used
            const selectedType = await createDropdown(possibleTickets);
            
            if (selectedType != "None"){
                mrXPosition.ticktes[selectedType] -= 1
            }
        }
    }
    
    mrXPosition.station = station.id;
    resetCanvas();
}