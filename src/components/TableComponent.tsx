import React, { useState } from "react";
import type { TableProps } from "antd";
import { Table } from "antd";
import type { ColumnType } from "antd/es/table/interface";
import { AnyObject } from "antd/es/_util/type";

interface Props<T> {
  dataSource: T[];
  columns: ColumnType<T>[];
  onRowSelect?: (item: T) => void;
}

const TableComponent = <T,>({ dataSource, columns, onRowSelect }: Props<T>) => {
  const [, setData] = useState<T[]>();
  const [loading] = useState(false);
  const [tableParams, setTableParams] = useState<AnyObject>({
    pagination: {
      current: 1,
      pageSize: 10,
      pageSizeOptions: ["5", "10", "20", "50"],
      showSizeChanger: true,
    },
  });

  const handleTableChange: TableProps<T>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
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
    <Table<T>
      columns={columns as ColumnType<T>[]}
      rowKey={(record) => (record as any).id!}
      dataSource={dataSource}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
      onRow={(record) => ({
        onClick: () => {
          if (onRowSelect) {
            onRowSelect(record);
          }
        },
      })}
    />
  );
};

export default TableComponent;
