let store = {
  _subscriber() {
    console.log("no subscribers");
  },
  _state: {
    MessagePage: {
      dialogs: [
        { id: 1, name: "Sam" },
        { id: 2, name: "Nika" },
        { id: 3, name: "Maks" },
        { id: 4, name: "Kirill" },
        { id: 5, name: "Ded" },
      ],

      messages: [
        { id: 1, text: "Hi, Sam!" },
        { id: 2, text: "How are you?" },
        { id: 3, text: "ded musooor" },
        { id: 4, text: "Hi, Kirill!" },
        { id: 5, text: "lab5 example" },
      ],
    },
    dialogsPage: {
      posts: [
        { id: 1, message: "learn react!", likes: 15 },
        { id: 2, message: "Dima #1", likes: 7 },
      ],
      newPostText: "Hasagi228",
    },
    friendsPage: {
      friends: [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Alex" },
        { id: 3, name: "Nika" },
        { id: 4, name: "Kirill" },
      ],
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },
  addPost() {
    debugger;
    let newPost = {
      id: 5,
      message: this._state.dialogsPage.newPostText,
      likes: 0,
    };
    this._state.dialogsPage.posts.push(newPost);
    this._state.dialogsPage.newPostText = "";
    this._subscriber(this._state); //проверить вызов
  },
  updateNewPostText(newText) {
    debugger;
    this._state.dialogsPage.newPostText = newText;
    this._subscriber(this._state); //проверить вызов
  },
};

export default store;
