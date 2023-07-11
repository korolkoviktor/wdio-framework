# wdio-framework
Test Google Cloud Calculator
- ([Smoke Test](/tests/smoke.test.js)) - find calculator, price calculation, send result on a temporary email.
- ([Other Test](/tests/other.test.js)) - find calculator, price calculation, check a result

Framework work in Jenkins also. \
Batch command for running parameterized job: \
npm run wdio:%browser% -- --spec %testfile%