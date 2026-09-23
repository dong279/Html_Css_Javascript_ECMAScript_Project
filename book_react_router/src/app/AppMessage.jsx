import { useEffect } from "react";

import { Message } from "@/shared/ui/Message/Message.jsx";
import { MESSAGE_TYPE, useUiStore } from "@/shared/model/uiStore.js";

const AUTO_CLEAR_MS = 3000;

export function AppMessage() {
  const message = useUiStore((state) => state.message);
  const clearMessage = useUiStore((state) => state.clearMessage);

  useEffect(() => {
    if (message?.type !== MESSAGE_TYPE.SUCCESS) {
      return;
    }

    const timer = setTimeout(clearMessage, AUTO_CLEAR_MS);

    return () => clearTimeout(timer);
  }, [message, clearMessage]);

  return <Message message={message} />;
}
