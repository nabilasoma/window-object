

const changeColor = ()  => {
    document.getElementById('bg').style.backgroundColor = "pink";
};

function changeColor2(){
    document.getElementById('bg').style.backgroundColor = "green";
};




function promptBox() {
    let myName = prompt('I want to enter my Name', 'Nabila');
    if(myName != null){
        document.getElementById('myPrompt').innerHTML = `I am ${myName}`;
    }
};


const closeMyWindow = () => {
    window.close();
}
