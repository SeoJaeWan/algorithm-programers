const solution = (s) => tupple(changeMatrix(getSets(s)));

const getSets = (s) => {
  const sets = s.match(/{[\d,]+}/g);

  console.log(sets.map((set) => set.match(/[\d]+,?/g).map((v) => parseInt(v))));

  return sets
    .map((set) => set.match(/[\d]+,?/g).map((v) => parseInt(v)))
    .sort((a, b) => a.length - b.length);
};

const changeMatrix = (sets) => sets.reduce((_, set) => _.concat(set), []);

const tupple = (arr) => [
  ...arr.reduce((set, value) => {
    // console.log(set, value, arr);

    return set.add(value);
  }, new Set()),
];

console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
// getSets("{{2},{2,1},{2,1,3},{2,1,3,4}}");
