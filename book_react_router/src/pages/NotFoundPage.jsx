import { LinkButton } from "@/shared/ui/Button/Button.jsx";
import { StatusPanel } from "@/shared/ui/StatusPanel/StatusPanel.jsx";
import { PATHS } from "@/shared/config/paths.js";

export default function NotFoundPage() {
  return (
    <StatusPanel>
      <p>요청하신 주소를 찾을 수 없습니다.</p>
      <LinkButton to={PATHS.bookList}>도서 목록으로</LinkButton>
    </StatusPanel>
  );
}
