const Card = ({
  cardHeader = null,
  cardBody = null,
  cardFooter = null,
}) => {
  return (
    <div
      className="
        w-80
        shrink-0
        flex
        flex-col
        overflow-hidden
        rounded-3xl
        bg-white/95
        backdrop-blur-md
        border
        border-white/30
        shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-3
        hover:scale-105
        hover:shadow-blue-500/40
      "
    >
      {cardHeader}
      {cardBody}
      {cardFooter}
    </div>
  );
};

export default Card;