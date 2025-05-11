class Meeting {
    capacity = 40;      //შეხვედრების მაქსიმალური რაოდენობა, რომლის დაჯავშნაც შესაძლებელია.
    reservations = 40;  //მიმდინარე რეზერვაციები

    setCapacity(capacity){
        // ადგენს შეხვედრების მაქსიმალურ რაოდენობას.
        if(typeof capacity != 'number' || capacity < 0 || capacity > 20 ){
             return 'მაქსიმალური რიცხვის აჭარბებ';
        }else{
             this.capacity = capacity;
             return true;
        }
         
    }
    getReservations(){
        //აბრუნებს მიმდინარე დარეზერვებულ შეხვედრებს; 
        return this.reservations
    }
    getCapacity(){
        //აბრუნებს შეხვედრების მაქსიმალურ რაოდენობას
        return this.capacity;
        
    }

    reserveMeeting(data) {
        //ამოწმებს, თუ არის შეხვედრა ხელმისაწვდომი და თუ კი, დარეზერვებს მას
        if(this.reservations < this.capacity){
            this.reservations ++
            return 'შეხვედრა დარეზერვებულია'
        }else{
            return 'შეხვედრის ლიმიტი შესრულებულია';
        }
    }

    checkMeetingAvailability(){
         //ამოწმებს, არის თუ არა ფიზიკური შეხვედრის ადგილი ხელმისაწვდომი.
    }
}


const meeting = new Meeting();
console.log(meeting.setCapacity(31));
console.log(meeting.getCapacity());




 