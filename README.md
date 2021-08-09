# email-client
UI for a simple email client

see [demo](https://crosshj.com/email-client/)

## how to run locally
1) `npm install`
2) `npm run watch` to continuously build client code
3) `npm run server` to serve static files and mocked API

## known issues
> these are all items I would see to outside time constraints

1) server is very basic and tied mainly to just one user
2) login is basically fake: any username or password will work
3) no UI for settings, including filters
4) no UI for contacts
5) no way to create a message from scratch, only reply
6) stars, reply, and delete messages are not connected to any real action
7) tests are non-existant
8) state handling is very basic, would probably use redux
9) little effort has been placed on optimizing (re-)renders and props being passed

