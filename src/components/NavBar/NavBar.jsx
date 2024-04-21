export default function NavBar() {
  //if actual menu items list html far away from button html add aria-controls="main-menu" to button (i.e. matching id of the list)
  return (
    <nav aria-label="Main menu">
      <ul aria-controls="main-menu"></ul>
      <button aria-label="Open the menu" aria-expanded="true">
        &#9776;
      </button>
      <button aria-label="Close the menu" aria-expanded="false">
        &#215;
      </button>
    </nav>
  );
}
