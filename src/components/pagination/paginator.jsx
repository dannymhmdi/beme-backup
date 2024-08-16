"use client";
import Error from "next/error";
import React, { useEffect, useState } from "react";

export const Paginator = ({
  currentPage,
  setCurrentPage,
  totalItems,
  setIsLoading,
}) => {
  const pageSize = Math.ceil(totalItems / 6);
  let buttons = [];
  for (let item = 1; item <= pageSize; item++) {
    buttons.push(
      <button
        key={item}
        onClick={() => {
          setCurrentPage(item);
          setIsLoading(true);
        }}
        className={`border px-2 py-0.5 ms-1 rounded-md ${
          item === currentPage ? "bg-teal-500 text-white" : "bg-white text-dark"
        }`}
      >
        {item}
      </button>
    );
  }
  return <div className="flex justify-center py-4 bg-white">{buttons}</div>;
};
