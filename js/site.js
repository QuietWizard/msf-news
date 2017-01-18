//*************************************************  Site.master  *************************************************//

//On Windows Resize function, set css height for "Content" id
window.onresize = function () {
    var windowInnerHeight = window.innerHeight;
    var innerHeightFooter = windowInnerHeight - 510;
    $("#pageContent").css({ "-height": innerHeightFooter + "px" });
};

//Initial Setting of "Content"
$(function () {
    var windowInnerHeight = window.innerHeight;
    var innerHeightFooter = windowInnerHeight - 510;
    $("#pageContent").css({ "min-height": innerHeightFooter + "px" });
});

//Offsets the subpanel to be 20px's below the header when the sidebar nav links are clicked
var offset = 90;
$('.sidebar-links a').click(function (event) {
    event.preventDefault();
    window.location.hash = $(this).attr('href');
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});

$('.panel-footer a').click(function (event) {
    event.preventDefault();
    window.location.hash = $(this).attr('href');
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});

//IE10 Support in Windows 8 and Windows Phone 8
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
}
