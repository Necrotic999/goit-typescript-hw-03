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
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  public door = false;

  constructor(public key: Key) {}
  comeIn(tenant: Person): void {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }

  abstract openDoor(key: Key);
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (this.key.getSignature === key.getSignature) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
