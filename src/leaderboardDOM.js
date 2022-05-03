import getLeaderboard from "./firebase/leaderboard";

const leaderboardButton = (container) => {
    const button = document.createElement('button');
    button.innerHTML = 'Leaderboard';
    button.className = 'openLeaderboard';
    container.appendChild(button);

    button.onclick = () => {
        const leaderboard = getLeaderboard();
        console.log(leaderboard);
    }
}

export default leaderboardButton