import "./index.css";

const OfferTagComponent = (props) => {
  const { offerTagProps } = props;

  const styleProps = {
    backgroundColor: offerTagProps?.backgroundColor,
    color: offerTagProps?.textColor,
    borderLeftColor: offerTagProps?.textColor,
  };

  return (
    <div className="offerTag-container">
      <span className="offerTag" style={styleProps}>
        <span className="offerTagTitle">{offerTagProps?.title}</span>
        <span className="offerTagSubTitle">{offerTagProps?.subTitle}</span>
      </span>
    </div>
  );
};

export default OfferTagComponent;
