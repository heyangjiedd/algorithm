function myPromise(callback) {
    this.resolves = [];
    this.rejects = [];
    this.states = {
        PENDING: 'PENDING',
        RESOLVE: 'RESOLVE',
        REJECT: 'REJECT',
    }
    this.state = this.states.PENDING;
    this.then = (resolve, reject) => {
        if (this.states.PENDING === this.state) {
            this.resolves.push(resolve);
            this.rejects.push(reject);
        }
    }
    let resolve = (val) => {
        this.state = this.states.RESOLVE
        this.resolves.map(item => item(val));
    }
    let reject = (val) => {
        this.state = this.states.REJECT
        this.rejects.map(item => item(val));
    }
    setTimeout(() => {
        callback(resolve, reject);
    })
}

let a = new myPromise((resolve, reject) => {
    resolve(1);
});
a.then((b) => {
    console.log(b)
}, () => {

})