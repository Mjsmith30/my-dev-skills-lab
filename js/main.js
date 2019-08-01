$("#button").on('click', function(evt){
    // console.log("clicked"); 
    const value = $("#input").val()

    const input = `
    <tr>
        <td><button class="remove">Remove</button></td>
        <td>${value}</td>
    </tr>    
    `

    $(input).appendTo($('table'));
    
    // <button class="btn btn-xs btn-danger">Remove</button>
        
        // console.log(value);
});
    $(".list").on("click", "button", function() {
        $(this).closest("tr").fadeOut(1000, function() {
        $(this).remove();   
    })
});