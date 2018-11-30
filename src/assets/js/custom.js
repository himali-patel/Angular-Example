jQuery('.submitresume-btn').on('click',function(){
    alert();
    var position = jQuery(this).attr("data");
    var position = jQuery('<textarea />').html(position).text();
    jQuery('#position_applied').val(position);
    jQuery('#position_applied').attr("readonly", "readonly");
});
jQuery( document ).ready(function($){
if(jQuery('.benefits-section .benefits-box').length > 0){
    jQuery('.benefits-section .benefits-box').each( function() { jQuery(this).hoverdir(); } );
}
});