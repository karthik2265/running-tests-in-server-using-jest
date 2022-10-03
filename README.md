# running-tests-in-server-using-jest

The idea is when a user clicks run tests, we send the html, css and js to the server and we can use jest to run the tests and send the results of tests as json data.
We need to send the styles along with html (internal styles using style tag) and js seperately.

run the following command to see the json data of test results we can send back to client.
```js
npm run test dummy.test -- --json output.json
```
