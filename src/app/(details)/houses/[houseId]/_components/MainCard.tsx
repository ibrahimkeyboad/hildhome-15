import HouseDetails from './HouseDetails';

interface Props {
  data: any;
}

async function MainCard({ data }: Props) {
  return (
    <>
      <HouseDetails data={data} />
    </>
  );
}

export default MainCard;
