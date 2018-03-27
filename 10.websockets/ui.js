const renderMessage = message => `<li>${ message.text } <i>${ JSON.stringify(message.meta) }</i></li>`;

const updateUI = () => {
  const messages = store.getState();

  $('.messages > ul').html(messages.map(renderMessage));
};

const handleAdd = () => {
  const $message = $('.messages > input[type=text]');
  const $global  = $('.messages > input[type=checkbox]');

  store.dispatch(
    chatMessage(
      $message.val(),
      $global.is(':checked')
    ));

  $message.val('');
};

const loadUI = () => {
  $('#app').append(`
    <div class="messages">
      <h2>Websocket messages:</h2>
      <ul></ul>
      <input type="checkbox" checked />
      <label for="">Send to server</label>
      <br/>
      <input type="text" />
      <button>Send</button>
    </div>
  `);

  store.subscribe(updateUI);

  $(document).on('click', '.messages > button', handleAdd);

  updateUI();
};
