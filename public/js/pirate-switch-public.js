jQuery( document ).ready( function ( $ ) {

    if( window.location.hash.substr(1) === 'switcher-open' ) {
        toggleSwitcher();
    }
    $( '#ps-open-icon' ).on( "click", function () {
      toggleSwitcher();
    } );

    $( 'head' ).append( '<style class="pirate_switch_css_container">test</style>' )


    setSidebarHeight();

    var cssContainer = $( '.pirate_switch_css_container' )

    $( '.ps-color-box' ).on( "click", function () {

        $( cssContainer ).empty();

        var cssCode = jQuery( this ).next().val();

        if ( (cssCode != 'undefined') && (cssCode != '') )
            $( cssContainer ).append( cssCode );
    } );
} );

function setSidebarHeight() {
    windowHeight = jQuery( window ).innerHeight();
    jQuery( '#ps-content' ).css( 'max-height', windowHeight );

    var height = windowHeight;
    var childThemeContainer = jQuery( '.ps-child-theme-subcontainer' );
    jQuery( '.ps-large-box:not(.ps-child-themes)' ).each( function () {
        height = height - jQuery( this ).outerHeight();
    } );

    jQuery( '.ps-child-themes > p' ).each( function () {
        console.log(jQuery( this ).outerHeight())
        height = height - jQuery( this ).outerHeight();

        console.log('title')
    } );

    jQuery( childThemeContainer ).css( 'height', height - 25 );
}

jQuery( window ).resize( function () {
    setSidebarHeight();
} );

function toggleSwitcher() {
    var $switchMainBox = jQuery( '#ps-main-box, #ps-open-icon' ),
        hideClass = 'ps-opened';
    $switchMainBox.toggleClass( hideClass );
}