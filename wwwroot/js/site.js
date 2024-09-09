// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
    if ($('.dataTable').length > 0) {
        $('.dataTable').DataTable({ 
            "paging": true,
            "searching": true,
            
        });
    }

    $("input[type='submit']").click(function () {
         
    });
});