$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="main_chat__content--chat" data-message-id=${message.id}>
          <div class="main_chat__content--chat___date">
            <div class="main_chat__content--chat___date---name">
              ${message.user_name}
            </div>
            <div class="main_chat__content--chat___date---time">
              ${message.created_at}
            </div>
          </div>
          <div class="main_chat__content--chat___message">
            ${message.boby}
            <img src=${message.image} >
          </div>
        </div>`
      return html;
    } else {
      var html =
        `<div class="main_chat__content--chat" data-message-id=${message.id}>
          <div class="main_chat__content--chat___date">
            <div class="main_chat__content--chat___date---name">
              ${message.user_name}
            </div>
            <div class="main_chat__content--chat___date---time">
              ${message.created_at}
            </div>
          </div>
          <div class="main_chat__content--chat___message">
            ${message.boby}
          </div>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
    })
  });
});