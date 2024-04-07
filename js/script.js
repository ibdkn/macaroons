$( document ).ready(function() {
    let productInputName = $('#product_name');
    let orderInfo = $('.order-info');
    let orderStatus = $('.order-status');
    let loader = $('.loader');

    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open');
        $('body').css('overflow-y', 'hidden');
    }
    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
            $('body').css('overflow-y', 'scroll');
        }
    });

    $('#choose-macaroon').click(function() {
        $('.products')[0].scrollIntoView( {behavior: "smooth"});
    });

    $('.button__add-to-card').click((e) => {
        productInputName.val($(e.target).parents('.product-item').find('.product-item__title').text());
        $('.order')[0].scrollIntoView( {behavior: "smooth"});
    })

    $("#telephone").inputmask("+375 (99) 999-99-99");

    $('#create-order').click(function () {
        let productName = $('#product_name');
        let name = $('#name');
        let telephone = $('#telephone');
        let hasError = false;
        $('.error-input').hide();

        if(!productName.val()) {
            productName.next().show();
            hasError = true;
        }
        if(!name.val()) {
            name.next().show();
            hasError = true;
        }
        if(!telephone.val()) {
            telephone.next().show();
            hasError = true;
        }
        if(!hasError) {
            orderInfo.css('display', 'none');
            orderStatus.css('display', 'block');
            // loader.css('display', 'flex');
            // $.ajax({
            //     method: "POST",
            //     url: "http://testologia.site/checkout",
            //     data: { product_name: productName.val(), name: name.val(), telephone: telephone.val() }
            // })
            //     .done(function( msg ) {
            //         loader.hide();
            //         if(msg.success) {
            //             orderInfo.css('display', 'none');
            //             orderStatus.css('display', 'block');
            //         } else {
            //             alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!');
            //         }
            //         console.log(msg.success);
            //     });
        }
    })
})






