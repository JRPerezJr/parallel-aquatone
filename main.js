const childProcess = require('child_process');
const arrayToTxtFile = require('array-to-txt-file');

const exec_options = {
  cwd: null,
  env: null,
  encoding: 'utf8',
  timeout: 0,
  maxBuffer: 200 * 1024,
  killSignal: 'SIGTERM'
};

const spawn_options = {
  cwd: null,
  env: null,
  detached: false
};

let spyseResults = [
  'demo.ubnt.com',
  'video.ubnt.com',
  'eu.ubnt.com',
  'dev-www.ubnt.com',
  'unifi-shd.ubnt.com',
  'rma.ubnt.com',
  'careers.ubnt.com',
  'experts.ubnt.com',
  'unifi-hd.ubnt.com',
  'downloads.ubnt.com',
  'nightly.ubnt.com',
  'download.ubnt.com',
  'inwall.ubnt.com',
  'unifi-sdn.ubnt.com',
  'airlink.ubnt.com',
  'switch.ubnt.com',
  'security.ubnt.com',
  'unms.ubnt.com',
  'fiber.ubnt.com',
  'ucrm.ubnt.com',
  'wiki.ubnt.com',
  'exams.ubnt.com',
  'community.ubnt.com',
  'design.ubnt.com',
  'redirect.ubnt.com',
  'conference.ubnt.com',
  'support.ubnt.com',
  'status.ubnt.com',
  'airmax.ubnt.com',
  'ping.ubnt.com',
  'dl.ubnt.com',
  'prd-www-cdn.ubnt.com',
  'docs.ubnt.com',
  'calendar.ubnt.com',
  'mail.ubnt.com',
  'forum.ubnt.com',
  'community-stage.ubnt.com',
  'community-archive.ubnt.com',
  'repo.ubnt.com',
  'dl-origin.ubnt.com',
  'stg-community.ubnt.com',
  'help-center-assets.ubnt.com',
  'link.ubnt.com',
  'openvpn.svc.ubnt.com',
  'web1.ubnt.com',
  'web2.ubnt.com',
  'us.corp.ubnt.com',
  'sc.ext.ubnt.com',
  'solar.ubnt.com',
  'sunmax.ubnt.com',
  'device-prod.ec2-us-west-1.us1.svc.ubnt.com',
  'device-airos-prod.ec2-us-west-1.us1.svc.ubnt.com',
  'fw-update.ubnt.com',
  'unifi-go.ubnt.com',
  'p-goo5uqkigjgczchxzpqubv6sqq-prd.go.ubnt.com',
  'p-chalk-parable-arfs4ttfxfehtf32roown7igzm.go.ubnt.com',
  'community-experiment.ubnt.com',
  'community-experiment-staging.ubnt.com',
  'elite-device.svc.ubnt.com',
  'www.ubnt.com',
  'suspendportal-proxy-stage.ec2-us-east-1.us1.svc-dev.ubnt.com',
  'translate.ubnt.com',
  'elite-billing.ubnt.com',
  'tw.corp.ubnt.com',
  'help.ubnt.com',
  'dev.ubnt.com',
  'ucrm-demo.ubnt.com',
  'survey.ubnt.com',
  'dev-community.ubnt.com',
  'graphite.ubnt.com',
  'store.ubnt.com',
  'rollout.ubnt.com',
  'unifi.ubnt.com',
  'moodle.ubnt.com',
  'lt.corp.ubnt.com',
  'demo-na.ubnt.com',
  'documentation.ubnt.com',
  'scores.ubnt.com',
  'tr.ubnt.com',
  'sunmax-nginx-prod.ec2-us-west-1.us1.svc.ubnt.com',
  'monitor.ubnt.com',
  'pbx.ubnt.com',
  'blog.ubnt.com',
  'api.ubnt.com',
  'voip.ubnt.com',
  'demo-eu.ubnt.com',
  'account.ubnt.com',
  'training.ubnt.com',
  'demo.ubnt.com',
  'video.ubnt.com',
  'eu.ubnt.com',
  'dev-www.ubnt.com',
  'unifi-shd.ubnt.com',
  'rma.ubnt.com',
  'careers.ubnt.com',
  'experts.ubnt.com',
  'unifi-hd.ubnt.com',
  'downloads.ubnt.com',
  'download.ubnt.com',
  'inwall.ubnt.com',
  'unifi-sdn.ubnt.com',
  'airlink.ubnt.com',
  'switch.ubnt.com',
  'security.ubnt.com',
  'unms.ubnt.com',
  'fiber.ubnt.com',
  'ucrm.ubnt.com',
  'wiki.ubnt.com',
  'exams.ubnt.com',
  'community.ubnt.com',
  'design.ubnt.com',
  'redirect.ubnt.com',
  'conference.ubnt.com',
  'support.ubnt.com',
  'status.ubnt.com',
  'airmax.ubnt.com',
  'docs.ubnt.com',
  'calendar.ubnt.com',
  'mail.ubnt.com',
  'repo.ubnt.com',
  'dl-origin.ubnt.com',
  'forum.ubnt.com',
  'community-archive.ubnt.com',
  'stg-community.ubnt.com',
  'help-center-assets.ubnt.com',
  'p-goo5uqkigjgczchxzpqubv6sqq-prd.go.ubnt.com',
  'p-chalk-parable-arfs4ttfxfehtf32roown7igzm.go.ubnt.com',
  'community-experiment.ubnt.com',
  'community-experiment-staging.ubnt.com',
  'us.corp.ubnt.com',
  'sc.ext.ubnt.com',
  'ping.ubnt.com',
  'dl.ubnt.com',
  'solar.ubnt.com',
  'sunmax.ubnt.com',
  'unifi.ubnt.com',
  'moodle.ubnt.com',
  'link.ubnt.com',
  'nightly.ubnt.com',
  'openvpn.svc.ubnt.com',
  'rollout.ubnt.com',
  'store.ubnt.com',
  'community-stage.ubnt.com',
  'graphite.ubnt.com',
  'dev-community.ubnt.com',
  'prd-www-cdn.ubnt.com',
  'lt.corp.ubnt.com',
  'ucrm-demo.ubnt.com',
  'dev.ubnt.com',
  'www.ubnt.com',
  'help.ubnt.com',
  'fw-update.ubnt.com',
  'demo-na.ubnt.com',
  'monitor.ubnt.com',
  'translate.ubnt.com',
  'account.ubnt.com',
  'survey.ubnt.com',
  'suspendportal-proxy-stage.ec2-us-east-1.us1.svc-dev.ubnt.com',
  'tw.corp.ubnt.com',
  'pbx.ubnt.com',
  'elite-device.svc.ubnt.com',
  'elite-billing.ubnt.com',
  'documentation.ubnt.com',
  'device-prod.ec2-us-west-1.us1.svc.ubnt.com',
  'demo-eu.ubnt.com',
  'scores.ubnt.com',
  'voip.ubnt.com',
  'api.ubnt.com',
  'training.ubnt.com',
  'blog.ubnt.com',
  'web1.ubnt.com',
  'device-airos-prod.ec2-us-west-1.us1.svc.ubnt.com',
  'sunmax-nginx-prod.ec2-us-west-1.us1.svc.ubnt.com',
  'tr.ubnt.com',
  'web2.ubnt.com',
  'unifi-go.ubnt.com'
];

const launchNukeOption = spyseResults => {
  let parallel = 0;
  const results = spyseResults;
  console.log('This will be my Domain Results Length-->', results.length);
  if (results.length <= 1) {
    parallel = 1;
    console.log('Parallel 1-->', parallel);
  } else {
    parallel = 36;
    console.log('Parallel 36-->', parallel);
  }

  const nuclearAquatone = async (results, parallel) => {
    console.log('Going Nuclear!');
    const parallelBatches = Math.ceil(results.length / parallel);
    console.log(
      'New Nuclear Aquatone task of ' +
        results.length +
        ' Domain Results and ' +
        parallel +
        ' of them will be in parallel.'
    );
    console.log(
      'This will result in ' + parallelBatches + ' parallel batches.'
    );

    //Spilt up the array of results

    let k = 0; //the counter of batches
    for (let i = 0; i < results.length; i += parallel) {
      k++;
      console.log('\n Batch ' + k + ' of ' + parallelBatches);

      //Run Aquatone
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

      const promises = [];
      //console.log(results);
      for (let j = 0; j < parallel; j++) {
        let elem = i + j;

        // only proceed to Push if the element is present in the results Array
        if (results[elem] != undefined) {
          //Promise to run Aquatone

          //Push the elements into the promises Array
          //console.log('I promise to run' + results[elem] + ' into Aquatone');
          console.log('I-->', i);
          console.log('J-->', j);
          console.log('Results I-->', results[i]);
          console.log('Results J-->', results[j]);
          //TODO need results change into txt file to pipe into Aquatone
          promises.push(
            console.log('Pushed Result -->', results[elem]),
            arrayToTxtFile([results[elem]], './shit.txt', err => {
              if (err) {
                console.error(err);
                return;
              }
              //console.log('Successfully wrote to txt file');
              //aquatoneRun();
            })
          );
        }
      }

      //Await promise all and close browser
      await Promise.all(promises).then(
        console.log("\nI finished this batch. I'm ready for the next batch")
      );
    }
  };

  nuclearAquatone(results, parallel);
};
launchNukeOption(spyseResults);
