class Publisher {
  constructor(){
    this.subscribers = [];
  }

  subscribe(callb){
    this.subscribers.push(callb);
  }

  publish(data) {
    this.subscribers.forEach(callb => callb(data))
  }
}

export default Publisher;