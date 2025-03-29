/* eslint-disable compat/compat */
import React, { useState } from "react";
import type { GetProp, TableProps } from "antd";
import { Table } from "antd";
import type { SorterResult } from "antd/es/table/interface";
import { useSelector } from "react-redux";
import { productListSelector } from "@/state/user/userState";
import { ISerializedProduct } from "@/models/product/IProduct";

type ColumnsType<T extends object = object> = TableProps<T>["columns"];
type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: SorterResult<any>["field"];
  sortOrder?: SorterResult<any>["order"];
  pageSizeOptions?: string[];
  filters?: Parameters<GetProp<TableProps, "onChange">>[1];
}

const columns: ColumnsType<Partial<ISerializedProduct>> = [
  {
    title: "Product name",
    dataIndex: "name",
    sorter: (a, b) => a.name!.length - b.name!.length,
  },
  {
    title: "Category Type",
    dataIndex: "categoryType",
    filters: [
      { text: "Furniture", value: "furniture" },
      { text: "Garden", value: "garden" },
      { text: "Lamp", value: "lamp" },
      { text: "Bathroom", value: "bathroom" },
      { text: "Kitchen", value: "kitchen" },
      { text: "Office", value: "office" },
      { text: "Decor", value: "decor" },
      { text: "Outdoor", value: "outdoor" },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.categoryType!.includes(value as string),
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price! - b.price!,
  },
  {
    title: "Product Description",
    dataIndex: "description",
  },
];

const TableComponent: React.FC = () => {
  const [data, setData] = useState<Partial<ISerializedProduct>[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      pageSizeOptions: ["5", "10", "20", "50"],
      showSizeChanger: true,
    },
  });
  const productList = useSelector(productListSelector);

  const handleTableChange: TableProps<
    Partial<ISerializedProduct>
  >["onChange"] = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <Table<Partial<ISerializedProduct>>
      columns={columns}
      rowKey={(record) => record.id!}
      dataSource={productList || []}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default TableComponent;
