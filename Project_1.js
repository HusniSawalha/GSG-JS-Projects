class Hotel {
    #maxF;
    #minF;
    constructor(address,numberOfRooms,minFloor,maxFloor,rooms){
        
        this.a = address;
        this.nor = numberOfRooms;
        this.#minF = minFloor;
        this.#maxF = maxFloor;
        this.rooms = rooms;
    }

    printAdvertisment(){
        console.log("Hello, we are located in " + this.a + " with " + this.nor + " rooms and " + this.#maxF + " floors for your sevice");
    };

    listBookedRooms(){
        for (let r = 0; r < this.rooms.length; r++) {
            if (this.rooms[r].isBooked()){
                console.log(this.rooms[r]);
            }
        }

    };

}

class Room {
    #isBooked;
    constructor(floorNum,roomNum,price,isBooked){
            this.floorNum = floorNum;
            this.roomNum = roomNum;
            this.price = price;
            this.#isBooked = isBooked;
    }

    printRoom(){
        console.log("this is the room "+this.roomNum+" located in floor number " + this.floorNum + ". it has a price tag of " + this.price + ". Booked status: " + this.#isBooked)
    };

    book(){
        this.#isBooked = true;
    };

    isBooked(){
        return this.#isBooked;
    };
}

class SleepingRoom extends Room {
    constructor(personCapacity,floorNum,roomNum,price,isBooked){
        super(floorNum,roomNum,price,isBooked);
        this.personCapacity = personCapacity;
    }
}

class RoomWithView extends Room {
    constructor(view,numberOfBeds,floorNum,roomNum,price,isBooked){
        super(floorNum,roomNum,price,isBooked);
        this.view = view;
        this.numberOfBeds = numberOfBeds;
    }
}

const rooms1 = [new Room(5,20,500,false),new SleepingRoom(3,5,20,500,false),new Room(5,20,500,false), new RoomWithView("sea",4,10,999,500,false)];
const rooms2 = [new Room(5,20,500,false)];
const sleepingRoom1 = new SleepingRoom(3,5,20,500,"true");
const hotel1 = new Hotel("Nablus",50,1,7,rooms1);


// HOTEL AND IT'S METHODS //

// console.log(hotel1);
// hotel1.printAdvertisment();
// hotel1.listBookedRooms();

// ROOM AND IT'S METHODS //

// rooms1[3].printRoom();
// rooms2[0].printRoom();
// console.log(rooms1[0].isBooked());
// rooms1[0].book();
// console.log(rooms1[0].isBooked());