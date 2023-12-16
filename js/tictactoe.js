

(function() {
    let player = 'x';
    const area = document.querySelector('.experience__game-area');

    for (let i = 1; i <= 9; i++) {
        area.innerHTML += "<div class='cell' pos=" + i + "></div>";
    }

    const cell = document.querySelectorAll('.cell');
    const winIndex = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ];

    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('click', cellClick, false);
    }

    function cellClick() {
        const data = [];

        if (!this.innerHTML) {
            this.innerHTML = player;
        } else {
            alert('Cell is occupied');
            return;
        }

        for (let i in cell) {
            if (cell[i].innerHTML == player) {
                data.push(parseInt(cell[i].getAttribute('pos')));
            }
        }

        if (checkWin(data)) {
            setTimeout(() => {
                alert(player + ' Win');
                restart();
            }, 100);
        } else {
            if (checkDraw()) {
                setTimeout(() => {
                    alert('Draw');
                    restart();
                }, 100);
            } else {
                player = player == 'x' ? 'o' : 'x';
                setTimeout(computerMove, 500);
            }
        }
    }

    function computerMove() {
        const emptyCells = Array.from(cell).filter(c => c.innerHTML === '');
        const winningMove = findWinningMove(emptyCells);
        
        if (winningMove) {
            winningMove.innerHTML = 'o';
        } else {
            const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            if (randomCell) {
                randomCell.innerHTML = 'o';
            }
        }

        const computerData = Array.from(cell)
            .filter(c => c.innerHTML === 'o')
            .map(c => parseInt(c.getAttribute('pos')));

        if (checkWin(computerData)) {
            setTimeout(() => {
                alert('Computer Win');
                restart();
            }, 100);
        } else if (checkDraw()) {
            setTimeout(() => {
                alert('Draw');
                restart();
            }, 100);
        } else {
            player = 'x';
        }
    }

    function findWinningMove(emptyCells) {
        for (const cell of emptyCells) {
            cell.innerHTML = 'o';
            const computerData = Array.from(cell)
                .filter(c => c.innerHTML === 'o')
                .map(c => parseInt(c.getAttribute('pos')));
            cell.innerHTML = ''; 

            if (checkWin(computerData)) {
                return cell; 
            }
        }

        return null; 
    }

    function checkWin(data) {
        for (let i in winIndex) {
            let win = true;
            for (let j in winIndex[i]) {
                let id = winIndex[i][j];
                let ind = data.indexOf(id);
                if (ind == -1) {
                    win = false;
                }
            }

            if (win) return true;
        }
        return false;
    }

    function checkDraw() {
        return Array.from(cell).every(c => c.innerHTML !== '');
    }

    function restart() {
        for (let i = 0; i < cell.length; i++) {
            cell[i].innerHTML = '';
        }
    }
})();

