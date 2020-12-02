import { makeObservable, action, computed, observable, makeAutoObservable } from "mobx"

import database  from './storage';

export class Picture {
  constructor(content, coords) {
    makeAutoObservable(this);
    this.content = content;
    this.coords = coords;
    this.date = Date.now();
  }

  get key() {
    const c = this;
    return c.date;
  }

  get serialize() {
    return {...this};
  }

  static deserialize(content) {
    const result = new Picture(null, null);
    Object.assign(result, content)
    return result
  }
}

export default class PicturesContainer {
  pictures = []

  constructor(room) {
    makeAutoObservable(this);

    this.room = room;
    this.ref = database.ref('/pictures/' + this.room)
    this.ref.on('value', v => {
      try {
        this.deserialize(v.val());
      } catch { }
    })
  }

  add(picture) {
    this.pictures.push(picture);
    this.save()
  }

  get serialize() {
    const result = {}

    for (const v of this.pictures) {
      const k = v.key
      result[k] = v.serialize
    }

    return result;
  }

  save() {
    const content = this.serialize
    this.ref.set(content);
  }


  deserialize(content) {
    this.pictures.splice(0, this.pictures.length);

    for (const v of Object.values(content)) {
      this.pictures.push(Picture.deserialize(v));
    }
  }

}
