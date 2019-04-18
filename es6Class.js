class a {
    constructor(props) {

    }
    handler(){
        this.a()
    }
    a(){
        console.log(this)
    }
}
class b {
    constructor(props) {

    }

}
new a().handler()
