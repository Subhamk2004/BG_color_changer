let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');




//
buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target);
        if(event.target.id === "aqua")
            {
                document.querySelector('body').style.backgroundColor = "aquamarine";
                document.querySelector('#aqua').style.border = 'solid 1px black';
            }
        else if(event.target.id === "white")
            {
                document.querySelector('body').style.backgroundColor = "white";
                document.querySelector('#white').style.border = 'solid 1px black';
            }
        else if(event.target.id === "gray")
            {
                document.querySelector('body').style.backgroundColor = "gray";
                document.querySelector('#gray').style.border = 'solid 1px black';
            }
        else if(event.target.id === "red")
            {
                document.querySelector('body').style.backgroundColor = "red";
                document.querySelector('#red').style.border = 'solid 1px black';
            }
    });
});

//in the above forEach the loop just attackes the event listener
// to the buttons , so it executed only 4 times but now the event listener is attached to
// the buttons so they will work infinitely;
