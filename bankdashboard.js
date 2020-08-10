/* model */

var uiModel = (()=>{
     
    var Deposit = document.getElementById('deposit') 
    var Balance = document.getElementById('balance')  
    var CurDeposit = document.getElementById('curDeposit')  
    var CurWithdraw = document.getElementById('curWithdraw') 
    var Submit =  document.getElementById('submit') 
    var Dropdown =  document.getElementById('dropdown') 
  
    return{
        bankData: {
            deposit : Deposit,
            balance : Balance,
            curDeposit : CurDeposit,
            submit :Submit,
            dropdown : Dropdown,  
        }
    }

})()


var mydeposit=0
   
var controller = function (uiModel) {
     document.getElementById('submit').addEventListener('click',function (){
        
        if (uiModel.bankData.dropdown.value=="1") {
            if (Number(uiModel.bankData.deposit.value)>0) {
                
                mydeposit= mydeposit + Number(uiModel.bankData.deposit.value)
              //  console.log(mydeposit)
                alertBootstrap("Money sucessfully deposited")
            } else {
                alertBootstrap("Enter a valid money!")
            }
            
        } else {
            
            if (uiModel.bankData.deposit.value<mydeposit) {
                mydeposit = mydeposit - Number(uiModel.bankData.deposit.value)
                console.log(mydeposit)
                alertBootstrap("Money sucessfully withdrawn")
            } else {
                alertBootstrap("No balance to withdraw")
    
            }
            
        }
        
        view(uiModel,mydeposit)
    })
    
}

controller(uiModel)

var view=(uiModel,result)=>{
    
    if (uiModel.bankData.dropdown.value=="1") {

        uiModel.bankData.curDeposit.innerHTML = (uiModel.bankData.deposit.value)
    }else{
        
       document.getElementById('curWithdraw').innerHTML = (uiModel.bankData.deposit.value+"₹")
    }
    document.getElementById('balance').innerHTML = result;
  //  $("#balance").text(`${result} ₹`)
    var date= new Date()
    var finaldate = date.getDate()+"/ " + date.getMonth() +"/ "+date.getFullYear()
    console.log(finaldate)
   /*  var markUp = `<tr><td>${$("#dropdown option:selected").innerHTML}
    <td> ${result +"₹" }</td><td>${finaldate}</td></tr>`
    $("table tbody").append(markUp) */

    var markup = document.createElement('li')
    markup.innerHTML = result + " : " + finaldate
    document.getElementById('mini').appendChild(markup)
}


/* Logout */

document.getElementById('btnGroupDrop').addEventListener('click',()=>{
    alert("Do you want to exit .")
    window.location.replace("signin.html")
})

/* bootstraptalert */

function alertBootstrap(message) {
    console.log('itw working')
    document.getElementById('alert_placeholder').innerHTML = (`<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>Hey User!</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>`)
 }

