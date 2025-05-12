"use client";

import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";

export const StatUsers = ({ data }) => {
  const [total, setTotal] = useState({
    totalUser: 0,
    totalJobs: 0,
    totalSalary: 0,
  });

  useEffect(() => {
    if (!data) return;

    const totalUser = data.length;
    const totalJobs = data.filter((user) => user.job).length;
    const totalSalary = data.reduce((sum, user) => {
      const salary = Number(user.salary) || 0;
      return sum + salary;
    }, 0);

    setTotal({ totalUser, totalJobs, totalSalary });
  }, [data]);

  const statItems = [
    {
      title: "Total Users",
      total: total.totalUser,
      icon: <FiUsers size="32" />,
    },
    {
      title: "Total Jobs",
      total: total.totalJobs,
      icon: <MdOutlineWorkOutline size="32" />,
    },
    {
      title: "Total Salary",
      total: total.totalSalary.toLocaleString(),
      icon: <BiMoneyWithdraw size="32" />,
    },
  ];

  return (
    <>
      {statItems.map((item, i) => (
        <div key={i} className="stats shadow basis-1/3">
          <div className="stat">
            <div className="stat-figure text-primary">{item.icon}</div>
            <div className="stat-title">{item.title}</div>
            <div className="stat-value text-primary">{item.total}</div>
          </div>
        </div>
      ))}
    </>
  );
};
