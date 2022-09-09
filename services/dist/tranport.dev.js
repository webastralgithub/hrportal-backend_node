"use strict";

var nodemailer = require('nodemailer');

require('dotenv').config();

exports.sendApplication = function _callee(to, subject, message) {
  var transporter, mailOptions;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: process.env.SMPT_USER,
              pass: process.env.SMPT_PASS
            }
          }));

        case 2:
          transporter = _context.sent;
          // console.log(transporter);
          mailOptions = {
            from: "developer1607@gmail.com",
            to: to,
            subject: subject,
            html: message
          };
          _context.next = 6;
          return regeneratorRuntime.awrap(transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              console.log(err.message, "==========>");
            } else {
              console.log("success");
            }
          }));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};