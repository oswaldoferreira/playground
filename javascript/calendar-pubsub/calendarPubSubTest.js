const Calendar = require('./calendarPubSub');
let sinon = require('sinon');

describe("calendar", function() {
  beforeEach(function () {
    this.calendar = Calendar();
  });

  describe("addAppointment", function() {
    it("adds appointments", function() {
      this.calendar.addAppointment();
      this.calendar.addAppointment();

      expect(this.calendar.appointments.length).toEqual(2);
    });
  });

  describe("cleanAppointments", function() {
    it("clean appointments list", function() {
      this.calendar.addAppointment();
      this.calendar.addAppointment();
      this.calendar.addAppointment();

      this.calendar.cleanAppointments();

      expect(this.calendar.appointments.length).toEqual(0);
    });
  });

  describe("onAddAppointment callback", function() {
    it("calls callback passing new appointment for each listeners", function() {
      var firstCallback = sinon.spy();
      var secondCallback = sinon.spy();

      this.calendar.onAddAppointment(firstCallback);
      this.calendar.onAddAppointment(secondCallback);

      this.calendar.addAppointment();
      this.calendar.addAppointment();

      sinon.assert.calledTwice(firstCallback);
      sinon.assert.calledTwice(secondCallback);
    });
  });
});
