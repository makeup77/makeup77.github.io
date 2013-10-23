jQuery(function ($) {

	$('.btnClose').click(function () {
		parent.jQuery.fancybox.close();
	});

	$('.btnSubmit').click(function () {
		if ($.trim($('.tName').val()) == '' || $.trim($('.tPhone').val()) == '') {			
			alert('Не все обязательные поля заполнены!');
			return;
		}
		
		$.post('/app.php/ordercall', {
			name: $('.tName').val(),
			phone: $('.tPhone').val()
		}, 
		function (data) {
			parent.jQuery.fancybox.close();
		});
	});

});