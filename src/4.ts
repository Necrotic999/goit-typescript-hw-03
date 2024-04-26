class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  constructor(public door: boolean, public key: Key) {
    this.door = door;
    this.key = key;
  }
  comeIn(tenant: Person) {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }

  abstract openDoor(key: Key);
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (this.key === key) {
      this.door === true;
    }
  }
}

const key = new Key();

const house = new MyHouse(false, key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
