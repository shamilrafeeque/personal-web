$(document).ready(function(){
    $("#formm").validate({
        rules:{
        name:{
            required:true,
            minlength:3,
            maxlength:18
            
      
        },
        email:{
            required:true,
            email:true

        },
        subject:{
            required:true,
            maxlength:30
        },
        message:{
            // minlength:25,
            maxlength:180
        }
    }

    })

})