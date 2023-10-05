// import { useAppDispatch, useAppSelector } from "app/hooks";
// import {
//   decrementCounter,
//   incrementCounter,
//   resetCounter,
//   selectCounter,
// } from "app/slice/exampleSlice";
import Popover from "components/dropdown";
import { Navigation } from "components/navigation";
import React, { useEffect, useState } from "react";
import DashBoardContainer from "./dashboardContainer";
import { SelectBox } from "components/selectBox";
import { optionProps } from "components/selectBox/index.interface";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Filter } from "./index.interface";

const groupOptions: optionProps[] = [
  {
    label: "Status",
    value: "status",
  },
  {
    label: "User",
    value: "user",
  },
  {
    label: "Priority",
    value: "priority",
  },
];

const orderOptions: optionProps[] = [
  {
    label: "Priority",
    value: "priority",
  },
  {
    label: "Title",
    value: "title",
  }
];

const initialGroupValue = {
  group: "status",
  order: "priority",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filterValue, setFilterValue] = useState<Filter>({
    ...JSON.parse(
      searchParams.get("filters") || JSON.stringify(initialGroupValue)
    ),
  });

  const handleChangeGroupValue = (value: string, key: string) => {
    setFilterValue((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  useEffect(() => {
    navigate({ search: `?filters=${JSON.stringify(filterValue)}` });
  }, [filterValue]);

  return (
    <div>
      <Navigation>
        <Popover title="Display">
          <SelectBox
            options={groupOptions}
            label="Grouping"
            initialValue={filterValue.group}
            onChange={(e) => handleChangeGroupValue(e, "group")}
          />
          <SelectBox
            options={orderOptions}
            initialValue={filterValue.order}
            label="Ordering"
            onChange={(e) => handleChangeGroupValue(e, "order")}
          />
        </Popover>
      </Navigation>
      <DashBoardContainer />
    </div>
  );
};

export default Dashboard;
