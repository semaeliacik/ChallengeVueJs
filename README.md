# ChallengeVueJs
BONUS SORU CEVAP :
const data = [
  { id: 1, name: 'user 1' },
  { id: 2 },
  { id: 3, name: 'user 3' },
  { id: 4 },
  {},
  { id: 6, name: 'user 6' },
];

function removeDataAtIndex2(data) {
  return data.filter((_, index) => index !== 2).map((item) => item.name).filter(Boolean);
}

console.log(removeDataAtIndex2(data)); // ['user 1', 'user 2', 'user 4', 'user 5', 'user 6']
