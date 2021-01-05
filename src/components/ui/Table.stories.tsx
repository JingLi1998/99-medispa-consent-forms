import { Table } from "./Table";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: Table,
  title: "Table",
} as Meta;

const columns = [
  {
    Header: "Column 1",
    accessor: "column-1",
  },
  {
    Header: "Column 2",
    accessor: "column-2",
  },
  {
    Header: "Column 3",
    accessor: "column-3",
  },
];

const data = [
  { "column-1": 1, "column-2": 2, "column-3": 3 },
  { "column-1": 1, "column-2": 2, "column-3": 3 },
  { "column-1": 1, "column-2": 2, "column-3": 3 },
];

export const Default = () => <Table columns={columns} data={data} />;
