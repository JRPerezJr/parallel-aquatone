//For expressions
const initAquatone = async aquatoneRun => {
  const promise = new Promise((resolve, reject) => {
    aquatoneRun(() => {
      console.log('Complete');
      resolve('Done');
    });
    return promise;
  });
};

//For declarations
//Async will wrap the code into a promise
async function trackMyAss() {
  //Without await
  // getMyAss()
  // .then(find => {
  //   me = find;
  // })
  // .catch(err => {
  //       console.log('Failed');
  //     })
  //With Await
  const find = await trackMyAss();
  console.log(find);
}
