promises.push(
  browser.newPage().then(async page => {
    await page.setViewport({
      width: 1280,
      height: 800
    });
    try {
      //Only create screenshot if page.goto has no error
      await page.goto('http://' + results[elem]);
      bufferPromise = await page
        .screenshot({ path: results[elem] + '.jpg' })
        .then(
          console.log(
            '🖖__I have kept my damn promise to screenshot__🖥__' + results[elem]
          )
        );
    } catch (err) {
      console.log(
        "❌__😭__Sorry Dawg there was error with the URL! I couldn't keep my damn promise to screenshot__🖥----> " +
          results[elem]
      );
    }
  })
);
