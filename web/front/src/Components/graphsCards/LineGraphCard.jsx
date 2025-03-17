import Card from "../Card";
import Skeleton from "../Skeleton";
// import LineGraph from "../graphs/LineGraph";
import LineGraphZoom from "../graphs/LineGraphZoom";
import PropType from "prop-types";

const classNameString = "w-full lg:w-full min-h-[350px]";
export default function LineGraphCard({ dataSet, series, dataShow }) {
  return !dataSet && !series ? (
    <Skeleton className={classNameString} />
  ) : (
    <Card className={classNameString}>
      <LineGraphZoom
        dates={dataSet ? dataSet : null}
        dataShow={dataShow}
        series={series ? series : null}
      />
    </Card>
  );
}

LineGraphCard.propTypes = {
  dataSet: PropType.object,
  series: PropType.array,
};
