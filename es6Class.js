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
    handler = ()=>{
        return this
    }
    b = function(){
        console.log(2342)
    }
    a(){
        console.log(this.handler())
    }
}
console.log(new b().b())
