import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <a>links</a>
      <button onClick={() => navigate("/contact")}>contact</button>
      <a>icons8</a>
    </footer>
  );
}
