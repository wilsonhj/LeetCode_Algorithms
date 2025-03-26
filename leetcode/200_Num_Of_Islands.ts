function numIslands(grid: string[][]): number {
    if (!grid || !grid[0]) {
        return 0;
    }
    
    const rows: number = grid.length;
    const cols: number = grid[0].length;
    let islands: number = 0;
    
    function dfs(r: number, c: number): void {
        // Base cases: out of bounds or water
        if (r < 0 || r >= rows || 
            c < 0 || c >= cols || 
            grid[r][c] === '0') {
            return;
        }
        
        // Mark current cell as visited by changing it to '0'
        grid[r][c] = '0';
        
        // Explore all four directions
        dfs(r + 1, c);  // down
        dfs(r - 1, c);  // up
        dfs(r, c + 1);  // right
        dfs(r, c - 1);  // left
    }
    
    // Iterate through each cell in the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                islands++;
                dfs(r, c);
            }
        }
    }
    
    return islands;
} 