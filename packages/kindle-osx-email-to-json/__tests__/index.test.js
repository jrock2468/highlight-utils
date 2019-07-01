const toJSON = require("../");
const fs = require("mz/fs");
const path = require("path");

function readMail(filename = "shadow_rising") {
  return fs.readFile(path.resolve(__dirname, `../__mocks__/${filename}.txt`), {
    encoding: "utf8"
  });
}

describe("kindle-email-to-json", () => {
//   it("converts export with a note", () => {
//     return readMail()
//       .then(toJSON)
//       .then(data => {
//         expect(data).toMatchSnapshot();
//       });
//   });

  it("converts rocky's export from mac wih notes", () => {
    return readMail()
      .then(toJSON)
      .then(data => {
        expect(data).toMatchSnapshot();
        console.log(data);
      });
  });

});
