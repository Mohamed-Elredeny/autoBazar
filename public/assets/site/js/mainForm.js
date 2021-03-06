(function($){var form=$("#signup-form");
form.validate({
    errorPlacement:function errorPlacement(error,element){
        element.before(error);
    },rules:{
        model:{required:true,},
        sell_type:{required:true,},
        Description:{required:true,},
        image:{required:true,},
        last_name:{required:true,},
        email:{required:true,email:true}},
        messages:{model:{required:"Please enter your model"},
        
        sell_type:{required:"Please select your sell type"},
        Description:{required:"Please enter your Description",
        image:{required:"Please enter your image"},
        email:"Please enter a valid email address!"}
    },onfocusout:function(element){$(element).valid();
    },highlight:function(element,errorClass,validClass){
        $(element).parent().parent().find('.form-group').addClass('form-error');
        $(element).removeClass('valid');$(element).addClass('error');
    },unhighlight:function(element,errorClass,validClass){
        $(element).parent().parent().find('.form-group').removeClass('form-error');
        $(element).removeClass('error');$(element).addClass('valid');
    }});
        form.steps({
            headerTag:"h3",
            bodyTag:"fieldset",
            transitionEffect:"fade",
            labels:{previous:'Previous',next:'Next',finish:'Finish',current:''},
            titleTemplate:'<h3 class="title pt-4 pb-4 text-dark">#title#</h3>',
            onInit:function(event,currentIndex){if(currentIndex===0){
                form.find('.actions').addClass('test');}},onStepChanging:function(event,currentIndex,newIndex)
{form.validate().settings.ignore=":disabled,:hidden";return form.valid();},onFinishing:function(event,currentIndex)
{form.validate().settings.ignore=":disabled";return form.valid();},onFinished:function(event,currentIndex)
{alert('Sumited');},onStepChanged:function(event,currentIndex,priorIndex)
{}});jQuery.extend(jQuery.validator.messages,{required:"",remote:"",email:"",url:"",date:"",dateISO:"",number:"",digits:"",creditcard:"",equalTo:""});
})(jQuery);
function readURL(input){if(input.files&&input.files[0]){
    var reader=new FileReader();reader.onload=function(e){$('.your_picture_image').attr('src',e.target.result);};
    reader.readAsDataURL(input.files[0]);}}