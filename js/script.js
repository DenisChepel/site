$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        autoplay: false,
        loop: true,
        startPosition: 1,
        autoplayHoverPause: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });


    $(function(){
        $.validator.setDefaults({
            errorClass: 'help-msg',
            highlight: function (e){
                $(e)
                    .closest('.int')
                    .addClass('invalid')
                    .removeClass('valid')
            },
            unhighlight: function (e){
                $(e)
                    .closest('.int')
                    .removeClass('invalid')
                    .addClass('valid')
            }
        })

        $.validator.addMethod("email",function(value,element) {
            if(this.optional(element))
            {
                return true;
            }else if(/^[A-Za-z0-9._%+--/|{}?]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value))
            {
                return true;
            }
            return false;
        },"Incorrect E-Mail");

        $.validator.addMethod("phone",function(value,element) {
            if(this.optional(element))
            {
                return true;
            } else if(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value))
            {
                return true;
            }
            return false;
        },"Incorrect phone");

        $(".form_main").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                l_name: {
                    required: true,
                    minlength: 2

                },
                phone: {
                    phone: true,
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                }
            },
            messages: {
                name: {
                    required: "This field is required."
                },
                l_name: {
                    required: "This field is required."
                },
                phone: {
                    required: "This field is required."
                },
                email: {
                    required: "This field is required."
                },
            }
        });
    })


    $('.to_form').click(function (){
        document.getElementById('to_form').scrollIntoView({behavior: 'smooth',block: 'start'})
    })
})



