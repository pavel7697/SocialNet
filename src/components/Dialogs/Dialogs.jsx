import React from "react";
import d from "./Dialogs.module.css";
import Message from "./DialogMessage/DialogMessage";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
  let dialogs = props.data.dialogs;
  let messages = props.data.messages;

  let message = React.createRef();

  let sendMessage = () => {
    alert(message.current.value);
  };

  return (
    <div class={d.dialogs}>
      <div class={d.dialogNav}>
        <form class={d.searchForm}>
          <input
            type="search"
            value=""
            onChange=""
            placeholder="Search"
            class={d.searchInput}
          />
          <button type="submit" class="search-button">
            {/* <svg class="submit-button">
              <use xmlns />xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
          </svg> */}
          </button>
        </form>
        <div class={d.dialogsItems}>
          {dialogs.map((dialog) => (
            <DialogItem name={dialog.name} id={dialog.id} />
          ))}
        </div>
      </div>
      <div>
        <div class={d.messages}>
          {messages.map((m) => (
            <Message text={m.text} />
          ))}
        </div>
        <div className={d.newMessage}>
          <textarea ref={message}></textarea>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
