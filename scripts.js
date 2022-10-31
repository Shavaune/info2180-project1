/////////window.onload=function(){
    //const btn =document.getElementsByTagName("button")[0];
   // const email= document.getElementById("email");
    //var form = document.getElementsByClassName("form-group");
    
    
   // form.addEventListener("submit",(e) =>{
   /// let messages=document.getElementsByTagName("message");
    // if(email.value==null){
    // messages.push("Please enter a valid email address")
    // }
    // else{
    // messages.push("Thank you!!! Your email address ${name} has been added to our mailing list")
    // }
    
//e.preventDefault()
//})
   //  }
//////////

onload=function(){
    let email = document.querySelector('#email')
    let message = document.querySelector('.message')
    addEventListener('submit', (e) =>{
        e.preventDefault()
        if(!email.value == ''){
            message.innerHTML = `Thank you! your email address ${email.value} has been added to our mailing list`
            email.value = ''
        }else{
            message.innerHTML = 'Please enter a valid email address'
            email.value = ''
        }
    })
}