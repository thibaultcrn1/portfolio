$(document).ready(function() {
    // Open Modal
    $('#open_modal').click(function() {
        $('#modal_to_open').css(
            {
                'display': 'block'
            }
        );
    });

    // Close Modal
    $('#close_modal').click(function() {
        $('#modal_to_open').css(
            {
                'display': 'none'
            }
        );
    });
});