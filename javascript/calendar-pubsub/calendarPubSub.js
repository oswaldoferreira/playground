const Calendar = () => {
  this.store = {
    appointments: [],
    addAppointmentListeners: []
  }

  return {
    appointments: this.store.appointments,
    cleanAppointments: () => {
      this.store.appointments.splice(0, this.store.appointments.length);
    },
    addAppointment: () => {
      let newAppointment = Object.assign({}, {
        name: 'Random appointment',
        start_at: new Date(),
        end_at: new Date()
      });

      this.store.appointments.push(newAppointment);
      this.store.addAppointmentListeners.forEach((callback) => callback(newAppointment));

      return newAppointment;
    },
    onAddAppointment: (callback) => {
      this.store.addAppointmentListeners.push(callback);
    }
  }
}

module.exports = Calendar;
