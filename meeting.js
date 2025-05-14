class Meeting {
    capacity = 0;       
    reservations = 0;   
    onlineReservations = 0;

    setCapacity(capacity){
        if (typeof capacity !== 'number' || capacity < 0) {
            return 'You are exceeding the maximum number';
        } else {
            this.capacity = capacity;
            return true;
        }
    }

    getReservations(){
        return {
            physical: this.reservations,
            online: this.onlineReservations
        };
    }

    getCapacity(){
        return this.capacity;
    }

    reserveMeeting(data) {
        const type = typeof data.getType === 'function' ? data.getType() : data.type;
        if (type === 'physical') {
            if (this.reservations < this.capacity) {
                this.reservations++;
                return 'Physical meeting reserved.';
            } else {
                return 'Meeting limit reached';
            }
        } else if (type === 'online') {
            this.onlineReservations++;
            return 'Online meeting booked';
        } else {
            return 'Invalid meeting type';
        }
    }

    checkMeetingAvailability(){
         return this.reservations < this.capacity;
    }
}
class Reservation {
    constructor(firstName, lastName, type){
        if (type !== 'physical' && type !== 'online') {
            return ("type must be 'physical' or 'online");
        }
        this.firstName = firstName;
        this.lastName = lastName;
        this.type = type;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }

    getType() {
        return this.type;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setType(type) {
        this.type = type;
    }
}

try {
  const meeting = new Meeting();
  meeting.setCapacity(15);

  const reservation = new Reservation('Anna', 'Smith', 'physical');
  meeting.reserveMeeting(reservation);  


  const onlineReservation = new Reservation('Anna', 'Smith', 'online');
  meeting.reserveMeeting(onlineReservation);  


  const userReservation = new Reservation('John', 'Doe', 'physical');
  meeting.reserveMeeting(userReservation); 

  console.log('Current Reservations:', meeting.getReservations());
  console.log('Meeting Capacity:', meeting.getCapacity());
  console.log('Availability:', meeting.checkMeetingAvailability());
}catch (err) {
    console.error(err);
}









 