
let users = [
    {
        "pl" : "admin",
        "lg" : "Admin1",
        "pw" : "1234",
        "name" : "Sugoma"
    },
    {
        "pl" : "user",
        "lg" : "User1",
        "pw" : "1234",
        "name" : "Stepan"
    }
    
];

const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;


let LoginPoleLogin = document.querySelector("#PoleDlyaLogina");
let LoginPolePassword = document.querySelector("#PoleDlyaPassword");
let LoginKnopkaEnter = document.querySelector("#EnterButton");
let LoginMessage = document.querySelector(".form__messageSignin");

LoginKnopkaEnter.addEventListener('click',login); 

function login(){
    document.location.href = "user.html";
    // let Login = LoginPoleLogin.value;
    // let Password = LoginPolePassword.value;

    // for(const user of users){
    //     if(user.lg == Login && user.pw == Password){
    //         document.location.href = "user.html";
    //         break;
    //     }
    //     else if(user.lg != Login / user.pw != Password){
    //         LoginMessage.innerHTML = "Неизвестный пользователь!";
    //     }
    // }
}

signUpBtn.addEventListener('click',function () {
    formBox.classList.add('active');
    body.classList.add('active');
});

signInBtn.addEventListener('click',function() {
    formBox.classList.remove('active');
    body.classList.remove('active');
});