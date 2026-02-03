// const run = (spd, lngth) => {
//   console.log("today i ran with", spd);
//   setTimeout(() => {
//     Callback();
//   }, 3000);
// };
// const lngth = () => {
//   console.log(" 5km");
// };
// run("dstnce", lngth);

const missionResert = (topics, done) => {
  console.log("Learning...", topics);

  setTimeout(() => {
    done();
  }, 3000);
};

const done = () => {
  console.log("Done in 2 days");
};
missionResert("JS", done);
