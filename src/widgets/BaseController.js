export default class BaseUIController {
  constructor({ data, timeOut, onClose }) {
    this.subscribers = [];
    this.data = data || {};
    this.timeOut = timeOut || null;
    this.onClose = onClose || (() => {});
    this.isVisible = false;
    this.subscribers = [];
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.broadcast = this.broadcast.bind(this);
    this.setData = this.setData.bind(this);
  }

  setData(data) {
    this.data = data;
  }

  subscribe(sub) {
    this.subscribers.push(sub);
  }

  unsubscribe(sub) {
    this.subscribers = this.subscribers.filter(s => s != sub);
  }

  broadcast() {
    this.subscribers.forEach(subscriber => {
      subscriber.call(null, {
        isVisible: this.isVisible,
        data: this.data
      });
    });
  }

  show() {
    if (!this.isVisible) {
      this.isVisible = true;
      if (this.timeOut > 0) {
        setTimeout(() => {
          this.hide();
        }, this.timeOut);
      }
      this.broadcast();
    }
  }

  hide() {
    this.data = {};
    this.timeOut = null;
    this.onClose = () => {};
    this.isVisible = false;
    this.broadcast();
  }
}
