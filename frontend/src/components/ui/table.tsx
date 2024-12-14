import React from "react";

// Define the type for the props that include `children` and optional `className`
type ComponentProps = {
  children: React.ReactNode;
  className?: string;
};

export const Table = ({ children, className }: ComponentProps) => (
  <table className={`w-full border-collapse border border-gray-200 ${className || ""}`}>{children}</table>
);

export const TableBody = ({ children, className }: ComponentProps) => (
  <tbody className={`bg-white ${className || ""}`}>{children}</tbody>
);

export const TableCaption = ({ children, className }: ComponentProps) => (
  <caption className={`text-left text-gray-700 ${className || ""}`}>{children}</caption>
);

export const TableCell = ({ children, className }: ComponentProps) => (
  <td className={`border border-gray-300 px-4 py-2 ${className || ""}`}>{children}</td>
);

export const TableHead = ({ children, className }: ComponentProps) => (
  <thead className={`bg-gray-100 ${className || ""}`}>{children}</thead>
);

export const TableHeader = ({ children, className }: ComponentProps) => (
  <th className={`border border-gray-300 px-4 py-2 text-left ${className || ""}`}>{children}</th>
);

export const TableRow = ({ children, className }: ComponentProps) => (
  <tr className={className}>{children}</tr>
);
