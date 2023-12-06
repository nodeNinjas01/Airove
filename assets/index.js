function signUpPage(){
    const main_home = document.querySelector('.main-home');
    let sign_up = document.querySelector('.main-sign-up');
    sign_up.style.display = 'block';
    let home = document.querySelector('.green-text');
    let flight = document.querySelector('.main-flight');
    flight.style.display = 'none';
    main_home.style.display ='none';
    home.style.color = '#575757';  
}
function FlightPage(){
    const main_home = document.querySelector('.main-home');
    let flight = document.querySelector('.main-flight');
    let home = document.querySelector('.green-text');
    main_home.style.display ='none';
    let sign_up = document.querySelector('.main-sign-up');
    sign_up.style.display = 'none';
    flight.style.display = 'block';
    home.style.color = '#575757';  
}