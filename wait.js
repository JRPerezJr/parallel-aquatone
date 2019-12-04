const childProcess = require('child_process');

const exec_options = {
  cwd: null,
  env: null,
  encoding: 'utf8',
  timeout: 0,
  maxBuffer: 200 * 1024,
  killSignal: 'SIGTERM'
};

//Aquatone Promises
aquatoneRun = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      childProcess.exec(
        'cat shit.txt |./aquatone -chrome-path .local-chromium/mac-686378/chrome-mac/Chromium.app/Contents/MacOS/Chromium  -out Results -debug',
        exec_options,
        (err, stdout, stderr) => {
          console.log('Running cat exec...');
          console.log(err);
          console.log(stdout);
          console.log(stderr);
        }
      );
      const error = false;

      if (!error) {
        resolve('First Aquatone run complete!');
      } else {
        reject('Your failed!');
      }
    }, 1000);
  });
};
aquatoneRun2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      childProcess.exec(
        'cat shit1.txt |./aquatone -chrome-path .local-chromium/mac-686378/chrome-mac/Chromium.app/Contents/MacOS/Chromium  -out Results1 -debug',
        exec_options,
        (err, stdout, stderr) => {
          console.log('Running cat exec...');
          console.log(err);
          console.log(stdout);
          console.log(stderr);
        }
      );
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Your failed again!');
      }
    }, 1000);
  });
};
aquatoneRun3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      childProcess.exec(
        'cat shit2.txt |./aquatone -chrome-path .local-chromium/mac-686378/chrome-mac/Chromium.app/Contents/MacOS/Chromium  -out Results2 -debug',
        exec_options,
        (err, stdout, stderr) => {
          console.log('Running cat exec...');
          console.log(err);
          console.log(stdout);
          console.log(stderr);
        }
      );
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Your failed 3 times!');
      }
    }, 1000);
  });
};

//Async /Await Aquatone

async function initAquatone() {
  await aquatoneRun();
  await aquatoneRun2();
  aquatoneRun3();
}
initAquatone();
