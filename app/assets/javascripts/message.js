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
            ${message.body}
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
            ${message.body}
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
      url: url,
      type: 'POST',
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main_chat__content').append(html);
      $('form')[0].reset();
      $('.main_chat__content').animate({ scrollTop: $('.main_chat__content')[0].scrollHeight});
      $('.input-box__send--box').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});