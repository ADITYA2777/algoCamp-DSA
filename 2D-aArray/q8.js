let mp = {
     'A':'x',
     'B':'0',
 }
function winCheck(grid,player) {
  //check row
  //row o
  if (
    grid[0][0] == mp[player] &&
    grid[0][1] == mp[player] &&
    grid[0][2] == mp[player]
  ) {
    return true; //current player wins
  }

  //row 1
  if (
    grid[1][0] == mp[player] &&
    grid[1][1] == mp[player] &&
    grid[1][2] == mp[player]
  ) {
    return true; //current player wins
  }
  //row 2
  if (
    grid[2][0] == mp[player] &&
    grid[2][1] == mp[player] &&
    grid[2][2] == mp[player]
  ) {
    return true; //current player wins
  }

    //check col
    // col 0
     if (
       grid[0][0] == mp[player] &&
       grid[1][0] == mp[player] &&
       grid[2][0] == mp[player]
     ) {
       return true; //current player wins
    }
    //col 1
     if (
       grid[0][1] == mp[player] &&
       grid[1][1] == mp[player] &&
       grid[2][1] == mp[player]
     ) {
       return true; //current player wins
    }
    // col 2
     if (
       grid[0][2] == mp[player] &&
       grid[1][2] == mp[player] &&
       grid[2][2] == mp[player]
     ) {
       return true; //current player wins
    }
    //dal 
    // dal 0
     if (
       grid[0][0] == mp[player] &&
       grid[1][1] == mp[player] &&
       grid[2][2] == mp[player]
     ) {
       return true; //current player wins
    }
    // dal 1
     if (
       grid[2][0] == mp[player] &&
       grid[1][1] == mp[player] &&
       grid[0][2] == mp[player]
     ) {
       return true; //current player wins
    }
    return false;// current player didnot win
}
let tictactoe = function (moves) {
    let turn = 0;// 0-> A ,X-> B
    let grid = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
    // let state = "pending";
    let count = 0;
    for (let i = 0; i < moves.length;i++){
        let currMove = moves[i]
        let x = currMove[0];
        let y = currMove[1];
        if (turn == 0 && grid [x][y]== ' ') {
            grid[x][y] = 'X';
        } else if
             (turn == 1 && grid [x][y]== ' ') {
            grid[x][y] = '0';
        }
        count++;
        let doesplayer = winCheck(grid, player);
        if (doesplayer) {
            return player;
        }
        if (count == 9) {
            return "Draw"
        }
        turn =(turn+1)%2
    }
    return "Pending";
};
