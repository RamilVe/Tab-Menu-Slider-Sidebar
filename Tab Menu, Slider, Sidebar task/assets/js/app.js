let arr = [23,56,47,2,34,19]
function myFunction(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let swap = arr[i]
                arr[i] = arr[j]
                arr[j] = swap
            }
        }
    }
    console.log(arr);
}

myFunction(arr)

let array = ['rashad','mammad', 'ramil', 'agshin','amin','khumar']
let new_array = []
function Contains(str,arr){
    for(let element of arr){
        if(element.includes(str))
        new_array.push(element)
    }
    return(new_array); 
}

console.log(Contains('ma',array)); 

let acc = document.getElementsByClassName('accordion');

for(let i = 0; i < acc.length; i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = 'none';
        }
        else{
            panel.style.display = 'block'
        }
    })
}