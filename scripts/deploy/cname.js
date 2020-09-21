const { promises: fs } = require("fs");

const { domainName } = require("../config");

const main = async () => {
  try {
    await fs.writeFile("out/CNAME", `${domainName}/privacy-policy`);
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

main();
