</div> <!-- #content end-->
</div>
<div component="bottombar" class="bottombar d-flex d-lg-none fixed-bottom ff-secondary gap-1 align-items-center">
<div class="bottombar-nav p-2 border-top text-bg-light d-flex justify-content-between align-items-center w-100">
<div class="">
<a href="#" role="button" class="p-2 nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" >
<i class="fa fa-fw fa-lg fa-bars"></i>
</a>
</div>
</div>
</div>
{{{ if !isSpider }}}
<div class="">
<div component="toaster/tray" class="alert-window fixed-bottom mb-5 mb-md-2 me-2 me-md-5 ms-auto" style="width:300px; z-index: 1090;">
<div id="reconnect-alert" class="alert alert-dismissible alert-warning fade hide" component="toaster/toast">
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-hidden="true"></button>
<p class="mb-0">[[global:reconnecting-message, {config.siteTitle}]]</p>
</div>
</div>
</div>
{{{ end }}}
<script>
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', prepareFooter);
} else {
prepareFooter();
}
function prepareFooter() {
$(document).ready(function () {
app.coldLoad();
});
}
</script>
</body>
</html>