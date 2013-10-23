
jQuery(function ($) {

	// init
	$('.rTime').removeAttr('checked');
	$('.tDate').val('');

	$('.btnOrder').fancybox({
		type: 'iframe',
		href: 'form.htm',
		autoSize: false,
		height: 279,
		width: 318,
		padding: 1,
		closeBtn: false, // use parent.jQuery.fancybox.close()
		scrolling: 'no',
		openEffect: 'none',
		closeEffect: 'none',
		helpers : {
			overlay : {
				css: {
			//'background' : 'rgba(0, 0, 0, 0.4)',
			//'overflow': 'hidden'
			}
			}
		}
	/*
		openEffect: 'none',
		closeEffect: 'none',
		*/
	});

	$('.tDate').datepicker({
		showOn: 'button',
		buttonImage: 'img/calendar.gif',
		buttonImageOnly: true
	});
	//$('#blockDate button.ui-datepicker-trigger').addClass('xr_ap');

	$('.rTime').change(function () {
		var idx = $(this).attr('data-index');
		var text = $.trim($('.rTime' + idx).text());
		$('.tDate').datepicker('option', 'dateFormat',
			$.datepicker.regional['ru'].dateFormat + ' ' + text);
	});

	$('.btnSubmit').click(function () {
		if ($.trim($('.tName').val()) == '' ||
			$.trim($('.tPhone').val()) == '' ||
			$.trim($('.tDate').val()) == '' ||
			$.trim($('.tPlace').val()) == '') {
			alert('Не все обязательные поля заполнены!');
			return;
		}

		$.post('/app.php/measurementcall', {
			name: $('.tName').val(),
			phone: $('.tPhone').val(),
			date: $('.tDate').val(),
			place: $('.tPlace').val()
		},
		function (data) {
			alert('Ваша заявка отправлена');
			$('.tName').val('');
			$('.tPhone').val('');
			$('.tDate').val('');
			$('.tPlace').val('');
			$('.rTime').prop('checked', false);
		});

	});

	$('.btnSubmitCalc').click(function () {
		if ($.trim($('.tNameCalc').val()) == '' || $.trim($('.tPhoneCalc').val()) == '') {
			alert('Не все обязательные поля заполнены!');
			return;
		}

		$.post('/app.php/calcorder', {
			name: $('.tNameCalc').val(),
			phone: $('.tPhoneCalc').val()
		},
		function (data) {
			alert('Ваша заявка отправлена');
			// reset form
			$('.tNameCalc').val('');
			$('.tPhoneCalc').val('');
		});

	});

});