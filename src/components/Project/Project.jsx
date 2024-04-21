export default function Project() {
  return (
    <article>
      <h4>Project name</h4>
      <ul role="tabslist">
        <li>
          <a role="tab" aria-selected="true" aria-controls="demo">
            Demo
          </a>
        </li>
      </ul>
      <div id="demo" role="tabpanel">
        Demo panel content
      </div>
    </article>
  );
}
