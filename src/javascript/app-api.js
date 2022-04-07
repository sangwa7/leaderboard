export const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

export const GAME_ID = 'vhrpILbsQpYcj4tBd3H4';

export const getScores = async () => {
  const resp = await fetch(`${BASE_URL}/games/${GAME_ID}/scores`);
  return resp.json();
};

export const addScore = async (username, score) => {
  const resp = await fetch(`${BASE_URL}/games/${GAME_ID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: username,
      score,
    }),
  });
  return resp.json();
};