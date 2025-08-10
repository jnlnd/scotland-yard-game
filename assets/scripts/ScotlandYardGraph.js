export const ConnectionTypes = Object.freeze({
  TAXI: 'Taxi',
  BUS: 'Bus',
  UNDERGROUND: 'Underground',
  FERRY: 'Ferry'
});

class ScotlandYardGraph {
    constructor(){
        this.graph = {}
    }

    // Add a station to the graph
    addStation(stationID){
        if (!this.graph[stationID]){
            this.graph[stationID] = [];
        }
    }

    // Add a route between two stations with a specifiy type of transportation
    addConnection(origin, destination, type){
        if(!this.graph[origin]) this.addStation(origin);
        if(!this.graph[destination]) this.addStation(destination);
    

        // Ensure the connection type is valid
        if (!Object.values(ConnectionTypes).includes(type)) {
            throw new Error(`Invalid connection type: ${type}`);
        }
        
        // if route doesn't exist yes
        if (!this.getConnections(origin, type).map(conn => conn.station).includes(destination)){
            // adds the route in both directions
            this.graph[origin].push({"station": destination, "type": type});
            this.graph[destination].push({"station": origin, "type": type});
        } 

    }
    
    // Gets all connected stations from a given station, optionally filtered by the connection type 
    getConnections(stationID, type=null){
        if (!this.graph[stationID]){
            return [];
        }

        if (type){
            return this.graph[stationID].filter((connection) => connection.type === type);
        } 
        return this.graph[stationID];
    }

    // displays the whole graph
    displayGraph() {
        for (const station in this.graph) {
            // const connections = this.graph[station].map(conn => `${conn.station} (${conn.type})`);
            // console.log(`${station}: ${connections.join(', ')}`);

            const connections = this.getConnections(station, ConnectionTypes.BUS);

            for (const conn of connections){
                if (conn.station > station) {
                    console.log(`gameGraph.addConnection(${station}, ${conn.station}, ConnectionTypes.BUS);`);
                }
            }
        }
    }
}

export const gameGraph = new ScotlandYardGraph();

// Taxi connections
gameGraph.addConnection(1, 9, ConnectionTypes.TAXI);
gameGraph.addConnection(1, 8, ConnectionTypes.TAXI);
gameGraph.addConnection(2, 20, ConnectionTypes.TAXI);
gameGraph.addConnection(2, 10, ConnectionTypes.TAXI);
gameGraph.addConnection(3, 4, ConnectionTypes.TAXI);
gameGraph.addConnection(3, 12, ConnectionTypes.TAXI);
gameGraph.addConnection(3, 11, ConnectionTypes.TAXI);
gameGraph.addConnection(4, 13, ConnectionTypes.TAXI);
gameGraph.addConnection(5, 15, ConnectionTypes.TAXI);
gameGraph.addConnection(5, 16, ConnectionTypes.TAXI);
gameGraph.addConnection(6, 29, ConnectionTypes.TAXI);
gameGraph.addConnection(6, 7, ConnectionTypes.TAXI);
gameGraph.addConnection(7, 17, ConnectionTypes.TAXI);
gameGraph.addConnection(8, 19, ConnectionTypes.TAXI);
gameGraph.addConnection(8, 18, ConnectionTypes.TAXI);
gameGraph.addConnection(9, 19, ConnectionTypes.TAXI);
gameGraph.addConnection(9, 20, ConnectionTypes.TAXI);
gameGraph.addConnection(10, 11, ConnectionTypes.TAXI);
gameGraph.addConnection(10, 34, ConnectionTypes.TAXI);
gameGraph.addConnection(10, 21, ConnectionTypes.TAXI);
gameGraph.addConnection(11, 22, ConnectionTypes.TAXI);
gameGraph.addConnection(12, 23, ConnectionTypes.TAXI);
gameGraph.addConnection(13, 14, ConnectionTypes.TAXI);
gameGraph.addConnection(13, 24, ConnectionTypes.TAXI);
gameGraph.addConnection(13, 23, ConnectionTypes.TAXI);
gameGraph.addConnection(14, 25, ConnectionTypes.TAXI);
gameGraph.addConnection(14, 15, ConnectionTypes.TAXI);
gameGraph.addConnection(15, 26, ConnectionTypes.TAXI);
gameGraph.addConnection(15, 28, ConnectionTypes.TAXI);
gameGraph.addConnection(15, 16, ConnectionTypes.TAXI);
gameGraph.addConnection(16, 28, ConnectionTypes.TAXI);
gameGraph.addConnection(16, 29, ConnectionTypes.TAXI);
gameGraph.addConnection(17, 29, ConnectionTypes.TAXI);
gameGraph.addConnection(17, 30, ConnectionTypes.TAXI);
gameGraph.addConnection(18, 43, ConnectionTypes.TAXI);
gameGraph.addConnection(18, 31, ConnectionTypes.TAXI);
gameGraph.addConnection(19, 32, ConnectionTypes.TAXI);
gameGraph.addConnection(20, 33, ConnectionTypes.TAXI);
gameGraph.addConnection(21, 33, ConnectionTypes.TAXI);
gameGraph.addConnection(22, 23, ConnectionTypes.TAXI);
gameGraph.addConnection(22, 34, ConnectionTypes.TAXI);
gameGraph.addConnection(22, 35, ConnectionTypes.TAXI);
gameGraph.addConnection(23, 37, ConnectionTypes.TAXI);
gameGraph.addConnection(24, 37, ConnectionTypes.TAXI);
gameGraph.addConnection(24, 38, ConnectionTypes.TAXI);
gameGraph.addConnection(25, 38, ConnectionTypes.TAXI);
gameGraph.addConnection(25, 39, ConnectionTypes.TAXI);
gameGraph.addConnection(26, 27, ConnectionTypes.TAXI);
gameGraph.addConnection(26, 39, ConnectionTypes.TAXI);
gameGraph.addConnection(27, 28, ConnectionTypes.TAXI);
gameGraph.addConnection(27, 40, ConnectionTypes.TAXI);
gameGraph.addConnection(28, 41, ConnectionTypes.TAXI);
gameGraph.addConnection(29, 41, ConnectionTypes.TAXI);
gameGraph.addConnection(29, 42, ConnectionTypes.TAXI);
gameGraph.addConnection(30, 42, ConnectionTypes.TAXI);
gameGraph.addConnection(31, 43, ConnectionTypes.TAXI);
gameGraph.addConnection(31, 44, ConnectionTypes.TAXI);
gameGraph.addConnection(32, 33, ConnectionTypes.TAXI);
gameGraph.addConnection(32, 45, ConnectionTypes.TAXI);
gameGraph.addConnection(32, 44, ConnectionTypes.TAXI);
gameGraph.addConnection(33, 46, ConnectionTypes.TAXI);
gameGraph.addConnection(34, 47, ConnectionTypes.TAXI);
gameGraph.addConnection(34, 48, ConnectionTypes.TAXI);
gameGraph.addConnection(35, 48, ConnectionTypes.TAXI);
gameGraph.addConnection(35, 36, ConnectionTypes.TAXI);
gameGraph.addConnection(35, 65, ConnectionTypes.TAXI);
gameGraph.addConnection(36, 49, ConnectionTypes.TAXI);
gameGraph.addConnection(36, 37, ConnectionTypes.TAXI);
gameGraph.addConnection(37, 50, ConnectionTypes.TAXI);
gameGraph.addConnection(38, 51, ConnectionTypes.TAXI);
gameGraph.addConnection(38, 50, ConnectionTypes.TAXI);
gameGraph.addConnection(39, 51, ConnectionTypes.TAXI);
gameGraph.addConnection(39, 52, ConnectionTypes.TAXI);
gameGraph.addConnection(40, 41, ConnectionTypes.TAXI);
gameGraph.addConnection(40, 52, ConnectionTypes.TAXI);
gameGraph.addConnection(40, 53, ConnectionTypes.TAXI);
gameGraph.addConnection(41, 54, ConnectionTypes.TAXI);
gameGraph.addConnection(42, 56, ConnectionTypes.TAXI);
gameGraph.addConnection(42, 72, ConnectionTypes.TAXI);
gameGraph.addConnection(43, 57, ConnectionTypes.TAXI);
gameGraph.addConnection(44, 58, ConnectionTypes.TAXI);
gameGraph.addConnection(45, 46, ConnectionTypes.TAXI);
gameGraph.addConnection(45, 58, ConnectionTypes.TAXI);
gameGraph.addConnection(45, 60, ConnectionTypes.TAXI);
gameGraph.addConnection(45, 59, ConnectionTypes.TAXI);
gameGraph.addConnection(46, 47, ConnectionTypes.TAXI);
gameGraph.addConnection(46, 61, ConnectionTypes.TAXI);
gameGraph.addConnection(47, 62, ConnectionTypes.TAXI);
gameGraph.addConnection(48, 62, ConnectionTypes.TAXI);
gameGraph.addConnection(48, 63, ConnectionTypes.TAXI);
gameGraph.addConnection(49, 50, ConnectionTypes.TAXI);
gameGraph.addConnection(49, 66, ConnectionTypes.TAXI);
gameGraph.addConnection(51, 52, ConnectionTypes.TAXI);
gameGraph.addConnection(51, 68, ConnectionTypes.TAXI);
gameGraph.addConnection(51, 67, ConnectionTypes.TAXI);
gameGraph.addConnection(52, 69, ConnectionTypes.TAXI);
gameGraph.addConnection(53, 54, ConnectionTypes.TAXI);
gameGraph.addConnection(53, 69, ConnectionTypes.TAXI);
gameGraph.addConnection(54, 55, ConnectionTypes.TAXI);
gameGraph.addConnection(54, 70, ConnectionTypes.TAXI);
gameGraph.addConnection(55, 71, ConnectionTypes.TAXI);
gameGraph.addConnection(56, 91, ConnectionTypes.TAXI);
gameGraph.addConnection(57, 58, ConnectionTypes.TAXI);
gameGraph.addConnection(57, 73, ConnectionTypes.TAXI);
gameGraph.addConnection(58, 59, ConnectionTypes.TAXI);
gameGraph.addConnection(58, 74, ConnectionTypes.TAXI);
gameGraph.addConnection(58, 75, ConnectionTypes.TAXI);
gameGraph.addConnection(59, 76, ConnectionTypes.TAXI);
gameGraph.addConnection(59, 75, ConnectionTypes.TAXI);
gameGraph.addConnection(60, 76, ConnectionTypes.TAXI);
gameGraph.addConnection(60, 61, ConnectionTypes.TAXI);
gameGraph.addConnection(61, 76, ConnectionTypes.TAXI);
gameGraph.addConnection(61, 62, ConnectionTypes.TAXI);
gameGraph.addConnection(61, 78, ConnectionTypes.TAXI);
gameGraph.addConnection(62, 79, ConnectionTypes.TAXI);
gameGraph.addConnection(63, 79, ConnectionTypes.TAXI);
gameGraph.addConnection(63, 64, ConnectionTypes.TAXI);
gameGraph.addConnection(63, 80, ConnectionTypes.TAXI);
gameGraph.addConnection(64, 65, ConnectionTypes.TAXI);
gameGraph.addConnection(64, 81, ConnectionTypes.TAXI);
gameGraph.addConnection(65, 66, ConnectionTypes.TAXI);
gameGraph.addConnection(65, 82, ConnectionTypes.TAXI);
gameGraph.addConnection(66, 67, ConnectionTypes.TAXI);
gameGraph.addConnection(66, 82, ConnectionTypes.TAXI);
gameGraph.addConnection(67, 68, ConnectionTypes.TAXI);
gameGraph.addConnection(67, 84, ConnectionTypes.TAXI);
gameGraph.addConnection(68, 69, ConnectionTypes.TAXI);
gameGraph.addConnection(68, 85, ConnectionTypes.TAXI);
gameGraph.addConnection(69, 86, ConnectionTypes.TAXI);
gameGraph.addConnection(70, 71, ConnectionTypes.TAXI);
gameGraph.addConnection(70, 87, ConnectionTypes.TAXI);
gameGraph.addConnection(71, 72, ConnectionTypes.TAXI);
gameGraph.addConnection(71, 89, ConnectionTypes.TAXI);
gameGraph.addConnection(72, 91, ConnectionTypes.TAXI);
gameGraph.addConnection(72, 90, ConnectionTypes.TAXI);
gameGraph.addConnection(73, 74, ConnectionTypes.TAXI);
gameGraph.addConnection(73, 92, ConnectionTypes.TAXI);
gameGraph.addConnection(74, 75, ConnectionTypes.TAXI);
gameGraph.addConnection(74, 92, ConnectionTypes.TAXI);
gameGraph.addConnection(75, 94, ConnectionTypes.TAXI);
gameGraph.addConnection(76, 77, ConnectionTypes.TAXI);
gameGraph.addConnection(77, 78, ConnectionTypes.TAXI);
gameGraph.addConnection(77, 95, ConnectionTypes.TAXI);
gameGraph.addConnection(77, 96, ConnectionTypes.TAXI);
gameGraph.addConnection(78, 79, ConnectionTypes.TAXI);
gameGraph.addConnection(78, 97, ConnectionTypes.TAXI);
gameGraph.addConnection(79, 98, ConnectionTypes.TAXI);
gameGraph.addConnection(80, 99, ConnectionTypes.TAXI);
gameGraph.addConnection(80, 100, ConnectionTypes.TAXI);
gameGraph.addConnection(81, 82, ConnectionTypes.TAXI);
gameGraph.addConnection(81, 100, ConnectionTypes.TAXI);
gameGraph.addConnection(82, 101, ConnectionTypes.TAXI);
gameGraph.addConnection(83, 102, ConnectionTypes.TAXI);
gameGraph.addConnection(83, 101, ConnectionTypes.TAXI);
gameGraph.addConnection(84, 85, ConnectionTypes.TAXI);
gameGraph.addConnection(85, 103, ConnectionTypes.TAXI);
gameGraph.addConnection(86, 103, ConnectionTypes.TAXI);
gameGraph.addConnection(86, 104, ConnectionTypes.TAXI);
gameGraph.addConnection(87, 88, ConnectionTypes.TAXI);
gameGraph.addConnection(88, 89, ConnectionTypes.TAXI);
gameGraph.addConnection(88, 117, ConnectionTypes.TAXI);
gameGraph.addConnection(89, 105, ConnectionTypes.TAXI);
gameGraph.addConnection(90, 105, ConnectionTypes.TAXI);
gameGraph.addConnection(90, 91, ConnectionTypes.TAXI);
gameGraph.addConnection(91, 105, ConnectionTypes.TAXI);
gameGraph.addConnection(91, 107, ConnectionTypes.TAXI);
gameGraph.addConnection(92, 93, ConnectionTypes.TAXI);
gameGraph.addConnection(93, 94, ConnectionTypes.TAXI);
gameGraph.addConnection(94, 95, ConnectionTypes.TAXI);
gameGraph.addConnection(95, 122, ConnectionTypes.TAXI);
gameGraph.addConnection(96, 109, ConnectionTypes.TAXI);
gameGraph.addConnection(96, 97, ConnectionTypes.TAXI);
gameGraph.addConnection(97, 98, ConnectionTypes.TAXI);
gameGraph.addConnection(97, 109, ConnectionTypes.TAXI);
gameGraph.addConnection(98, 99, ConnectionTypes.TAXI);
gameGraph.addConnection(98, 110, ConnectionTypes.TAXI);
gameGraph.addConnection(99, 110, ConnectionTypes.TAXI);
gameGraph.addConnection(99, 112, ConnectionTypes.TAXI);
gameGraph.addConnection(100, 101, ConnectionTypes.TAXI);
gameGraph.addConnection(100, 112, ConnectionTypes.TAXI);
gameGraph.addConnection(100, 113, ConnectionTypes.TAXI);
gameGraph.addConnection(101, 114, ConnectionTypes.TAXI);
gameGraph.addConnection(102, 103, ConnectionTypes.TAXI);
gameGraph.addConnection(102, 115, ConnectionTypes.TAXI);
gameGraph.addConnection(104, 116, ConnectionTypes.TAXI);
gameGraph.addConnection(105, 106, ConnectionTypes.TAXI);
gameGraph.addConnection(105, 108, ConnectionTypes.TAXI);
gameGraph.addConnection(106, 107, ConnectionTypes.TAXI);
gameGraph.addConnection(107, 119, ConnectionTypes.TAXI);
gameGraph.addConnection(108, 117, ConnectionTypes.TAXI);
gameGraph.addConnection(108, 119, ConnectionTypes.TAXI);
gameGraph.addConnection(109, 110, ConnectionTypes.TAXI);
gameGraph.addConnection(109, 124, ConnectionTypes.TAXI);
gameGraph.addConnection(110, 111, ConnectionTypes.TAXI);
gameGraph.addConnection(111, 112, ConnectionTypes.TAXI);
gameGraph.addConnection(111, 124, ConnectionTypes.TAXI);
gameGraph.addConnection(112, 125, ConnectionTypes.TAXI);
gameGraph.addConnection(113, 114, ConnectionTypes.TAXI);
gameGraph.addConnection(113, 125, ConnectionTypes.TAXI);
gameGraph.addConnection(114, 132, ConnectionTypes.TAXI);
gameGraph.addConnection(114, 126, ConnectionTypes.TAXI);
gameGraph.addConnection(114, 131, ConnectionTypes.TAXI);
gameGraph.addConnection(115, 126, ConnectionTypes.TAXI);
gameGraph.addConnection(115, 127, ConnectionTypes.TAXI);
gameGraph.addConnection(116, 127, ConnectionTypes.TAXI);
gameGraph.addConnection(116, 117, ConnectionTypes.TAXI);
gameGraph.addConnection(116, 118, ConnectionTypes.TAXI);
gameGraph.addConnection(117, 129, ConnectionTypes.TAXI);
gameGraph.addConnection(118, 129, ConnectionTypes.TAXI);
gameGraph.addConnection(118, 142, ConnectionTypes.TAXI);
gameGraph.addConnection(118, 134, ConnectionTypes.TAXI);
gameGraph.addConnection(119, 136, ConnectionTypes.TAXI);
gameGraph.addConnection(120, 121, ConnectionTypes.TAXI);
gameGraph.addConnection(120, 144, ConnectionTypes.TAXI);
gameGraph.addConnection(121, 122, ConnectionTypes.TAXI);
gameGraph.addConnection(121, 145, ConnectionTypes.TAXI);
gameGraph.addConnection(122, 146, ConnectionTypes.TAXI);
gameGraph.addConnection(122, 123, ConnectionTypes.TAXI);
gameGraph.addConnection(123, 137, ConnectionTypes.TAXI);
gameGraph.addConnection(123, 149, ConnectionTypes.TAXI);
gameGraph.addConnection(123, 124, ConnectionTypes.TAXI);
gameGraph.addConnection(123, 148, ConnectionTypes.TAXI);
gameGraph.addConnection(124, 138, ConnectionTypes.TAXI);
gameGraph.addConnection(124, 130, ConnectionTypes.TAXI);
gameGraph.addConnection(125, 131, ConnectionTypes.TAXI);
gameGraph.addConnection(126, 127, ConnectionTypes.TAXI);
gameGraph.addConnection(126, 140, ConnectionTypes.TAXI);
gameGraph.addConnection(127, 134, ConnectionTypes.TAXI);
gameGraph.addConnection(127, 133, ConnectionTypes.TAXI);
gameGraph.addConnection(128, 143, ConnectionTypes.TAXI);
gameGraph.addConnection(128, 160, ConnectionTypes.TAXI);
gameGraph.addConnection(128, 188, ConnectionTypes.TAXI);
gameGraph.addConnection(128, 172, ConnectionTypes.TAXI);
gameGraph.addConnection(128, 142, ConnectionTypes.TAXI);
gameGraph.addConnection(129, 135, ConnectionTypes.TAXI);
gameGraph.addConnection(129, 143, ConnectionTypes.TAXI);
gameGraph.addConnection(129, 142, ConnectionTypes.TAXI);
gameGraph.addConnection(130, 131, ConnectionTypes.TAXI);
gameGraph.addConnection(130, 139, ConnectionTypes.TAXI);
gameGraph.addConnection(132, 140, ConnectionTypes.TAXI);
gameGraph.addConnection(133, 141, ConnectionTypes.TAXI);
gameGraph.addConnection(133, 140, ConnectionTypes.TAXI);
gameGraph.addConnection(134, 141, ConnectionTypes.TAXI);
gameGraph.addConnection(135, 136, ConnectionTypes.TAXI);
gameGraph.addConnection(135, 161, ConnectionTypes.TAXI);
gameGraph.addConnection(135, 143, ConnectionTypes.TAXI);
gameGraph.addConnection(136, 162, ConnectionTypes.TAXI);
gameGraph.addConnection(137, 147, ConnectionTypes.TAXI);
gameGraph.addConnection(138, 150, ConnectionTypes.TAXI);
gameGraph.addConnection(138, 152, ConnectionTypes.TAXI);
gameGraph.addConnection(139, 140, ConnectionTypes.TAXI);
gameGraph.addConnection(139, 154, ConnectionTypes.TAXI);
gameGraph.addConnection(139, 153, ConnectionTypes.TAXI);
gameGraph.addConnection(140, 156, ConnectionTypes.TAXI);
gameGraph.addConnection(140, 154, ConnectionTypes.TAXI);
gameGraph.addConnection(141, 142, ConnectionTypes.TAXI);
gameGraph.addConnection(141, 158, ConnectionTypes.TAXI);
gameGraph.addConnection(142, 143, ConnectionTypes.TAXI);
gameGraph.addConnection(142, 158, ConnectionTypes.TAXI);
gameGraph.addConnection(143, 160, ConnectionTypes.TAXI);
gameGraph.addConnection(144, 145, ConnectionTypes.TAXI);
gameGraph.addConnection(144, 177, ConnectionTypes.TAXI);
gameGraph.addConnection(145, 146, ConnectionTypes.TAXI);
gameGraph.addConnection(146, 147, ConnectionTypes.TAXI);
gameGraph.addConnection(146, 163, ConnectionTypes.TAXI);
gameGraph.addConnection(147, 148, ConnectionTypes.TAXI);
gameGraph.addConnection(147, 164, ConnectionTypes.TAXI);
gameGraph.addConnection(148, 149, ConnectionTypes.TAXI);
gameGraph.addConnection(148, 164, ConnectionTypes.TAXI);
gameGraph.addConnection(149, 165, ConnectionTypes.TAXI);
gameGraph.addConnection(149, 150, ConnectionTypes.TAXI);
gameGraph.addConnection(150, 151, ConnectionTypes.TAXI);
gameGraph.addConnection(151, 152, ConnectionTypes.TAXI);
gameGraph.addConnection(151, 166, ConnectionTypes.TAXI);
gameGraph.addConnection(151, 165, ConnectionTypes.TAXI);
gameGraph.addConnection(152, 153, ConnectionTypes.TAXI);
gameGraph.addConnection(153, 154, ConnectionTypes.TAXI);
gameGraph.addConnection(153, 167, ConnectionTypes.TAXI);
gameGraph.addConnection(153, 166, ConnectionTypes.TAXI);
gameGraph.addConnection(154, 155, ConnectionTypes.TAXI);
gameGraph.addConnection(155, 156, ConnectionTypes.TAXI);
gameGraph.addConnection(155, 168, ConnectionTypes.TAXI);
gameGraph.addConnection(155, 167, ConnectionTypes.TAXI);
gameGraph.addConnection(156, 157, ConnectionTypes.TAXI);
gameGraph.addConnection(156, 169, ConnectionTypes.TAXI);
gameGraph.addConnection(157, 158, ConnectionTypes.TAXI);
gameGraph.addConnection(157, 170, ConnectionTypes.TAXI);
gameGraph.addConnection(158, 159, ConnectionTypes.TAXI);
gameGraph.addConnection(159, 172, ConnectionTypes.TAXI);
gameGraph.addConnection(159, 198, ConnectionTypes.TAXI);
gameGraph.addConnection(159, 186, ConnectionTypes.TAXI);
gameGraph.addConnection(159, 170, ConnectionTypes.TAXI);
gameGraph.addConnection(160, 161, ConnectionTypes.TAXI);
gameGraph.addConnection(160, 173, ConnectionTypes.TAXI);
gameGraph.addConnection(161, 174, ConnectionTypes.TAXI);
gameGraph.addConnection(162, 175, ConnectionTypes.TAXI);
gameGraph.addConnection(163, 177, ConnectionTypes.TAXI);
gameGraph.addConnection(164, 179, ConnectionTypes.TAXI);
gameGraph.addConnection(164, 178, ConnectionTypes.TAXI);
gameGraph.addConnection(165, 180, ConnectionTypes.TAXI);
gameGraph.addConnection(165, 179, ConnectionTypes.TAXI);
gameGraph.addConnection(166, 183, ConnectionTypes.TAXI);
gameGraph.addConnection(166, 181, ConnectionTypes.TAXI);
gameGraph.addConnection(167, 168, ConnectionTypes.TAXI);
gameGraph.addConnection(167, 183, ConnectionTypes.TAXI);
gameGraph.addConnection(168, 184, ConnectionTypes.TAXI);
gameGraph.addConnection(169, 184, ConnectionTypes.TAXI);
gameGraph.addConnection(170, 185, ConnectionTypes.TAXI);
gameGraph.addConnection(171, 173, ConnectionTypes.TAXI);
gameGraph.addConnection(171, 175, ConnectionTypes.TAXI);
gameGraph.addConnection(171, 199, ConnectionTypes.TAXI);
gameGraph.addConnection(172, 187, ConnectionTypes.TAXI);
gameGraph.addConnection(173, 174, ConnectionTypes.TAXI);
gameGraph.addConnection(173, 188, ConnectionTypes.TAXI);
gameGraph.addConnection(174, 175, ConnectionTypes.TAXI);
gameGraph.addConnection(176, 177, ConnectionTypes.TAXI);
gameGraph.addConnection(176, 189, ConnectionTypes.TAXI);
gameGraph.addConnection(178, 191, ConnectionTypes.TAXI);
gameGraph.addConnection(178, 189, ConnectionTypes.TAXI);
gameGraph.addConnection(179, 191, ConnectionTypes.TAXI);
gameGraph.addConnection(180, 181, ConnectionTypes.TAXI);
gameGraph.addConnection(180, 193, ConnectionTypes.TAXI);
gameGraph.addConnection(181, 182, ConnectionTypes.TAXI);
gameGraph.addConnection(181, 193, ConnectionTypes.TAXI);
gameGraph.addConnection(182, 183, ConnectionTypes.TAXI);
gameGraph.addConnection(182, 195, ConnectionTypes.TAXI);
gameGraph.addConnection(183, 196, ConnectionTypes.TAXI);
gameGraph.addConnection(184, 185, ConnectionTypes.TAXI);
gameGraph.addConnection(184, 197, ConnectionTypes.TAXI);
gameGraph.addConnection(184, 196, ConnectionTypes.TAXI);
gameGraph.addConnection(185, 186, ConnectionTypes.TAXI);
gameGraph.addConnection(186, 198, ConnectionTypes.TAXI);
gameGraph.addConnection(187, 188, ConnectionTypes.TAXI);
gameGraph.addConnection(187, 198, ConnectionTypes.TAXI);
gameGraph.addConnection(188, 199, ConnectionTypes.TAXI);
gameGraph.addConnection(189, 190, ConnectionTypes.TAXI);
gameGraph.addConnection(190, 191, ConnectionTypes.TAXI);
gameGraph.addConnection(190, 192, ConnectionTypes.TAXI);
gameGraph.addConnection(191, 192, ConnectionTypes.TAXI);
gameGraph.addConnection(192, 194, ConnectionTypes.TAXI);
gameGraph.addConnection(193, 194, ConnectionTypes.TAXI);
gameGraph.addConnection(194, 195, ConnectionTypes.TAXI);
gameGraph.addConnection(195, 197, ConnectionTypes.TAXI);
gameGraph.addConnection(196, 197, ConnectionTypes.TAXI);
gameGraph.addConnection(198, 199, ConnectionTypes.TAXI);

// Bus connections
gameGraph.addConnection(1, 58, ConnectionTypes.BUS);
gameGraph.addConnection(1, 46, ConnectionTypes.BUS);
gameGraph.addConnection(3, 22, ConnectionTypes.BUS);
gameGraph.addConnection(3, 23, ConnectionTypes.BUS);
gameGraph.addConnection(7, 42, ConnectionTypes.BUS);
gameGraph.addConnection(13, 23, ConnectionTypes.BUS);
gameGraph.addConnection(13, 52, ConnectionTypes.BUS);
gameGraph.addConnection(13, 14, ConnectionTypes.BUS);
gameGraph.addConnection(14, 15, ConnectionTypes.BUS);
gameGraph.addConnection(15, 29, ConnectionTypes.BUS);
gameGraph.addConnection(15, 41, ConnectionTypes.BUS);
gameGraph.addConnection(22, 34, ConnectionTypes.BUS);
gameGraph.addConnection(22, 65, ConnectionTypes.BUS);
gameGraph.addConnection(22, 23, ConnectionTypes.BUS);
gameGraph.addConnection(23, 67, ConnectionTypes.BUS);
gameGraph.addConnection(29, 41, ConnectionTypes.BUS);
gameGraph.addConnection(29, 55, ConnectionTypes.BUS);
gameGraph.addConnection(29, 42, ConnectionTypes.BUS);
gameGraph.addConnection(34, 46, ConnectionTypes.BUS);
gameGraph.addConnection(34, 63, ConnectionTypes.BUS);
gameGraph.addConnection(41, 52, ConnectionTypes.BUS);
gameGraph.addConnection(41, 87, ConnectionTypes.BUS);
gameGraph.addConnection(42, 72, ConnectionTypes.BUS);
gameGraph.addConnection(46, 58, ConnectionTypes.BUS);
gameGraph.addConnection(46, 78, ConnectionTypes.BUS);
gameGraph.addConnection(52, 67, ConnectionTypes.BUS);
gameGraph.addConnection(52, 86, ConnectionTypes.BUS);
gameGraph.addConnection(55, 89, ConnectionTypes.BUS);
gameGraph.addConnection(58, 74, ConnectionTypes.BUS);
gameGraph.addConnection(58, 77, ConnectionTypes.BUS);
gameGraph.addConnection(63, 79, ConnectionTypes.BUS);
gameGraph.addConnection(63, 65, ConnectionTypes.BUS);
gameGraph.addConnection(63, 100, ConnectionTypes.BUS);
gameGraph.addConnection(65, 67, ConnectionTypes.BUS);
gameGraph.addConnection(65, 82, ConnectionTypes.BUS);
gameGraph.addConnection(67, 102, ConnectionTypes.BUS);
gameGraph.addConnection(67, 82, ConnectionTypes.BUS);
gameGraph.addConnection(72, 107, ConnectionTypes.BUS);
gameGraph.addConnection(72, 105, ConnectionTypes.BUS);
gameGraph.addConnection(74, 94, ConnectionTypes.BUS);
gameGraph.addConnection(77, 94, ConnectionTypes.BUS);
gameGraph.addConnection(77, 78, ConnectionTypes.BUS);
gameGraph.addConnection(77, 124, ConnectionTypes.BUS);
gameGraph.addConnection(78, 79, ConnectionTypes.BUS);
gameGraph.addConnection(82, 140, ConnectionTypes.BUS);
gameGraph.addConnection(82, 100, ConnectionTypes.BUS);
gameGraph.addConnection(86, 102, ConnectionTypes.BUS);
gameGraph.addConnection(86, 87, ConnectionTypes.BUS);
gameGraph.addConnection(86, 116, ConnectionTypes.BUS);
gameGraph.addConnection(87, 105, ConnectionTypes.BUS);
gameGraph.addConnection(89, 105, ConnectionTypes.BUS);
gameGraph.addConnection(93, 94, ConnectionTypes.BUS);
gameGraph.addConnection(100, 111, ConnectionTypes.BUS);
gameGraph.addConnection(102, 127, ConnectionTypes.BUS);
gameGraph.addConnection(105, 107, ConnectionTypes.BUS);
gameGraph.addConnection(105, 108, ConnectionTypes.BUS);
gameGraph.addConnection(107, 161, ConnectionTypes.BUS);
gameGraph.addConnection(108, 116, ConnectionTypes.BUS);
gameGraph.addConnection(108, 135, ConnectionTypes.BUS);
gameGraph.addConnection(111, 124, ConnectionTypes.BUS);
gameGraph.addConnection(116, 127, ConnectionTypes.BUS);
gameGraph.addConnection(116, 142, ConnectionTypes.BUS);
gameGraph.addConnection(122, 144, ConnectionTypes.BUS);
gameGraph.addConnection(122, 123, ConnectionTypes.BUS);
gameGraph.addConnection(123, 144, ConnectionTypes.BUS);
gameGraph.addConnection(123, 165, ConnectionTypes.BUS);
gameGraph.addConnection(123, 124, ConnectionTypes.BUS);
gameGraph.addConnection(124, 153, ConnectionTypes.BUS);
gameGraph.addConnection(127, 133, ConnectionTypes.BUS);
gameGraph.addConnection(128, 142, ConnectionTypes.BUS);
gameGraph.addConnection(128, 135, ConnectionTypes.BUS);
gameGraph.addConnection(128, 161, ConnectionTypes.BUS);
gameGraph.addConnection(128, 199, ConnectionTypes.BUS);
gameGraph.addConnection(128, 187, ConnectionTypes.BUS);
gameGraph.addConnection(133, 140, ConnectionTypes.BUS);
gameGraph.addConnection(133, 157, ConnectionTypes.BUS);
gameGraph.addConnection(140, 154, ConnectionTypes.BUS);
gameGraph.addConnection(140, 156, ConnectionTypes.BUS);
gameGraph.addConnection(142, 157, ConnectionTypes.BUS);
gameGraph.addConnection(144, 163, ConnectionTypes.BUS);
gameGraph.addConnection(153, 154, ConnectionTypes.BUS);
gameGraph.addConnection(153, 180, ConnectionTypes.BUS);
gameGraph.addConnection(153, 184, ConnectionTypes.BUS);
gameGraph.addConnection(156, 157, ConnectionTypes.BUS);
gameGraph.addConnection(156, 184, ConnectionTypes.BUS);
gameGraph.addConnection(157, 185, ConnectionTypes.BUS);
gameGraph.addConnection(161, 199, ConnectionTypes.BUS);
gameGraph.addConnection(163, 176, ConnectionTypes.BUS);
gameGraph.addConnection(163, 191, ConnectionTypes.BUS);
gameGraph.addConnection(165, 191, ConnectionTypes.BUS);
gameGraph.addConnection(165, 180, ConnectionTypes.BUS);
gameGraph.addConnection(176, 190, ConnectionTypes.BUS);
gameGraph.addConnection(180, 184, ConnectionTypes.BUS);
gameGraph.addConnection(180, 190, ConnectionTypes.BUS);
gameGraph.addConnection(184, 185, ConnectionTypes.BUS);
gameGraph.addConnection(185, 187, ConnectionTypes.BUS);
gameGraph.addConnection(190, 191, ConnectionTypes.BUS);


// Underground connections
gameGraph.addConnection(13, 46, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(13, 89, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(13, 67, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(46, 74, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(46, 79, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(67, 89, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(67, 79, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(67, 111, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(79, 93, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(79, 111, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(89, 128, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(89, 140, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(111, 163, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(111, 153, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(128, 140, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(128, 185, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(140, 153, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(153, 185, ConnectionTypes.UNDERGROUND);
gameGraph.addConnection(153, 163, ConnectionTypes.UNDERGROUND);

// Ferry connections
gameGraph.addConnection(108, 115, ConnectionTypes.FERRY);
gameGraph.addConnection(115, 157, ConnectionTypes.FERRY);
gameGraph.addConnection(157, 194, ConnectionTypes.FERRY);


// gameGraph.displayGraph(ConnectionTypes.BUS);
// console.log(gameGraph.getConnections(14));