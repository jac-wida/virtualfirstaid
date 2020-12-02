import { makeObservable, action, computed, observable, makeAutoObservable } from "mobx"

import database  from './storage';

export default class Cursor3D {
  coords = [];
  radius = 2;

  constructor(room) {
    makeObservable(this, {
      radius: observable,
      coords: observable.ref,

      setCoords: action,
      isSet: computed,
      erase: action,
      setRadius: action
    });

    this.room = room;


    this.initFirebase();
  }

  async initFirebase() {
    this.ref = database.ref('/cursors/' + this.room)
    this.ref.on('value', (v) => {
      try {
        this.setCoords(v.val());
      }
      catch {
        this.erase()
      }
    });
  }

  setRadius(newRadius) {
    this.radius = newRadius
  }

  setCoords(coords) {
    this.coords = Object.values(coords);
    this.ref.set(this.coords)
  }

  erase() {
    this.setCoords([0]);
    this.setRadius(2)
  }

  get isSet() {
    return this.coords.length == 3;
  }

}
