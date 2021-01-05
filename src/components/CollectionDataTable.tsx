import { Button } from "@chakra-ui/react";
import { useState, useMemo, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { firestore } from "../firebase/firebase";
import { Spinner } from "./ui/Spinner";
import { Table } from "./ui/Table";

type Props = {
  collection: any;
};

export const CollectionDataTable = ({ collection }: Props) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const match = useRouteMatch();

  const columns = useMemo(
    () => [
      {
        Header: "Client Name",
        accessor: "name",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: (cell: any) => (
          <Link to={`${match.url}/${cell.row.values.id}`}>View Details</Link>
        ),
      },
    ],
    [match.url]
  );

  useEffect(() => {
    firestore
      .collection(collection)
      .orderBy("timestamp", "desc")
      .get()
      .then((querySnapshot) => {
        const queryData: any[] = [];
        querySnapshot.forEach((doc) =>
          queryData.push({ id: doc.id, ...doc.data() })
        );
        setData(queryData);
        setLoading(false);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [collection]);

  if (loading) {
    return <Spinner />;
  }

  if (!data.length) {
    return (
      <>
        <Link to={`${match.url}/new`}>
          <Button colorScheme="brand" size="sm" width="full" mb="1rem">
            Add New
          </Button>
        </Link>
        <div>No Data Found</div>
      </>
    );
  }

  return (
    <>
      <Link to={`${match.url}/new`}>
        <Button colorScheme="brand" size="sm" width="full" mb="1rem">
          Add New
        </Button>
      </Link>
      <Table columns={columns} data={data} />
    </>
  );
};
