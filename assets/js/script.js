// check off todo

$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
});

//delete
$('ul').on('click','span',function(event){
    //alert('clicked');
    
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })

    event.stopPropagation();
    
});

//add to do
$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //console.log('works');
        let text = $(this).val();
        $(this).val('');
        //create li
        $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${text}</li>`);
    }
})

$('#addBtn').click(function(){
    $("input[type='text'").fadeToggle();
})
// $('li').click(function(){
//     if($(this).css('color') === 'rgb(128, 128, 128)'){
//         alert('works');
        
//         $(this).css('color','black');
//         $(this).css("text-decoration","none");
//     }else{
//         $(this).css('color','gray');
//         $(this).css("text-decoration","line-through");
//     }

// })