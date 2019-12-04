const childProcess = require('child_process');

const exec_options = {
  cwd: null,
  env: null,
  encoding: 'utf8',
  timeout: 0,
  maxBuffer: 200 * 1024,
  killSignal: 'SIGTERM'
};

//Run Aquatone back to back

const aquatoneRun = () => {
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
};

const aquatoneRun2 = () => {
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
};
const aquatoneRun3 = () => {
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
};

//Aquatone parallel promise
Promise.allSettled([aquatoneRun(), aquatoneRun2(), aquatoneRun3()])
  .then(messages => {
    console.log(messages);
  })
  .catch(messages => {
    console.log('Amass scan stopped with error message: ' + messages);
  });
