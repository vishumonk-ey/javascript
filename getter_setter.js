class User{
    constructor(username,email){
        this.username=username
        this.email=email
    }

    get username(){
        return this._username.toUpperCase()
    }
    //by default they arent defined and the getting and setting of prop is done simply without any extra logic
    // and both of them should be present together
    set username(val){
        this._username=val
    }

    get email(){
        return `${this._email}@fb`
    }
    set email(val){
        this._email=val
    }
}
// when i am setting through setter then set aur constructor dono hi value set krne ki koshish kr rhe hain which causing stack overflow..
// isliye maine alg variable leliya and obj me uss var se hi store horha hai
const vishal= new User("vishal","v@gmail.com")
// console.log(vishal.username);
// console.log(vishal["email"]);

// old syntax

function user(username,email){
    Object.defineProperty(this,"username",{
        get: function(){
            return `username cant be disclosed but is succesfully saved ${this._username}`
        },
        set: function(val){
            this._username=val
        }
   
    })
    // isme phle getter and setter define krna padta
    this.username=username
    this.email=email
}
const vishu= new user("vishuu","v@gmail.com")
console.log(vishu.username);
