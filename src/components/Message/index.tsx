import { MessageStyle } from "./style";

interface Props {
  text?: string;
  nationalities?: string[];
  searchTerm?: string;
}
const Message = ({ text, nationalities, searchTerm }: Props) => {
  if (!text && !nationalities && !searchTerm) {
    return <div />;
  }
  return (
    <MessageStyle>
      <div
        className={`info-message${
          (nationalities && nationalities.length > 0) || searchTerm
            ? " small"
            : ""
        }`}
      >
        {text ? (
          <p className="info-title">{text}</p>
        ) : (
          (nationalities || searchTerm) && (
            <>
              {nationalities && nationalities.length > 0 && (
                <p className="info-title sub">
                  Nationalities: {nationalities.join(", ")}
                </p>
              )}
              {searchTerm && (
                <p className="info-title sub">Search term: {searchTerm}</p>
              )}
            </>
          )
        )}
      </div>
    </MessageStyle>
  );
};
export default Message;
