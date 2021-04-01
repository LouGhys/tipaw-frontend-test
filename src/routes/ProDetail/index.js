import classNames from "classnames/bind";
import styleIdentifiers from "./proDetail.scss";
const styles = classNames.bind(styleIdentifiers);

function ProDetail(props) {
  const {
    match: { params },
  } = props;

  return (
    <div className={styles("proDetail")}>
      <h1>Pro Detail Page {params?.id ? `(${params.id})` : null}</h1>
      <p>Please update this page to display some details of the pro</p>
    </div>
  );
}

export default ProDetail;
