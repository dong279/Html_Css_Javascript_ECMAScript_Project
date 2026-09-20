const COLORS = {
  error: "#f44336",
  success: "#4CAF50",
};

function MessageBox({ message }) {
  if (!message) {
    return null;
  }

  return (
    <span
      className="error-message"
      style={{ color: COLORS[message.type] ?? COLORS.error }}
    >
      {message.text}
    </span>
  );
}

export default MessageBox;
