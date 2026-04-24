ALPHA VERSION! Proof of concept only.

`cook.js` will save your cookies to a local file.

Then use curl with the cookies and URL of a headless login.

THEN remove your cookie file (someone could use it to access Google as you)

```
npm i
$JAR=$(mktemp)
node cook.js > $JAR
curl -b $JAR -Lso /dev/null \
'https://issuer.enforce.dev/oauth?connection=google-oauth2&headless_code=xXXx_xXXXXx-xXXxx'
rm $JAR
```

To use in reality: 
- Copy/paste the first 3 lines.
- Start a login --headless session in a different terminal.
- Copy paste the URL _with quotes_.
- *DELETE* the $JAR!

Version 1 will be a fully self contained node program that will get the cookies to variables and pass them in memory to http requests.

Thus Removing the requirements to:
- remember to delete your cookie file
- remember to quote the URL