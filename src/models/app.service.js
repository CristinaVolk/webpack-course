export default class AppService {
  constructor(title, img) {
    this.title = title;
    this.img = img;
    this.date = new Date();
  }

  log() {
    return JSON.stringify(
      {
        title: this.title,
        date: this.date.toJSON(),
        img: this.img,
      },
      null,
      2,
    );
  }
}
