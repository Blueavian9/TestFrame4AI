const fs = require("fs");

/**
 * Logger class for logging messages and managing a help array.
 */
class Logger {
  /**
   * Constructor for the Logger class.
   * Initializes an empty help array.
   */
  constructor() {
    this.help = [];
  }

  /**
   * Method to log messages to the terminal.
   * @param {string} message - The message to be logged.
   */
  log(message) {
    console.log(message);
  }

  /**
   * Method to add a message to the help array.
   * If the message is an object, it is stringified before adding.
   * @param {string|object} message - The message to be added to the help array.
   */
  add2Help(message) {
    if (typeof message == "object") {
      this.help.push(JSON.stringify(message));
    } else {
      this.help.push(message);
    }
  }

  /**
   * Method to clear the help array.
   */
  clearHelp() {
    this.help = [];
  }

  searchHelp(name) {
    console.log("Name", name);
    console.log("DonaldTrump", this.help[2]);
    return this.help.filter((item) => item.name === name);
  }

  /**
   * Method to log the help array to a file with a timestamped filename.
   */
  log2file() {
    const date = new Date();
    const timestamp = date.toISOString().replace(/[:.]/g, "-");
    const filename = `${timestamp}-log.txt`;
    const fileContent = this.help.join("\n");

    fs.writeFileSync(filename, fileContent, "utf8", (err) => {
      if (err) throw err;
      console.log(`Log written to ${filename}`);
    });
  }
}

// Example Usage:
// const logger = new Logger();
// logger.log("This is a log message");
// logger.add2Help("Help message 1");
// logger.add2Help("Help message 2");
// logger.log2file();
// logger.clearHelp();

module.exports = Logger;
