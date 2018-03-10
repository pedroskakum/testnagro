    // var app = new Vue({
    // el: '#app',
    // data: {
    //     message: 'Hello Vue!'
    // }
    // })
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });

    $(".button_action").click(function(){

        //console.log('chegou aqui');
        
        $.ajax({url: "./pages/"+this.id+".html", success: function(result){
            $("#content").html(result);
        }});
    });

    