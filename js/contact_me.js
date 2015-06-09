$(function() {

	$("input,textarea").jqBootstrapValidation({
		preventSubmit: true,
	submitError: function($form, event, errors) {
		// additional error messages or events
	},
	submitSuccess: function($form, event) {
		// Prevent spam click and default submit behaviour
		$("#btnSubmit").attr("disabled", true);
		event.preventDefault();

		// get values from FORM
		var name = $("input#name").val();
		var email = $("input#email").val();
		var phone = $("input#phone").val();
		var message = $("textarea#message").val();

		window.open("mailto:notes@stuartresearch.org?subject=Contact%20Me&body=" + message + "%0A%0A" + name + "%0A" + email + "%0A" + phone);

		//clear all fields
		$('#contactForm').trigger("reset");
	},
	filter: function() {
		return $(this).is(":visible");
	},
	});

	$("a[data-toggle=\"tab\"]").click(function(e) {
		e.preventDefault();
		$(this).tab("show");
	});
});

// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
	$('#success').html('');
});
