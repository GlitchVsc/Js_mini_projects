document.addEventListener('DOMContentLoaded', (e) => {
    
    var regexVat = /^[a-zA-Z0-9]{9}$/;
    var regex = /^[a-zA-Z0-9\s]+$/;
    const form = document.querySelector('form');

    function validationForEmpty(element){
        if (element.val() == '' ) {
            element.closest('.form-group').find('.error').css('display' , 'block');
        }else {
            element.closest('.form-group').find('.error').css('display' , 'none');    
        }
    }

    function validationForNumbersAndLetters(element){
        if(!regex.test(element.val())){
            element.closest('.form-group').find('.error').css('display','block');
        } else {
           element.closest('.form-group').find('.error').css('display','none');
        }
    }
   

    form.addEventListener('submit' , (e) => {
        e.preventDefault();

        const codeEl = $('#code');
        const nameEl = $('#name');
        const cityEl = $('#city');
        const addressEl = $('#address');
        const postalcodeEl = $('#postalcode');
        const phoneEl = $('#phone');
        const vatEl = $('#vat');
        const occupationEl = $('#occupation');

        var objValues = {
            code : codeEl.val(),
            name : nameEl.val(),
            city : cityEl.val(),
            address : addressEl.val(),
            postalcode : postalcodeEl.val(),
            phone : phoneEl.val(),
            vat : vatEl.val(),
            occupation : occupationEl.val()
        }

        validationForEmpty(codeEl);
        validationForEmpty(nameEl);
        validationForEmpty(cityEl);
        validationForEmpty(addressEl);
        validationForEmpty(phoneEl);
        validationForEmpty(vatEl);
        validationForEmpty(occupationEl);
        
        validationForNumbersAndLetters(postalcodeEl);
        validationForNumbersAndLetters(phoneEl);
        
        if (!regexVat.test(vatEl.val())){
            vatEl.closest('.form-group').find('.error').css('display','block');
        } else {
           vatEl.closest('.form-group').find('.error').css('display','none');
        }
        
        return;
    })
})