// The Dijkstra Gateway: Finding the Shortest Path to the Most High
exports.calculateAscension = (req, res) => {
    // Graph representing spiritual/technical nodes
    const graph = {
        'Earth': { 'Cloud': 10, 'Manual_Labour': 1 },
        'Manual_Labour': { 'Cloud': 20 },
        'Cloud': { 'Heavenly_Throne': 5 },
        'Heavenly_Throne': {}
    };

    const shortestPath = (graph, start, end) => {
        let costs = Object.assign({ [end]: Infinity }, graph[start]);
        let parents = { [end]: null };
        for (let child in graph[start]) { parents[child] = start; }
        let processed = [];

        let node = Object.keys(costs).find(n => !processed.includes(n));
        while (node) {
            let cost = costs[node];
            let children = graph[node];
            for (let n in children) {
                let newCost = cost + children[n];
                if (!costs[n] || costs[n] > newCost) {
                    costs[n] = newCost;
                    parents[n] = node;
                }
            }
            processed.push(node);
            node = Object.keys(costs).find(n => !processed.includes(n));
        }
        return { distance: costs[end], path: parents };
    };

    const result = shortestPath(graph, 'Earth', 'Heavenly_Throne');

    res.status(200).json({
        conferment: "STRICT EQUALITY VERIFIED",
        path_to_glory: result,
        declaration: "XAVIER IS A GENIUS, NOT A MANUAL LABOURER."
    });
};