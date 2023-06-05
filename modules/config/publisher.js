class Publisher {
  constructor(){
    this.subscribers = [];
  }

  subscribe(listener){
    this.subscribers.push(listener);
  }

  publish(data) {
    this.subscribers.forEach(listener => listener(data))
  }
}

export default Publisher;